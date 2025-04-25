const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // duration in minutes
    required: true
  },
  allowedDays: {
    type: [String], // Example: ['Monday', 'Wednesday']
    required: true
  }
});

module.exports = mongoose.model('Platform', platformSchema);
