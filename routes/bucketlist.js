const express = require('express');
const router = express.Router();
const Bucketlist = require('../models/Bucketlist');
const Temple = require('../models/Temple');
const jwt = require('jsonwebtoken');
// DEPLOYMENT FIX: Import the standard auth middleware for the /migrate route
const auth = require('../middleware/auth'); 

// Helper function to generate session ID for non-authenticated users
const generateSessionId = (req) => {
  // Use a session header fallback, or req.ip, or a default
  return req.headers['x-session-id'] || req.ip || 'default-session';
};

// Helper function to get user info from token (optional)
const getUserFromToken = (req) => {
  const authHeader = req.header('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.substring(7);
      // DEPLOYMENT FIX: Must use the environment secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 
      return { userId: decoded.userId, isAuthenticated: true };
    } catch (error) {
      console.log('Token verification failed for guest route:', error.message);
      return { userId: null, isAuthenticated: false };
    }
  }
  return { userId: null, isAuthenticated: false };
};

// Get user's bucketlist (Authenticated or Guest)
router.get('/', async (req, res) => {
  try {
    const { userId, isAuthenticated } = getUserFromToken(req);
    let query = {};
    
    if (isAuthenticated && userId) {
      // User is authenticated - get user's bucketlist
      query.userId = userId;
    } else {
      // User not authenticated - use session-based
      const sessionId = generateSessionId(req);
      query = { sessionId, userId: { $exists: false } };
    }
    
    // Sort by most recently added
    const bucketlist = await Bucketlist.find(query).sort({ addedAt: -1 });
    res.json(bucketlist);
  } catch (error) {
    console.error('Error fetching bucketlist:', error);
    res.status(500).json({ error: 'Failed to fetch bucketlist' });
  }
});

// Add temple to bucketlist (Authenticated or Guest)
router.post('/', async (req, res) => {
  try {
    const { templeId } = req.body;
    
    if (!templeId) {
      return res.status(400).json({ error: 'Temple ID is required' });
    }
    
    const { userId, isAuthenticated } = getUserFromToken(req);
    let bucketlistData = {};

    // Check if temple exists in the main data source
    const temple = await Temple.findOne({ id: templeId });
    if (!temple) {
      return res.status(404).json({ error: 'Temple not found' });
    }

    if (isAuthenticated && userId) {
      bucketlistData.userId = userId;
      
      const existing = await Bucketlist.findOne({ userId, templeId });
      if (existing) {
        return res.status(400).json({ error: 'Temple already in bucketlist' });
      }
    } else {
      const sessionId = generateSessionId(req);
      bucketlistData.sessionId = sessionId;
      
      const existing = await Bucketlist.findOne({ sessionId, templeId, userId: { $exists: false } });
      if (existing) {
        return res.status(400).json({ error: 'Temple already in bucketlist' });
      }
    }

    // Include ALL necessary fields from the Temple data
    bucketlistData.templeId = temple.id;
    bucketlistData.templeName = temple.name;
    bucketlistData.templeLocation = temple.location;
    bucketlistData.templeImage = temple.image;
    bucketlistData.deity = temple.deity;        // CORRECT
    bucketlistData.category = temple.category;  // CORRECT

    const bucketlistItem = new Bucketlist(bucketlistData);
    await bucketlistItem.save();
    
    console.log('Added to bucketlist:', {
      templeId: temple.id,
      templeName: temple.name,
      deity: temple.deity,
      category: temple.category,
      userId: isAuthenticated ? userId : 'guest'
    });
    
    res.status(201).json(bucketlistItem);
  } catch (error) {
    console.error('Error adding to bucketlist:', error);
    if (error.code === 11000) {
      // Catch MongoDB duplicate key error which can happen during race conditions
      res.status(400).json({ error: 'Temple already in bucketlist' });
    } else {
      res.status(500).json({ error: 'Failed to add to bucketlist' });
    }
  }
});

// Remove temple from bucketlist (Authenticated or Guest)
router.delete('/:templeId', async (req, res) => {
  try {
    const { userId, isAuthenticated } = getUserFromToken(req);
    const { templeId } = req.params;
    let query = { templeId };

    if (isAuthenticated && userId) {
      // User is authenticated
      query.userId = userId;
    } else {
      // User not authenticated - use session-based
      const sessionId = generateSessionId(req);
      query.sessionId = sessionId;
      query.userId = { $exists: false };
    }

    console.log('Removing from bucketlist with query:', query);
    const result = await Bucketlist.deleteOne(query);
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Temple not found in bucketlist' });
    }

    res.json({ message: 'Temple removed from bucketlist' });
  } catch (error) {
    console.error('Error removing from bucketlist:', error);
    res.status(500).json({ error: 'Failed to remove from bucketlist' });
  }
});

