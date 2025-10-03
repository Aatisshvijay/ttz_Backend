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

const corsOptions = {
  origin: [
    process.env.FRONTEND_URL,
    'https://ttz-frontend.vercel.app',
    'https://ttz-frontend-77sxmefbn-aats-projects-7d053e57.vercel.app',
    'https://ttz-frontend-blw4lti7p-aats-projects-7d053e57.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-session-id'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const templeRoutes = require('./routes/temples');
const bucketlistRoutes = require('./routes/bucketlist');
const authRoutes = require('./routes/auth');

// Routes with /api prefix
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
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ error: `API Endpoint Not Found: ${req.originalUrl}` });
  }
  res.status(404).json({ error: 'Resource Not Found' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));