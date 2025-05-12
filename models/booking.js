const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  mobileNumber: { type: String, required: true },
  nic:       { type: String, required: true },
  dob:       { type: Date, required: true },
  gender:    { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  department: { type: String, required: true },
  address:   { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);