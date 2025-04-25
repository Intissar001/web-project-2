const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, // This will be hashed using bcrypt
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
