import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { talentServices } from "../data/talentServices";

export default function Talent() {
  return (
    <>
      <section className="section">
        <SectionHeading
          eyebrow="Talent Solutions"
          title="Talent Solutions"
          subtitle="Connecting businesses with the right people, at the right time."
        />
        <div className="service-grid">
          {talentServices.map((service) => (
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
