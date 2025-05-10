const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');

const readUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

exports.registerUser = async (req, res) => {
  const { name, email, password, role, department, specialization, phone, idNumber } = req.body;

  try {
    const users = readUsers();
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      gender: req.body.gender,
      role,
      department,
      specialization,
      phone,
      idNumber,
      emailVerified: req.body.emailVerified || false,
      phoneVerified: req.body.phoneVerified || false,
    };

    users.push(newUser);
    writeUsers(users);

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = readUsers();
    const user = users.find(user => user.email === email);

    if (user && (await bcrypt.compare(password, user.password))) {
      // ✅ Store user in session
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      // ✅ Redirect to homepage/dashboard
      res.redirect('/home'); // adjust this route as per your app
    } else {
      // If credentials invalid, render login with error
      res.status(401).render('login', { error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).render('login', { error: 'Server error' });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const users = readUsers();
    const user = users.find(user => user.id === req.session.user?.id);

    if (user) {
      res.json({
        id: user.id,
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