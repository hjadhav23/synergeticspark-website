import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="SynergeticSpark Technologies" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">
            <span>Technology.</span> <span>Talent.</span> <span>Transformation.</span>
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/talent">Talent</Link></li>
            <li><Link to="/training">Training</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>harshad@syncsparktech.com</li>
            <li>+91 89832 72923</li>
            <li>Pune, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SynergeticSpark Technologies. All rights reserved.
      </div>
    </footer>
  );
}
