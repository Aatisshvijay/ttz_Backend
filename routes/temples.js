const express = require('express');
const router = express.Router();
const Temple = require('../models/Temple');

// Cache for frequently accessed data (in production, use Redis)
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedData(key) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function setCachedData(key, data) {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
}

// ============================================
// 1. GET ALL DEITIES (Homepage View)
// URL: /temples/deities 
// ============================================
router.get('/deities', async (req, res) => {
  try {
    const cacheKey = 'all_deities';
    const cached = getCachedData(cacheKey);
    
    if (cached) {
      console.log('Returning cached deities data');
      return res.json(cached);
    }

    console.log('Fetching deities data from database...');
    
    const deityData = await Temple.aggregate([
      {
        $group: {
          _id: '$deity',
          templeCount: { $sum: 1 },
          categories: { $addToSet: '$category' }
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          templeCount: 1,
          categoryCount: { $size: '$categories' }
        }
      }
    ]);
    
    setCachedData(cacheKey, deityData);
    res.json(deityData);
  } catch (error) {
    console.error('Error fetching deities:', error);
    res.status(500).json({ error: 'Failed to fetch deities' });
  }
});


// ============================================
// 2. GET CATEGORIES BY DEITY (GodTemplesPage View)
// URL: /temples/deity/:deityName
// ============================================
router.get('/deity/:deityName', async (req, res) => {
    try {
        // Use decodeURIComponent to handle spaces in deity names like 'Lord Shiva'
        const deity = decodeURIComponent(req.params.deityName);
        const cacheKey = `categories_by_deity_${deity}`;
        const cached = getCachedData(cacheKey);

        if (cached) {
            console.log(`Returning cached categories for ${deity}`);
            return res.json(cached);
        }

        const categoryData = await Temple.aggregate([
            { $match: { deity: deity } },
            {
                $group: {
                    _id: '$category',
                    templeCount: { $sum: 1 },
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    templeCount: 1,
                }
            },
            { $sort: { name: 1 } } // Sort categories alphabetically
        ]);
        
        // NOTE: The frontend (GodTemplesPage.jsx) handles adding images and descriptions

        setCachedData(cacheKey, categoryData);
        res.json(categoryData);
    } catch (error) {
        console.error(`Error fetching categories for ${deity}:`, error);
        res.status(500).json({ error: 'Failed to fetch deity categories' });
    }
});


// ============================================
// 3. GET TEMPLES BY DEITY & CATEGORY (CategoryTemplesPage View)
// URL: /temples/deity/:deityName/:categoryName
// ============================================
router.get('/deity/:deityName/:categoryName', async (req, res) => {
    try {
        const { deityName, categoryName } = req.params;
        const decodedDeity = decodeURIComponent(deityName);
        const decodedCategory = decodeURIComponent(categoryName);
        
        const cacheKey = `temples_${decodedDeity}_${decodedCategory}`;
        const cached = getCachedData(cacheKey);

        if (cached) {
            console.log(`Returning cached temples for ${decodedCategory}`);
            return res.json(cached);
        }

        const temples = await Temple.find({
            deity: decodedDeity,
            category: decodedCategory
        }).select('id name location image significance'); 

        setCachedData(cacheKey, temples);
        res.json(temples);
    } catch (error) {
        console.error(`Error fetching temples for ${categoryName}:`, error);
        res.status(500).json({ error: 'Failed to fetch temples for category' });
    }
});


// ============================================
// 4. GET SINGLE TEMPLE BY ID
// URL: /temples/:id 
// ============================================
router.get('/:id', async (req, res) => {
    try {
        const templeId = req.params.id;
        const cacheKey = `temple_${templeId}`;
        const cached = getCachedData(cacheKey);
        
        if (cached) {
            return res.json(cached);
        }

        // Search by custom 'id' field first, then fallback to MongoDB '_id'
        const temple = await Temple.findOne({
            $or: [{ id: templeId }, { _id: templeId }]
        });
        
        if (!temple) {
            return res.status(404).json({ error: 'Temple not found' });
        }
        
        setCachedData(cacheKey, temple);
        res.json(temple);
    } catch (error) {
        console.error('Error fetching temple by ID:', error);
        res.status(500).json({ error: 'Failed to fetch temple' });
    }
});

// ... (Other routes like /search, /plan-trip go here)

module.exports = router;