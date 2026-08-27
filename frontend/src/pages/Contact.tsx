import { useState, type FormEvent } from "react";
import SectionHeading from "../components/SectionHeading";
import usePageTitle from "../hooks/usePageTitle";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  usePageTitle("Contact Us");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedback(data.message || "Thank you! We'll get back to you shortly.");
        setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(
          data.message || (data.errors ? data.errors.join(" ") : "Something went wrong. Please try again.")
        );
      }
    } catch (err) {
      setStatus("error");
      setFeedback("Could not reach the server. Please check your connection and try again.");
    }
  };

  return (
    <section className="section">
      <SectionHeading
        eyebrow="Contact Us"
        title="Let's Talk"
        subtitle="Tell us about your requirement and our team will get in touch."
      />

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={form.company} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Required</label>
            <select id="service" name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service</option>
              <option value="Technology">Technology Solutions</option>
              <option value="Talent">Talent Solutions</option>
              <option value="Training">Training & Certifications</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && <p className="form-feedback form-feedback--success">{feedback}</p>}
          {status === "error" && <p className="form-feedback form-feedback--error">{feedback}</p>}
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have a question or a project in mind? Reach out and our team will respond within one business day.</p>

          <div className="contact-info-item">
            <strong>Email</strong>
            harshad@syncsparktech.com
          </div>
          <div className="contact-info-item">
            <strong>Phone</strong>
            +91 89832 72923
          </div>
          <div className="contact-info-item">
            <strong>Address</strong>
            Pune, Maharashtra, India
          </div>
        </div>
      </div>
    </section>
  );
}
