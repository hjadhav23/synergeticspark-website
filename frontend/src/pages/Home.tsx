import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";
import StatCounter from "../components/StatCounter";
import DashboardMockup from "../components/DashboardMockup";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <span className="hero-eyebrow">Technology + Talent + Transformation</span>
        <h1 className="hero-tagline">
          <span>Technology.</span> <span className="accent">Talent.</span> <span>Transformation.</span>
        </h1>
        <p>
          Empowering organizations through enterprise consulting, software engineering,
          cloud transformation, managed services, strategic recruitment, and professional
          certifications.
        </p>
        <div className="hero-buttons">
          <Link to="/technology" className="btn btn-primary">Explore Services</Link>
          <Link to="/contact" className="btn btn-secondary">Talk to Expert</Link>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="section stats-section">
        <div className="stats-grid">
          <StatCounter target={50} suffix="+" label="Projects Delivered" />
          <StatCounter target={99.9} decimals={1} suffix="%" label="Service Availability" />
          <StatCounter target={24} suffix="/7" label="Hours Support" />
          <StatCounter target={6} suffix="+" label="Technology Domains" />
        </div>
      </section>

      {/* Enterprise Operations Dashboard */}
      <section className="section section-dashboard">
        <SectionHeading
          eyebrow="Live Operations"
          title="Enterprise Operations Dashboard"
          subtitle="Real-time visibility into delivery performance across our service lines."
          light
        />
        <DashboardMockup />
      </section>

      {/* Our Expertise */}
      <section className="section">
        <SectionHeading eyebrow="Our Expertise" title="Technology | Talent | Training" />
        <div className="expertise-grid">
          <div className="pillar-card">
            <h3>Technology</h3>
            <p>IT consulting, software development, cloud and AI solutions built for scale.</p>
            <Link to="/technology" className="btn btn-outline-dark">View Solutions</Link>
          </div>
          <div className="pillar-card">
            <h3>Talent</h3>
            <p>IT and non-IT recruitment, staffing and executive search for every stage.</p>
            <Link to="/talent" className="btn btn-outline-dark">View Solutions</Link>
          </div>
          <div className="pillar-card">
            <h3>Training</h3>
            <p>Certifications and corporate training programs that build lasting skills.</p>
            <Link to="/training" className="btn btn-outline-dark">View Solutions</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-alt">
        <SectionHeading eyebrow="Why Us" title="What Sets Us Apart" />
        <div className="whyus-grid">
          <div className="whyus-card">
            <div className="whyus-icon">E</div>
            <h3>Enterprise Expertise</h3>
            <p>Proven experience delivering solutions for large-scale enterprises.</p>
          </div>
          <div className="whyus-card">
            <div className="whyus-icon">T</div>
            <h3>Technology + Talent</h3>
            <p>A unique combination of tech capability and workforce solutions.</p>
          </div>
          <div className="whyus-card">
            <div className="whyus-icon">A</div>
            <h3>Agile Delivery</h3>
            <p>Fast, iterative delivery that adapts to changing business needs.</p>
          </div>
          <div className="whyus-card">
            <div className="whyus-icon">S</div>
            <h3>Scalable Solutions</h3>
            <p>Solutions designed to grow with your business, without limits.</p>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section">
        <SectionHeading eyebrow="Our Process" title="How We Deliver" />
        <div className="process-track">
          {["Discover", "Strategize", "Build", "Deploy", "Scale"].map((step, i) => (
            <div className="process-step" key={step}>
              <div className="step-number">{i + 1}</div>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Let's build your next opportunity."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </>
  );
}
