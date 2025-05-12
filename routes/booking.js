const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

router.post("/booking", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      nic,
      dob,
      gender,
      appointmentDate,
      appointmentTime,
      department,
      address
    } = req.body;

    // Validate required fields
    if (
      !firstName || !lastName || !email || !mobileNumber ||
      !nic || !dob || !gender || !appointmentDate ||
      !appointmentTime || !department || !address
    ) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Create and save booking
    const newBooking = new Booking({
      firstName,
      lastName,
      email,
      mobileNumber,
      nic,
      dob,
      gender,
      appointmentDate,
      appointmentTime,
      department,
      address
    });

    await newBooking.save();

    res.json({ success: true, message: "Appointment booked successfully", appointment: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

module.exports = router;