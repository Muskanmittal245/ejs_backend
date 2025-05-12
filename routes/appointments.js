const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

// Middleware to check if user is logged in
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) return next();
  res.redirect("/login");
}

router.get("/", isAuthenticated, async (req, res) => {
  try {
    const userEmail = req.session.user.email;
    // Fetch all bookings for this user, sorted by appointmentDate descending
    const bookings = await Booking.find({ email: userEmail }).sort({ appointmentDate: -1 });

    // Map bookings to the format expected by EJS
    const appointments = bookings.map(b => ({
      date: b.appointmentDate.toISOString().split('T')[0],
      doctor: b.department, // Adjust if you have a doctor name field
      status: new Date(b.appointmentDate) < new Date() ? "Completed" : "Upcoming"
    }));

    res.render("appointments", {
      user: req.session.user,
      appointments
    });
  } catch (err) {
    res.render("appointments", { user: req.session.user, appointments: [] });
  }
});

module.exports = router;