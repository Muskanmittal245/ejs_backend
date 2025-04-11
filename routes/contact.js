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