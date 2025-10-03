const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;
// ============================================
// Routes (FIX: Must be uncommented/added)
// ============================================
// Assuming your route files are in a 'routes' directory:
const templeRoutes = require('./routes/temples');
const authRoutes = require('./routes/auth');
const bucketlistRoutes = require('./routes/bucketlist');

// Mount routes under their respective prefixes
app.use('/api/temples', templeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bucketlist', bucketlistRoutes);
// ============================================
// Database Connection
// ============================================
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ============================================
// CRITICAL FIX: CORS Configuration
// ============================================
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, curl)
    if (!origin) {
      console.log('Request with no origin - allowing');
      return callback(null, true);
    }
    
    console.log('Request from origin:', origin);
    
    // List of exact allowed origins
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:4173',
      // 🎯 All Vercel Preview URLs that were logged as issues
      'https://ttz-frontend-h5utxl4am-aats-projects-7d053d57.vercel.app', 
      'https://ttz-frontend-55v637ati-aats-projects-7d053e57.vercel.app',
      // 🎯 ADD YOUR PRODUCTION VERCEL DOMAIN HERE (e.g., if you have a custom domain)
      // 'https://your-production-domain.vercel.app' 
    ];
    
    // Check if origin matches any pattern
    // This allows all Vercel/Render preview environments automatically
    const isVercelApp = origin.endsWith('.vercel.app');
    const isRenderApp = origin.includes('.onrender.com');
    const isAllowedOrigin = allowedOrigins.includes(origin);
    
    if (isVercelApp || isRenderApp || isAllowedOrigin) {
      console.log('CORS: Origin allowed -', origin);
      callback(null, true);
    } else {
      console.log('CORS: Origin blocked -', origin);
      callback(new Error(`CORS policy: Origin ${origin} is not allowed`));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization,X-Session-ID', // Ensure X-Session-ID is allowed
  exposedHeaders: 'Authorization'
};

app.use(cors(corsOptions));

// ============================================
// Middleware
// ============================================
app.use(express.json()); // Body parser for JSON
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Secure Express apps by setting various HTTP headers
app.use(morgan('tiny')); // Simple logging
app.use('/public', express.static(path.join(__dirname, 'public'))); // Static files

// ============================================
// Routes
// (Ensure your route imports are uncommented in your final file)
// const authRoutes = require('./routes/authRoutes');
// const templeRoutes = require('./routes/templeRoutes');
// app.use('/api/auth', authRoutes);
// app.use('/api/temples', templeRoutes);
// ============================================

// ============================================
// Health Check / Root Endpoint
// ============================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API is running',
    version: '1.0.0',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
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
// Error Handling
// ============================================

// CORS error handling (handles errors thrown by the cors middleware)
app.use((err, req, res, next) => {
  if (err.message && err.message.includes('CORS')) {
    console.error('CORS Error:', err.message);
    return res.status(403).json({
      error: 'CORS Error',
      message: err.message,
      origin: req.headers.origin
    });
  }
  next(err);
});

// Generic 500 handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ 
      error: 'API Endpoint Not Found', 
      path: req.originalUrl 
    });
  }
  res.status(404).json({ error: 'Resource Not Found' });
});

// ============================================
// Server Listen
// ============================================
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

module.exports = server;

// ============================================
// 🎯 FINAL FIX: Graceful Shutdown (Mongoose v6/v7 Update)
// This resolves the "MongooseError: Connection.prototype.close() no longer accepts a callback"
// ============================================
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully');
  server.close(async () => {
    try {
      // 🛑 FIX APPLIED: Removed the callback from mongoose.connection.close()
      // It now returns a promise/uses async/await internally
      await mongoose.connection.close(false); 
      console.log('MongoDB connection closed');
      process.exit(0);
    } catch (err) {
      console.error('Error during database close:', err.message);
      process.exit(1);
    }
  });
});