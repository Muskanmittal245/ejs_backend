const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = 8080;

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

// Define routes for EJS templates
app.get("/", (req, res) => res.render("welcome"));
app.get("/login", (req, res) => res.render("login"));
app.get("/about", (req, res) => res.render("about"));
app.get("/booking", (req, res) => res.render("booking"));
app.get("/services", (req, res) => res.render("services"));

// API routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const contactRoutes = require("./routes/contact");
app.use("/api", contactRoutes);

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