const { createTransporter } = require("../config/mailer");
const { saveLead } = require("../utils/leadLogger");

async function submitContactForm(req, res) {
  const { name, email, company, phone, service, message } = req.body;

  try {
    // Save a local backup record first, so we never lose a lead
    // even if the email send fails.
    saveLead({ name, email, company, phone, service, message });

    const transporter = createTransporter();
    const receiver = process.env.LEAD_RECEIVER_EMAIL || process.env.GMAIL_USER;

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>Service Required:</strong> ${escapeHtml(service || "-")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"SynergeticSpark Website" <${process.env.GMAIL_USER}>`,
      to: receiver,
      replyTo: email,
      subject: `New Enquiry from ${name} — SynergeticSpark Website`,
      html: htmlBody,
    });

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent. We'll get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error.message);
    return res.status(500).json({
      success: false,
      message:
        "We saved your message, but there was an issue sending the notification email. Our team will still follow up.",
    });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = { submitContactForm };
