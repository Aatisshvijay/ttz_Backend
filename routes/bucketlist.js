const express = require('express');
const router = express.Router();
const Bucketlist = require('../models/Bucketlist');
const Temple = require('../models/Temple');
const jwt = require('jsonwebtoken');
// DEPLOYMENT FIX: Import the standard auth middleware for the /migrate route
const auth = require('../middleware/auth'); 

// Helper function to generate session ID for non-authenticated users
const generateSessionId = (req) => {
  return req.headers['x-session-id'] || req.ip || 'default-session';
};

// Helper function to get user info from token (optional)
const getUserFromToken = (req) => {
  const authHeader = req.header('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.substring(7);
      // DEPLOYMENT FIX: Removed hardcoded fallback secret 'your-secret-key'
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 
      return { userId: decoded.userId, isAuthenticated: true };
    } catch (error) {
      console.log('Token verification failed for guest route:', error.message);
      return { userId: null, isAuthenticated: false };
    }
  }
  return { userId: null, isAuthenticated: false };
};

// Get user's bucketlist
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
    
    const bucketlist = await Bucketlist.find(query).sort({ addedAt: -1 });
    res.json(bucketlist);
  } catch (error) {
    console.error('Error fetching bucketlist:', error);
    res.status(500).json({ error: 'Failed to fetch bucketlist' });
  }
});

// Add temple to bucketlist
router.post('/', async (req, res) => {
  try {
    const { templeId } = req.body;
    
    if (!templeId) {
      return res.status(400).json({ error: 'Temple ID is required' });
    }
    
    const { userId, isAuthenticated } = getUserFromToken(req);
    let bucketlistData = {};

    // Check if temple exists
    const temple = await Temple.findOne({ id: templeId });
    if (!temple) {
      return res.status(404).json({ error: 'Temple not found' });
    }

    if (isAuthenticated && userId) {
      // User is authenticated
      bucketlistData.userId = userId;
      
      // Check if already in bucketlist for this user
      const existing = await Bucketlist.findOne({ userId, templeId });
      if (existing) {
        return res.status(400).json({ error: 'Temple already in bucketlist' });
      }
    } else {
      // User not authenticated - use session-based
      const sessionId = generateSessionId(req);
      bucketlistData.sessionId = sessionId;
      
      const existing = await Bucketlist.findOne({ sessionId, templeId, userId: { $exists: false } });
      if (existing) {
        return res.status(400).json({ error: 'Temple already in bucketlist' });
      }
    }

    // Add common temple data
    bucketlistData.templeId = temple.id;
    bucketlistData.templeName = temple.name;
    bucketlistData.templeLocation = temple.location;
    bucketlistData.templeImage = temple.image;

    const bucketlistItem = new Bucketlist(bucketlistData);
    await bucketlistItem.save();
    
    console.log('Added to bucketlist:', {
      templeId: temple.id,
      templeName: temple.name,
      userId: isAuthenticated ? userId : 'guest',
      sessionId: !isAuthenticated ? bucketlistData.sessionId : 'N/A'
    });
    
    res.status(201).json(bucketlistItem);
  } catch (error) {
    console.error('Error adding to bucketlist:', error);
    if (error.code === 11000) {
      res.status(400).json({ error: 'Temple already in bucketlist' });
    } else {
      res.status(500).json({ error: 'Failed to add to bucketlist' });
    }
  }
});

// Remove temple from bucketlist
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

// Clear entire bucketlist
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
// DEPLOYMENT FIX: Applied the strict 'auth' middleware to ensure a valid user is logged in
router.post('/migrate', auth, async (req, res) => { 
  try {
    // The 'auth' middleware guarantees req.userId is set
    const userId = req.userId; 
    let { sessionId } = req.body;

    if (!sessionId) {
      const fallbackSessionId = generateSessionId(req);
      if (!fallbackSessionId || fallbackSessionId === 'default-session') {
        // Must provide session ID to know which guest list to migrate
        return res.status(400).json({ error: 'Session ID required for migration' }); 
      }
      sessionId = fallbackSessionId;
    }

    // Find all session-based bucketlist items
    const sessionItems = await Bucketlist.find({ 
      sessionId, 
      userId: { $exists: false } 
    });

    if (sessionItems.length === 0) {
      return res.json({ message: 'No items to migrate', migratedCount: 0 });
    }

    // Use Mongoose bulk write for efficiency instead of individual saves/deletes
    let migratedCount = 0;
    const bulkOperations = [];
    const sessionItemIdsToDelete = [];

    for (const item of sessionItems) {
      // Check for duplicates before migrating
      const existingUserItem = await Bucketlist.findOne({
        userId,
        templeId: item.templeId
      });

      if (!existingUserItem) {
        // Prepare to insert the new item for the user
        bulkOperations.push({
          insertOne: {
            document: {
              userId,
              templeId: item.templeId,
              templeName: item.templeName,
              templeLocation: item.templeLocation,
              templeImage: item.templeImage,
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

// Check if temple is in bucketlist
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