const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Extract token
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // DEPLOYMENT FIX: Removed hardcoded fallback secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    
    // Check if user still exists
    const user = await User.findById(decoded.userId);
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid token - user not found' });
    }

    // Add user info to request
    req.userId = decoded.userId;
    req.user = user;
    
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    
    console.error('Auth middleware error:', error);
    res.status(500).json({ error: 'Server error in authentication' });
  }
};

module.exports = auth;