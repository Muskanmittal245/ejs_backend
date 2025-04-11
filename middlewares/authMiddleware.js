const fs = require('fs')
const path = require('path')
const rateLimit = require('express-rate-limit')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { body, validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json')

const readUsers = () => {
  const data = fs.readFileSync(usersFilePath)
  return JSON.parse(data)
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

const logger = morgan('dev')

const securityHeaders = helmet()

const parseCookies = cookieParser()

const validateRequest = [
  body('userId').notEmpty().withMessage('User ID is required'),
]

const protect = async (req, res, next) => {
  limiter(req, res, () => {})

  logger(req, res, () => {})

  securityHeaders(req, res, () => {})

  parseCookies(req, res, () => {})

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const userId = req.headers['user-id'] || req.cookies['user-id']

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized, no user ID' })
  }

  try {
    const users = readUsers()
    const user = users.find(user => user.id === userId)

    if (!user) {
      return res.status(401).json({ message: 'Not authorized, user not found' })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { protect }