// models/Temple.js
const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true  // Make sure this is unique
  },
  name: {
    type: String,
    required: true
  },
  location: String,
  description: String,
  image: String,
  significance: String,
  bestTime: String,
  festivals: String,
  state: String,
  deity: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: String
}, {
  timestamps: true  // This adds createdAt and updatedAt
});

// Add index for better query performance
templeSchema.index({ deity: 1, category: 1 });
templeSchema.index({ id: 1 });

module.exports = mongoose.model('Temple', templeSchema);