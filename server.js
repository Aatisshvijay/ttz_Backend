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
    // Exit process on connection failure
    process.exit(1); 
  });

// ============================================
// 2. MIDDLEWARE & CONFIGURATION
// ============================================

// CRITICAL FIX: More permissive CORS for Vercel/Render deployments
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    // Check for exact origins and wildcard domains
    const allowedOrigins = [
      'https://ttz-frontend-3dkg05yp6-aats-projects-7d053e57.vercel.app/',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:4173'
    ];
    const isVercelApp = origin.endsWith('.vercel.app');
    const isRenderApp = origin.includes('.onrender.com');
    const isAllowedOrigin = allowedOrigins.includes(origin);
    
    if (isVercelApp || isRenderApp || isAllowedOrigin) {
      // console.log('CORS: Origin allowed -', origin);
      callback(null, true);
    } else {
      // console.log('CORS: Origin blocked -', origin);
      callback(new Error(`CORS policy: Origin ${origin} is not allowed`));
    }
  },
  credentials: true,
};

app.use(helmet()); // Basic security headers
app.use(cors(corsOptions)); // CORS middleware
app.use(express.json()); // Body parser for JSON
app.use(morgan('tiny')); // Request logger

// ============================================
// 3. ROUTES (CRITICAL FIX: REMOVING '/api' PREFIX FROM MOUNT)
// ============================================
// Import Route Files
const templeRoutes = require('./routes/temples');
const authRoutes = require('./routes/auth');
const bucketlistRoutes = require('./routes/bucketlist');

// Change the mounting path from '/api/temples' to just '/temples'
// This ensures that Express matches the path the client is actually sending: /temples/deities
app.use('/temples', templeRoutes);
app.use('/auth', authRoutes);
app.use('/bucketlist', bucketlistRoutes);


// ============================================
// 4. GENERAL ENDPOINTS (Health Check & Root)
// ============================================
app.get('/api/health', (req, res) => {
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

// CORS error handling (handles the custom error thrown by corsOptions)
app.use((err, req, res, next) => {
  if (err.message && err.message.includes('CORS')) {
    console.error('CORS Error:', err.message);
    return res.status(403).json({
      error: 'CORS Policy Error',
      message: err.message,
      origin: req.headers.origin
    });
  }
  next(err);
});

// General 500 (Server) error handling
app.use((err, req, res, next) => {
  console.error('SERVER ERROR:', err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler (Catches requests that fall through all routes/middleware)
app.use('*', (req, res) => {
  const isApi = req.originalUrl.startsWith('/api');
  res.status(404).json({ 
    error: isApi ? 'API Endpoint Not Found' : 'Resource Not Found', 
    path: req.originalUrl 
  });
});


// ============================================
// 6. SERVER LISTEN & GRACEFUL SHUTDOWN (FINAL FIX)
// ============================================
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

// Graceful shutdown handler for Render SIGTERM
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server gracefully');
  server.close(async () => {
    // CRITICAL FIX: Close Mongoose connection using the modern promise-based method
    try {
        await mongoose.connection.close(false); // false means it won't force-close ongoing operations
        console.log('MongoDB connection closed');
        process.exit(0); // Exit with success
    } catch (err) {
        console.error('Error closing MongoDB connection:', err);
        process.exit(1); // Exit with failure
    }
  });
});

module.exports = server;