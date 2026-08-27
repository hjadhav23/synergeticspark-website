import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { technologyServices } from "../data/technologyServices";
import usePageTitle from "../hooks/usePageTitle";

export default function Technology() {
  usePageTitle("Technology Solutions");

  return (
    <>
      <section className="section">
        <SectionHeading
          eyebrow="Technology Solutions"
          title="Technology Solutions"
          subtitle="End-to-end technology services that help businesses innovate and scale."
        />
        <div className="service-grid">
          {technologyServices.map((service) => (
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
