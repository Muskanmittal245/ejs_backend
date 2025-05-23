const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true },
  DOB: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);