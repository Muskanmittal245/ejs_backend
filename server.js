const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = 8080;

require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger);

// ✅ Session middleware
app.use(
  session({
    secret: "yourSecretKey", // 🔐 use a secure secret in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // set to true only with HTTPS
  })
);

// ✅ Make user available in all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Define routes for EJS templates
app.get("/", (req, res) => res.render("welcome"));
app.get("/login", (req, res) => res.render("login"));
app.get("/about", (req, res) => res.render("about"));
app.get("/booking", (req, res) => res.render("booking"));
app.get("/services", (req, res) => res.render("services"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/home", (req, res) => res.render("home")); // Home after login

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.redirect("/");
  });
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }


  const user = req.session.user;

  res.render("profile", { user });
});
const appointmentsRouter = require('./routes/appointments');
app.use('/appointments', appointmentsRouter);

app.get("/medicalRecords", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  // Dummy data for demonstration
  const records = [
    { title: "Blood Test", date: "2025-04-15" },
    { title: "X-Ray", date: "2025-03-20" }
  ];

  res.render("medicalRecords", { records });
});
// API routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const contactRoutes = require("./routes/contact");
app.use("/", contactRoutes);

const bookingRoutes = require("./routes/booking");
app.use("/api", bookingRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => res.status(404).send("404 - Page Not Found"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});