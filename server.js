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
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); 
  });

// ============================================
// 2. MIDDLEWARE & CONFIGURATION
// ============================================

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:4173',
      process.env.FRONTEND_URL
    ].filter(Boolean);
    
    const isVercelApp = origin.endsWith('.vercel.app');
    const isRenderApp = origin.includes('.onrender.com');
    const isAllowedOrigin = allowedOrigins.includes(origin);
    
    if (isVercelApp || isRenderApp || isAllowedOrigin) {
      callback(null, true);
    } else {
      console.warn('CORS blocked origin:', origin);
      callback(null, true); // Allow for now, restrict later
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
})); 
app.use(express.json()); 
app.use(morgan('tiny')); 

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin || 'none'}`);
  next();
});

// ============================================
// 3. ROUTES
// ============================================
const templeRoutes = require('./routes/temples');
const authRoutes = require('./routes/auth');
const bucketlistRoutes = require('./routes/bucketlist');

app.use('/temples', templeRoutes); 
app.use('/auth', authRoutes);
app.use('/bucketlist', bucketlistRoutes);

// ============================================
// 4. GENERAL ENDPOINTS
// ============================================
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
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
// 5. ERROR HANDLERS
// ============================================
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

app.use('*', (req, res) => {
  const isApi = req.originalUrl.startsWith('/temples') || 
                req.originalUrl.startsWith('/auth') || 
                req.originalUrl.startsWith('/bucketlist');
  
  res.status(404).json({ 
    error: isApi ? 'API Endpoint Not Found' : 'Resource Not Found', 
    path: req.originalUrl
  });
});

// ============================================
// 6. SERVER LISTEN & GRACEFUL SHUTDOWN
// ============================================
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
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