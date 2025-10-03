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

// ===============================================
// CRITICAL FIX: UPDATED CORS CONFIGURATION
// ===============================================
const corsOptions = {
  origin: [
    // 1. Local Development URLs
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3001',
    
    // 2. Vercel Production URL (Primary domain)
    'https://ttz-frontend.vercel.app', 
    
    // 3. Vercel Preview URL (The specific one that was failing)
    'https://ttz-frontend-blw4lti7p-aats-projects-7d053e57.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};
// ===============================================

// Global CORS middleware handles all requests, including static files.
app.use(cors(corsOptions)); // <--- CORRECT: Use the global CORS settings

// Static files middleware
app.use(express.static(path.join(__dirname, 'public'))); // This line is correct

app.use(express.json());

// MongoDB Connection
// DEPLOYMENT FIX: Removed deprecated options (useNewUrlParser, useUnifiedTopology)
mongoose.connect(process.env.MONGODB_URI) // <--- CORRECTED
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const templeRoutes = require('./routes/temples');
const bucketlistRoutes = require('./routes/bucketlist');
const authRoutes = require('./routes/auth');

// Routes
// DEPLOYMENT FIX: All API routes must be prefixed with '/api'
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!', 
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error' 
  });
});

// 404 handler
// This should catch any non-API routes that haven't been handled
app.use('*', (req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    // If it was meant to be an API call but didn't match a route
    return res.status(404).json({ error: `API Endpoint Not Found: ${req.originalUrl}` });
  }
  // For other requests (e.g., static files that don't exist)
  res.status(404).json({ error: 'Resource Not Found' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));