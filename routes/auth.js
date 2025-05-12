const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

// Signup route
router.post("/signup", async (req, res) => {
  const { name, email, mobileNumber, DOB, gender, address, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      name,
      email,
      mobileNumber,
      DOB,
      gender,
      address,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login route with session
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
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
      id: user._id,
      name: user.name,
      email: user.email,
      mobileNumber: user.mobileNumber,
      DOB: user.DOB,
      gender: user.gender,
      address: user.address,
    };

    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Optional logout route
router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.redirect("/login");
  });
});

module.exports = router;