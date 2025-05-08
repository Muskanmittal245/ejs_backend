// const express = require("express")
// const router = express.Router()
// const fs = require("fs")
// const path = require("path")

// const contactsFilePath = path.join(__dirname, "../models/contacts.json")

// const readContacts = () => {
//     if (!fs.existsSync(contactsFilePath)) return []
//     const data = fs.readFileSync(contactsFilePath)
//     return JSON.parse(data)
// }

// const writeContacts = (contacts) => {
//     fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2))
// }

// router.post("/contact", (req, res) => {
//     const { name, email, message } = req.body
//     const contacts = readContacts()

//     const newContact = { name, email, message, date: new Date() }
//     contacts.push(newContact)
//     writeContacts(contacts)

//     res.status(201).json({ message: "Contact form submitted successfully!" })
// })

// module.exports = router








// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const path = require("path");
// const validateContact = require("../middlewares/validateContact"); // Import the middleware

// // Path to the contacts.json file
// const contactsFilePath = path.join(__dirname, "../models/contacts.json");

// // Function to read contacts from the JSON file
// const readContacts = () => {
//     if (!fs.existsSync(contactsFilePath)) return [];
//     const data = fs.readFileSync(contactsFilePath);
//     return JSON.parse(data);
// };

// // Function to write contacts to the JSON file
// const writeContacts = (contacts) => {
//     fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));
// };

// // POST route to handle contact form submission with validation middleware
// router.post("/api/contact", validateContact, (req, res) => {
//     console.log(req.body);
//     const { name, email, mobile, message } = req.body;

//     // Read existing contacts
//     const contacts = readContacts();

//     // Create a new contact object
//     const newContact = {
//         name,
//         email,
//         mobile,
//         message,
//         date: new Date().toISOString(),
//     };

//     // Add the new contact to the list
//     contacts.push(newContact);

//     // Write updated contacts back to the JSON file
//     writeContacts(contacts);

//     // Send a success response
//     res.status(201).json({ success: true, message: "Contact form submitted successfully!" });
// });

// module.exports = router;












const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")

const contactsFilePath = path.join(__dirname, "../models/contacts.json")

const readContacts = () => {
    if (!fs.existsSync(contactsFilePath)) return []
    const data = fs.readFileSync(contactsFilePath)
    return JSON.parse(data)
}

const writeContacts = (contacts) => {
    fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2))
}

router.post("/contact", (req, res) => {
    const { name, email, message } = req.body
    const contacts = readContacts()

    const newContact = { name, email, message, date: new Date() }
    contacts.push(newContact)
    writeContacts(contacts)

    res.status(201).json({ message: "Contact form submitted successfully!" })
})

module.exports = router