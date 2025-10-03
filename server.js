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

// Enhanced CORS configuration
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL, // Deployed frontend URL
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3001'
  ].filter(Boolean), // Filter out undefined if FRONTEND_URL is missing
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// MongoDB Connection
// DEPLOYMENT FIX: Standard mongoose connection for modern versions
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

// Health check route - IMPORTANT to ensure deployment is running
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Temple Discovery API is running',
    timestamp: new Date().toISOString()
  });
});

// ===================================
// ERROR HANDLING (CRITICAL ORDERING FIX)
// ===================================

// 1. 404 Handler (MUST be the LAST route/middleware before the 500 error handler)
// This catches any request that falls through all the defined API routes above.
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// 2. 500 Error handling middleware
// This must be the absolute last middleware and must have four arguments (err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the stack trace for server-side debugging

  // Send a generic error response in production for security
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});