const express = require("express");
const rateLimit = require("express-rate-limit");
const { validateContact } = require("../middleware/validateContact");
const { submitContactForm } = require("../controllers/contactController");

const router = express.Router();

// Limit to 5 submissions per 15 minutes per IP, to prevent spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many submissions from this IP. Please try again later.",
  },
});

router.post("/", contactLimiter, validateContact, submitContactForm);

module.exports = router;
