import { Link } from "react-router-dom";

interface CTAProps {
  title: string;
  buttonLabel: string;
  buttonTo: string;
}

export default function CTA({ title, buttonLabel, buttonTo }: CTAProps) {
  return (
    <section className="cta-section">
      <h2>{title}</h2>
      <Link to={buttonTo} className="btn btn-primary">
        {buttonLabel}
      </Link>
    </section>
  );
}
