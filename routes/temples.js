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

// OPTIMIZED: Get all deities with counts in ONE aggregation query
router.get('/deities', async (req, res) => {
  try {
    const cacheKey = 'all_deities';
    const cached = getCachedData(cacheKey);
    
    if (cached) {
      console.log('Returning cached deities data');
      return res.json(cached);
    }

    console.log('Fetching deities data from database...');
    
    // Single aggregation query instead of multiple queries
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
          name: '$_id',
          templeCount: 1,
          categories: { $size: '$categories' },
          categoryList: '$categories',
          _id: 0
        }
      },
      {
        $sort: { name: 1 }
      }
    ]);

    // Define proper deity images
    const deityImages = {
      "Maha Avatars of Vishnu": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147274/vishnu_hol1p1.png",
      "Lord Shiva": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147279/shiva_h9u69h.png", 
      "Goddess Shakti": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
      "Goddess Lakshmi": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147323/laxmi_su1sgk.png",
      "Lord Hanuman": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147343/hanuman_smnyyx.png",
      "Lord Ganesha": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147355/ganesha_xgclup.png",
      "Lord Murugan": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/murugan_djfmgk.png",
      "Lord Ayyappa": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/ayyapa_btcxp1.png",
      "Navagraha Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147307/navagraha_v5uk7h.png"
    };

    // Add images to the data
    const enrichedData = deityData.map(deity => ({
      ...deity,
      image: deityImages[deity.name] || '/Temples/default.png'
    }));

    setCachedData(cacheKey, enrichedData);
    console.log(`Found ${enrichedData.length} deities in ${Date.now()} ms`);
    
    res.json(enrichedData);
  } catch (error) {
    console.error('Error fetching deities:', error);
    res.status(500).json({ error: 'Failed to fetch deities' });
  }
});

// Helper function to get category-specific images
const getCategoryImage = (category, deity) => {
  const categoryImages = {
    "Vishnu (108 Divya Desams)": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
    "Lord Krishna": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147334/krishna_cwqrsj.png",
    "Lord Narasimha": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147309/narasimha_zuqnth.png",
    "Lord Parshuram": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147298/parshurama_jrryj4.png",
    "Lord Sri Rama": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147283/rama_jb7c67.png",
    "Lord Vamana": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147283/vamana_bfz0nq.png",
    "Lord Varaha": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147273/varaha_dbildy.png",
    "Matsya Avatar": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/matsya_nr5z9h.png",
    "Kurma Avatar": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147338/kurmam_clsc26.png", 
    "Jyotirlingas": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147342/jyotirlingas_dpmmxs.png",
    "Pancha Bhoota Sthalams": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147292/pb_ng5jll.png",
    "Other Famous Shiva Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147363/bh_y9yjn1.png",
    "Shakti Peethas": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
    "Devi Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147391/dt1_hwfpkt.png",
    "Lakshmi Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147323/laxmi_su1sgk.png",
    "Hanuman Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147343/hanuman_smnyyx.png",
    "Ganesha Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147355/ganesha_xgclup.png",
    "Arupadai Veedu Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/murugan_djfmgk.png",
    "Ayyappa Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/ayyapa_btcxp1.png",
    "Navagraha Temples": "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147307/navagraha_v5uk7h.png",
  };
  
  return categoryImages[category] || "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png";
};

