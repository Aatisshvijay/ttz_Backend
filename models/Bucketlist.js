const mongoose = require('mongoose');

const bucketlistSchema = new mongoose.Schema({
  // For authenticated users
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Not required to support session-based storage
  },
  // For non-authenticated users (session-based)
  sessionId: {
    type: String,
    required: false // Not required when user is authenticated
  },
  templeId: {
    type: String,
    required: true
  },
  templeName: {
    type: String,
    required: true
  },
  templeLocation: {
    type: String,
    required: true
  },
  templeImage: {
    type: String,
    required: false
  },
   deity: String,      // ADD THIS
  category: String,   // ADD THIS
  addedAt: {
    type: Date,
    default: Date.now
  }
});

// Compound indexes to prevent duplicates and improve query performance
bucketlistSchema.index({ userId: 1, templeId: 1 }, { 
  unique: true, 
  partialFilterExpression: { userId: { $exists: true } } 
});

bucketlistSchema.index({ sessionId: 1, templeId: 1 }, { 
  unique: true, 
  partialFilterExpression: { sessionId: { $exists: true }, userId: { $exists: false } } 
});

// Additional indexes for better query performance
bucketlistSchema.index({ userId: 1, addedAt: -1 });
bucketlistSchema.index({ sessionId: 1, addedAt: -1 });

// Validation to ensure either userId or sessionId is present
bucketlistSchema.pre('save', function(next) {
  if (!this.userId && !this.sessionId) {
    next(new Error('Either userId or sessionId must be provided'));
  } else if (this.userId && this.sessionId) {
    // If both are present, prioritize userId and remove sessionId
    this.sessionId = undefined;
  }
  next();
});

module.exports = mongoose.model('Bucketlist', bucketlistSchema);