const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

// ============================================
// 1. DATABASE CONNECTION
// ============================================
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); 
  });

// ============================================
// 2. MIDDLEWARE & CONFIGURATION
// ============================================

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    // Check for allowed origins
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:4173'
    ];
    const isVercelApp = origin.endsWith('.vercel.app');
    const isRenderApp = origin.includes('.onrender.com');
    const isAllowedOrigin = allowedOrigins.includes(origin);
    
    if (isVercelApp || isRenderApp || isAllowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Origin ${origin} is not allowed`));
    }
  },
  credentials: true,
};

app.use(helmet()); 
app.use(cors(corsOptions)); 
app.use(express.json()); 
app.use(morgan('tiny')); 

// ============================================
// 3. ROUTES (CRITICAL FIX: Removed '/api' prefix to fix 404)
// ============================================
// Make sure these route files are correctly placed in a './routes' directory
const templeRoutes = require('./routes/temples');
const authRoutes = require('./routes/auth');
const bucketlistRoutes = require('./routes/bucketlist');

// NOTE: Mounting paths are changed from '/api/temples' to just '/temples'
app.use('/temples', templeRoutes); 
app.use('/auth', authRoutes);
app.use('/bucketlist', bucketlistRoutes);


// ============================================
// 4. GENERAL ENDPOINTS (Health Check & Root)
// ============================================
app.get('/health', (req, res) => { // Removed /api from health check for deployment consistency
  res.json({
    status: 'OK',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Temple Discovery API',
    version: '1.0.0'
  });
});


// ============================================
// 5. ERROR HANDLERS (Must be at the end)
// ============================================

// General 500 (Server) error handling
app.use((err, req, res, next) => {
  console.error('SERVER ERROR:', err.stack);
  if (err.message && err.message.includes('CORS')) {
      return res.status(403).json({
          error: 'CORS Policy Error',
          message: err.message,
      });
  }

  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler (Catches requests that fall through all routes/middleware)
app.use('*', (req, res) => {
  // Since we removed /api from the route mounts, we check for /api/ health check and general API
  const isApi = req.originalUrl.startsWith('/temples') || req.originalUrl.startsWith('/auth') || req.originalUrl.startsWith('/bucketlist');
  res.status(404).json({ 
    error: isApi ? 'API Endpoint Not Found' : 'Resource Not Found', 
    path: req.originalUrl 
  });
});


// ============================================
// 6. SERVER LISTEN & GRACEFUL SHUTDOWN
// ============================================
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server gracefully');
  server.close(async () => {
    try {
        await mongoose.connection.close(false); 
        console.log('MongoDB connection closed');
        process.exit(0); 
    } catch (err) {
        console.error('Error closing MongoDB connection:', err);
        process.exit(1); 
    }
  });
});

module.exports = app;