// OPTIMIZED: Get categories for deity with counts in ONE query
router.get('/deities/:deity/categories', async (req, res) => {
  try {
    const { deity } = req.params;
    const decodedDeity = decodeURIComponent(deity);
    const cacheKey = `categories_${decodedDeity}`;
    
    const cached = getCachedData(cacheKey);
    if (cached) {
      console.log(`Returning cached categories for ${decodedDeity}`);
      return res.json(cached);
    }
    
    console.log('Fetching categories for deity:', decodedDeity);
    
    // Single aggregation query instead of multiple queries
    const categoryData = await Temple.aggregate([
      {
        $match: { deity: decodedDeity }
      },
      {
        $group: {
          _id: '$category',
          templeCount: { $sum: 1 }
        }
      },
      {
        $project: {
          name: '$_id',
          templeCount: 1,
          _id: 0
        }
      },
      {
        $sort: { name: 1 }
      }
    ]);

    if (categoryData.length === 0) {
      console.log('No categories found for deity:', decodedDeity);
      return res.json([]);
    }
    
    // Add images to categories
    const enrichedCategories = categoryData.map(category => ({
      ...category,
      image: getCategoryImage(category.name, decodedDeity)
    }));

    setCachedData(cacheKey, enrichedCategories);
    console.log(`Found ${enrichedCategories.length} categories for ${decodedDeity}`);
    
    res.json(enrichedCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// OPTIMIZED: Search with indexed fields and limits
router.get('/search', async (req, res) => {
  try {
    const { q: query, limit = 50 } = req.query;
    
    if (!query || query.trim().length === 0) {
      return res.json([]);
    }

    const searchStart = Date.now();
    console.log('Search query:', query);
    
    const searchRegex = new RegExp(query.trim(), 'i');
    
    // Optimized search - search indexed fields first
    const temples = await Temple.find({
      $or: [
        { name: searchRegex },
        { deity: searchRegex },
        { category: searchRegex },
        { location: searchRegex },
        { state: searchRegex }
        // Remove description and significance for faster search
      ]
    })
    .limit(parseInt(limit))
    .lean(); // Use lean() for faster queries when you don't need mongoose features
    
    console.log(`Search completed in ${Date.now() - searchStart}ms - Found ${temples.length} temples`);
    res.json(temples);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

// OPTIMIZED: Get temples with lean queries
router.get('/deity/:deity/:category', async (req, res) => {
  try {
    const { deity, category } = req.params;
    const decodedDeity = decodeURIComponent(deity);
    const decodedCategory = decodeURIComponent(category);
    
    console.log('Searching for - Deity:', decodedDeity, 'Category:', decodedCategory);
    const queryStart = Date.now();
    
    const temples = await Temple.find({ 
      deity: decodedDeity, 
      category: decodedCategory 
    }).lean(); // Use lean() for better performance
    
    console.log(`Query completed in ${Date.now() - queryStart}ms - Found ${temples.length} temples`);
    res.json(temples);
  } catch (error) {
    console.error('Error fetching temples by deity and category:', error);
    res.status(500).json({ error: 'Failed to fetch temples by deity and category' });
  }
});

router.get('/deity/:deity', async (req, res) => {
  try {
    const { deity } = req.params;
    const decodedDeity = decodeURIComponent(deity);
    console.log('Fetching temples for deity:', decodedDeity);
    
    const temples = await Temple.find({ deity: decodedDeity }).lean();
    console.log(`Found ${temples.length} temples for deity: ${decodedDeity}`);
    
    res.json(temples);
  } catch (error) {
    console.error('Error fetching temples by deity:', error);
    res.status(500).json({ error: 'Failed to fetch temples by deity' });
  }
});

// Optimized get all temples with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;
    
    const [temples, total] = await Promise.all([
      Temple.find()
        .skip(skip)
        .limit(limit)
        .sort({ name: 1 })
        .lean(),
      Temple.countDocuments()
    ]);
    
    res.json({
      temples,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching temples:', error);
    res.status(500).json({ error: 'Failed to fetch temples' });
  }
});

// OPTIMIZED: Get temple by ID with lean query
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const queryStart = Date.now();
    
    console.log('Looking for temple with ID:', id);
    
    let temple;
    
    // First try to find by custom 'id' field (like "dd1", "dd2", etc.)
    temple = await Temple.findOne({ id: id }).lean();
    
    // If not found and the id looks like a MongoDB ObjectId, try _id
    if (!temple && id.match(/^[0-9a-fA-F]{24}$/)) {
      temple = await Temple.findById(id).lean();
    }
    
    if (!temple) {
      console.log(`Temple not found with ID: ${id}`);
      return res.status(404).json({ error: 'Temple not found' });
    }
    
    console.log(`Temple found in ${Date.now() - queryStart}ms:`, temple.name);
    res.json(temple);
  } catch (error) {
    console.error('Error fetching temple:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Debug routes
router.get('/debug/all', async (req, res) => {
  try {
    const temples = await Temple.find({}).limit(10).lean();
    const summary = temples.map(t => ({
      mongoId: t._id,
      customId: t.id,
      name: t.name,
      deity: t.deity,
      category: t.category
    }));
    res.json({
      total: await Temple.countDocuments(),
      sample: summary,
      cacheSize: cache.size
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Haversine formula for distance calculation (kept for trip planning)
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Validate inputs
  if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
    console.error('Invalid coordinates for distance calculation:', { lat1, lon1, lat2, lon2 });
    return 0;
  }
  
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  
  // Validate result
  if (isNaN(distance) || distance < 0) {
    console.error('Invalid distance calculated:', distance, 'for coords:', { lat1, lon1, lat2, lon2 });
    return 0;
  }
  
  return distance;
}

// Route optimization for trip planning (simplified without geocoding dependency)
function optimizeRouteFromUserLocation(temples, userLocation = null) {
  if (temples.length <= 1) return temples;
  
  console.log('=== TEMPLE ROUTE OPTIMIZATION (SIMPLIFIED) ===');
  console.log('Input temples:', temples.map(t => t.name));
  
  // Simplified coordinate assignment - use basic state-level coordinates
  const templesWithCoords = temples.map((temple, index) => {
    let coords = temple.coordinates;
    
    if (!coords || !coords.lat || !coords.lon || 
        isNaN(parseFloat(coords.lat)) || isNaN(parseFloat(coords.lon))) {
      
      const location = temple.location.toLowerCase();
      
      // Basic state-level fallbacks only (simplified)
      if (location.includes('andhra pradesh')) {
        coords = { lat: 15.9129, lon: 79.7400 };
      } else if (location.includes('tamil nadu')) {
        coords = { lat: 11.1271, lon: 78.6569 };
      } else if (location.includes('uttar pradesh')) {
        coords = { lat: 26.8467, lon: 80.9462 };
      } else if (location.includes('maharashtra')) {
        coords = { lat: 19.7515, lon: 75.7139 };
      } else if (location.includes('karnataka')) {
        coords = { lat: 12.9716, lon: 77.5946 };
      } else if (location.includes('gujarat')) {
        coords = { lat: 23.0225, lon: 72.5714 };
      } else if (location.includes('kerala')) {
        coords = { lat: 10.8505, lon: 76.2711 };
      } else if (location.includes('odisha')) {
        coords = { lat: 20.9517, lon: 85.0985 };
      } else if (location.includes('rajasthan')) {
        coords = { lat: 27.0238, lon: 74.2179 };
      } else if (location.includes('west bengal')) {
        coords = { lat: 22.9868, lon: 87.8550 };
      } else if (location.includes('madhya pradesh')) {
        coords = { lat: 22.9734, lon: 78.6569 };
      } else if (location.includes('uttarakhand')) {
        coords = { lat: 30.0668, lon: 79.0193 };
      } else if (location.includes('himachal pradesh')) {
        coords = { lat: 31.1048, lon: 77.1734 };
      } else {
        coords = { lat: 20.5937, lon: 78.9629 }; // Center of India
      }
    }
    
    return {
      ...temple,
      coordinates: {
        lat: parseFloat(coords.lat),
        lon: parseFloat(coords.lon)
      },
      originalIndex: index
    };
  });
  
  // Simple alphabetical ordering if no user location provided
  if (!userLocation) {
    return templesWithCoords.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // If user location provided, sort by estimated distance (state-level)
  const userCoords = {
    lat: parseFloat(userLocation.lat),
    lon: parseFloat(userLocation.lon)
  };
  
  const templesWithDistances = templesWithCoords.map(temple => ({
    ...temple,
    distanceFromUser: calculateDistance(
      userCoords.lat, userCoords.lon,
      temple.coordinates.lat, temple.coordinates.lon
    )
  }));
  
  // Sort by distance and build simple route
  return templesWithDistances.sort((a, b) => a.distanceFromUser - b.distanceFromUser);
}

// Simplified trip stats calculation
function calculateSimpleTripStats(route, userLocation = null) {
  const estimatedDays = route.length; // 1 day per temple
  
  const regions = new Set();
  route.forEach(temple => {
    const location = temple.location.toLowerCase();
    if (location.includes('tamil nadu')) regions.add('Tamil Nadu');
    else if (location.includes('uttar pradesh')) regions.add('Uttar Pradesh');
    else if (location.includes('maharashtra')) regions.add('Maharashtra');
    else if (location.includes('karnataka')) regions.add('Karnataka');
    else if (location.includes('andhra pradesh')) regions.add('Andhra Pradesh');
    else if (location.includes('gujarat')) regions.add('Gujarat');
    else if (location.includes('kerala')) regions.add('Kerala');
    else if (location.includes('odisha')) regions.add('Odisha');
    else if (location.includes('rajasthan')) regions.add('Rajasthan');
    else if (location.includes('west bengal')) regions.add('West Bengal');
    else if (location.includes('madhya pradesh')) regions.add('Madhya Pradesh');
    else regions.add('Other');
  });
  
  return {
    estimatedDays,
    totalTemples: route.length,
    multipleRegions: regions.size > 1,
    regions: Array.from(regions),
    startingPoint: userLocation ? 'Your location' : 'Alphabetical order'
  };
}

// Simplified travel planner endpoint
router.post('/plan-trip', async (req, res) => {
  try {
    const { templeIds, userLocation, preferences = {} } = req.body;
    
    console.log('Planning trip for temple IDs:', templeIds);
    console.log('User location:', userLocation);
    
    if (!templeIds || !Array.isArray(templeIds) || templeIds.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No temples provided for trip planning' 
      });
    }
    
    // Fetch temple details
    const temples = await Temple.find({ 
      $or: [
        { id: { $in: templeIds } },
        { _id: { $in: templeIds.filter(id => id.match(/^[0-9a-fA-F]{24}$/)) } }
      ]
    }).lean();
    
    console.log(`Found ${temples.length} temples out of ${templeIds.length} requested`);
    
    if (temples.length === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'No valid temples found with the provided IDs' 
      });
    }
    
    // Generate optimized route
    const optimizedRoute = optimizeRouteFromUserLocation(temples, userLocation);
    const routeStats = calculateSimpleTripStats(optimizedRoute, userLocation);
    
    const planningOptions = {
      optimizedRoute: {
        type: 'simplified_route',
        title: userLocation ? 'Route from Your Location' : 'Alphabetical Route',
        description: userLocation ? 
          'Temples ordered by approximate distance from your location' : 
          'Temples in alphabetical order for easy planning',
        temples: optimizedRoute,
        stats: routeStats
      }
    };
    
    res.json({
      success: true,
      totalTemples: temples.length,
      planningOptions
    });
    
  } catch (error) {
    console.error('Trip planning error:', error);
    res.status(500).json({ 
      success: false, 
      error: `Failed to plan trip: ${error.message}` 
    });
  }
});

if (process.env.NODE_ENV !== 'production') {
  router.post('/clear-cache', (req, res) => {
    console.log('Cache cleared manually.');
    // Your existing logic to clear the cache:
    cache.clear(); 
    res.json({ message: 'Cache cleared successfully (Development Only)' });
  });
}

module.exports = router;