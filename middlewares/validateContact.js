const validateContact = (req, res, next) => {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
        return res.status(400).json({ error: "All required fields must be filled." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    // Validate mobile number (basic check for digits)
    if (!/^\d{10}$/.test(mobile)) {
        return res.status(400).json({ error: "Invalid mobile number. It must be 10 digits." });
    }

    next();
};

module.exports = validateContact;