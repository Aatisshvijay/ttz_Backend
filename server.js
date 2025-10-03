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
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3001'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

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
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});