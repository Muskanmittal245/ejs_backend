// // document.getElementById("appointment-form").addEventListener("submit", function (e) {
// //     e.preventDefault();
// //     alert("Appointment successfully submitted!");
// //     this.reset();
// // });




// document.getElementById("appointment-form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const mobileNumber = document.getElementById("mobileNumber").value;
//     const nic = document.getElementById("nic").value;
//     const dob = document.getElementById("dob").value;
//     const gender = document.getElementById("gender").value;
//     const appointmentDate = document.getElementById("appointmentDate").value;
//     const appointmentTime = document.getElementById("appointmentTime").value;
//     const department = document.getElementById("department").value;
//     const doctorName = document.getElementById("doctorName").value;
//     const address = document.getElementById("address").value;

//     const response = await fetch("http://localhost:8080/api/booking", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstName, lastName, email, mobileNumber, nic, dob, gender, appointmentDate, appointmentTime, department, doctorName, address }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         form.reset();
//     }
// });






// const express = require("express")
// const router = express.Router()
// const fs = require("fs")
// const path = require("path")

// const bookingsFilePath = path.join(__dirname, "../models/booking.json")

// const readBookings = () => {
//     if (!fs.existsSync(bookingsFilePath)) return []
//     const data = fs.readFileSync(bookingsFilePath)
//     return JSON.parse(data)
// }

// const writeBookings = (bookings) => {
//     if (!fs.existsSync(bookingsFilePath)) {
//         fs.writeFileSync(bookingsFilePath, JSON.stringify([]))
//     }
//     fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2));
// };

// router.post("/booking", (req, res) => {
//     console.log(req.body);
//     const { firstName, lastName, email, mobileNumber, appointmentDate, department} = req.body

//     if (!firstName || !lastName || !email || !mobileNumber || !appointmentDate || !department) {
//         return res.status(400).json({ success: false, message: "All fields are required!" });
//     }

//     const bookings = readBookings()
//     const newAppointment = { id: bookings.length + 1, firstName, lastName, email, mobileNumber, appointmentDate, department };
//     bookings.push(newAppointment);
//     writeBookings(bookings);

//     res.json({ success: true, message: "Appointment booked successfully", appointment: newAppointment });
// });

// module.exports = router







document.getElementById("appointment-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = document.getElementById("appointment-form");
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/api/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObject),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Appointment booked successfully!");
            form.reset(); // Reset the form after successful submission
        } else {
            alert("Failed to book appointment: " + result.message);
        }
    } catch (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred while booking. Please try again.");
    }
});