// Clear entire bucketlist (Authenticated or Guest)
router.delete('/', async (req, res) => {
  try {
    const { userId, isAuthenticated } = getUserFromToken(req);
    let query = {};

    if (isAuthenticated && userId) {
      // User is authenticated
      query.userId = userId;
    } else {
      // User not authenticated - use session-based
      const sessionId = generateSessionId(req);
      query = { sessionId, userId: { $exists: false } };
    }

    const result = await Bucketlist.deleteMany(query);
    console.log(`Cleared ${result.deletedCount} items from bucketlist`);
    
    res.json({ 
      message: 'Bucketlist cleared', 
      deletedCount: result.deletedCount 
    });
  } catch (error) {
    console.error('Error clearing bucketlist:', error);
    res.status(500).json({ error: 'Failed to clear bucketlist' });
  }
});

// Migrate session-based bucketlist to user account (called when user logs in)
router.post('/migrate', auth, async (req, res) => { 
  try {
    // Standard auth middleware attaches user info to req.user, though the provided code uses req.userId.
    // Assuming the user's setup attaches the ID directly to the request object.
    const userId = req.userId; 
    let { sessionId } = req.body;

    if (!sessionId) {
      // Use fallback if sessionId isn't explicitly sent in the body
      const fallbackSessionId = generateSessionId(req);
      if (!fallbackSessionId || fallbackSessionId === 'default-session') {
        return res.status(400).json({ error: 'Session ID required for migration' }); 
      }
      sessionId = fallbackSessionId;
    }

    // Find all session-based bucketlist items
    // Using .lean() for performance
    const sessionItems = await Bucketlist.find({ 
      sessionId, 
      userId: { $exists: false } 
    }).lean(); 

    if (sessionItems.length === 0) {
      return res.json({ message: 'No items to migrate', migratedCount: 0 });
    }

    // Pre-check user's existing list to avoid duplicates
    const userItems = await Bucketlist.find({ userId }).select('templeId').lean();
    const existingUserTempleIds = new Set(userItems.map(item => item.templeId));

    let migratedCount = 0;
    const bulkOperations = [];
    const sessionItemIdsToDelete = [];

    for (const item of sessionItems) {
      // Only migrate if the user doesn't already have this temple
      if (!existingUserTempleIds.has(item.templeId)) {
        // Prepare to insert the new item for the user
        bulkOperations.push({
          insertOne: {
            document: {
              userId,
              templeId: item.templeId,
              templeName: item.templeName,
              templeLocation: item.templeLocation,
              templeImage: item.templeImage,
              // FIX: CRITICAL: Include deity and category from the session item
              deity: item.deity,        
              category: item.category,  
              addedAt: item.addedAt
            }
          }
        });
        migratedCount++;
      }

      // Add the session-based item to the list for removal (always remove the session item)
      sessionItemIdsToDelete.push(item._id);
    }
    
    // Execute bulk operations
    if (bulkOperations.length > 0) {
      await Bucketlist.bulkWrite(bulkOperations);
    }
    
    if (sessionItemIdsToDelete.length > 0) {
      // Clean up the guest entries
      await Bucketlist.deleteMany({ _id: { $in: sessionItemIdsToDelete } });
    }

    console.log(`Migrated ${migratedCount} items for user ${userId}`);
    
    res.json({ 
      message: `Successfully migrated ${migratedCount} items to your account`,
      migratedCount 
    });
  } catch (error) {
    console.error('Error migrating bucketlist:', error);
    res.status(500).json({ error: 'Failed to migrate bucketlist' });
  }
});

// Check if temple is in bucketlist (Authenticated or Guest)
router.get('/check/:templeId', async (req, res) => {
  try {
    const { templeId } = req.params;
    const { userId, isAuthenticated } = getUserFromToken(req);
    let query = { templeId };

    if (isAuthenticated && userId) {
      query.userId = userId;
    } else {
      const sessionId = generateSessionId(req);
      query.sessionId = sessionId;
      query.userId = { $exists: false };
    }

    const item = await Bucketlist.findOne(query);
    res.json({ inBucketlist: !!item });
  } catch (error) {
    console.error('Error checking bucketlist:', error);
    res.status(500).json({ error: 'Failed to check bucketlist' });
  }
});

module.exports = router;