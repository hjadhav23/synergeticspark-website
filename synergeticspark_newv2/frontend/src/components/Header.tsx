import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Technology", to: "/technology" },
  { label: "Talent", to: "/talent" },
  { label: "Training", to: "/training" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="SynergeticSpark Technologies" className="logo-img" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary">
            Talk to Expert
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
