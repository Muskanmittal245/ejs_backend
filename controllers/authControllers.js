const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password, gender, role, department, specialization, phone, idNumber, emailVerified, phoneVerified, DOB, address } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      gender,
      role,
      department,
      specialization,
      mobileNumber: phone,
      idNumber,
      emailVerified: emailVerified || false,
      phoneVerified: phoneVerified || false,
      DOB,
      address,
    });

    await newUser.save();

    res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Authenticate User (Login)
exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Store user in session
      req.session.user = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      // Redirect or send success
      res.status(200).json({ message: 'Login successful', user: req.session.user });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get User Details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.session.user?.id);
    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};