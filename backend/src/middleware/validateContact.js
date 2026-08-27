function validateContact(req, res, next) {
  const { name, email, message } = req.body;

  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required (min 2 characters).");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (!message || typeof message !== "string" || message.trim().length < 5) {
    errors.push("Message is required (min 5 characters).");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
}

module.exports = { validateContact };
