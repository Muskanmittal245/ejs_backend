const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")

const bookingsFilePath = path.join(__dirname, "../models/booking.json")

const readBookings = () => {
    if (!fs.existsSync(bookingsFilePath)) return []
    const data = fs.readFileSync(bookingsFilePath)
    return JSON.parse(data)
}

const writeBookings = (bookings) => {
    if (!fs.existsSync(bookingsFilePath)) {
        fs.writeFileSync(bookingsFilePath, JSON.stringify([]))
    }
    fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2));
};

router.post("/booking", (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, mobileNumber, appointmentDate, department, doctorName } = req.body

    if (!firstName || !lastName || !email || !mobileNumber || !appointmentDate || !department || !doctorName) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    const bookings = readBookings()
    const newAppointment = { id: bookings.length + 1, firstName, lastName, email, mobileNumber, appointmentDate, department, doctorName };
    bookings.push(newAppointment);
    writeBookings(bookings);

    res.json({ success: true, message: "Appointment booked successfully", appointment: newAppointment });
});

module.exports = router