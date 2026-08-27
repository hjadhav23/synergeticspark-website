import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { trainingServices } from "../data/trainingServices";
import usePageTitle from "../hooks/usePageTitle";

export default function Training() {
  usePageTitle("Training & Certifications");

  return (
    <>
      <section className="section">
        <SectionHeading
          eyebrow="Training & Certifications"
          title="Training & Certifications"
          subtitle="Programs designed to build capability, leadership and lasting skills."
        />
        <div className="service-grid">
          {trainingServices.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
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
