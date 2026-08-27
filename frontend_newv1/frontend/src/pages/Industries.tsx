import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { industries } from "../data/industries";

export default function Industries() {
  return (
    <>
      <section className="section">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Industries We Serve"
          subtitle="Delivering tailored technology and talent solutions across sectors."
        />
        <div className="service-grid">
          {industries.map((industry) => (
            <ServiceCard key={industry.title} title={industry.title} description={industry.description} />
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
