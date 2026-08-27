import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";

export default function About() {
  return (
    <>
      <section className="section">
        <SectionHeading
          eyebrow="About Us"
          title="Driving Technology, Talent & Transformation"
          subtitle="We help businesses grow by combining strong technology capability with the right people and skills."
        />
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

      <CTA
        title="Let's build your next opportunity."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </>
  );
}
