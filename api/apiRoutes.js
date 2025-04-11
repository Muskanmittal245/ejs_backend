const express = require('express')
const path = require('path')
const fs = require('fs')
const router = express.Router()

router.post('/views/login.ejs', (req, res, next) => {
    const { username, password } = req.body
    fs.readFile(path.join(__dirname, '/models/users.json'), 'utf-8', (err, data) => {
        if (err) return next(err)
        const users = JSON.parse(data)
        const user = users.find(u => u.username === username && u.password === password)
        if (user) {
            return res.status(302).redirect('/views/about.ejs')
        } else {
            return res.status(302).redirect('/api/register')
        }
    })
})

router.post('/register', (req, res, next) => {
    const { username, password } = req.body
    const newUser = { username, password }
    fs.readFile(path.join(__dirname, '/models/users.json'), 'utf-8', (err, data) => {
        if (err) return next(err)
        let users = []
        if (data) {
            users = JSON.parse(data)
        }
        users.push(newUser)
        fs.writeFile(path.join(__dirname, '/models/users.json'), JSON.stringify(users, null, 2), (err) => {
            if (err) return next(err)
            res.status(302).redirect('/')
        })
    })
})

module.exports = router