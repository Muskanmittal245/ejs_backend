const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../models/users.json");

const readUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Signup route
router.post("/signup", async (req, res) => {
  const { name, email, mobileNumber, DOB, gender, address, password } = req.body;
  const users = readUsers();

  // Check if the user already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user object
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    mobileNumber,
    DOB,
    gender,
    address,
    password: hashedPassword
  };

  // Save the new user to the users.json file
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: "User registered successfully!" });
});

// Login route with session
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  // Find the user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password!" });
  }

  // Verify the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password!" });
  }

  // Store all user details in the session
  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email,
    mobileNumber: user.mobileNumber,
    DOB: user.DOB,
    gender: user.gender,
    address: user.address
  };

  res.status(200).json({ message: "Login successful!" });
});

// Optional logout route
router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.redirect("/login");
  });
});

module.exports = router;