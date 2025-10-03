const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(morgan('combined'));

// ===================================
// CRITICAL FIX: ROBUST CORS CONFIGURATION
// ===================================

// Whitelist origins based on environment variables and localhost
const WHITELISTED_ORIGINS = [
    process.env.FRONTEND_URL, // This is your Vercel URL from Render's env variable
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3001'
].filter(Boolean); // Filters out any undefined or empty strings

const corsOptions = {
  // Use a function to dynamically check if the origin is allowed
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, cURL, or postman)
    if (!origin) return callback(null, true); 
    
    // Check if the requesting origin is in our whitelist
    if (WHITELISTED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    
    // Block all others and provide error details
    callback(new Error(`Not allowed by CORS from origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

// Global CORS middleware handles all requests
app.use(cors(corsOptions)); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const templeRoutes = require('./routes/temples');
const bucketlistRoutes = require('./routes/bucketlist');
const authRoutes = require('./routes/auth');

// ===================================
// API ROUTES
// ===================================
app.use('/api/temples', templeRoutes);
app.use('/api/bucketlist', bucketlistRoutes);
app.use('/api/auth', authRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Temple Discovery API is running',
    timestamp: new Date().toISOString()
  });
});

// ===================================
// ERROR HANDLING (FINAL CRITICAL ORDERING)
// ===================================

// 1. 404 Handler (MUST be the LAST route/middleware before the 500 error handler)
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// 2. 500 Error handling middleware (MUST be the absolute last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});