import { Link } from "react-router-dom";

interface CtaLink {
  label: string;
  to: string;
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="hero">
      {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {(primaryCta || secondaryCta) && (
        <div className="hero-buttons">
          {primaryCta && (
            <Link to={primaryCta.to} className="btn btn-primary">
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link to={secondaryCta.to} className="btn btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
