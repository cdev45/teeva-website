import { Link } from "wouter";
import { useEffect, useRef } from "react";

const ADVISORY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";
const CYBER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-cybersecurity-CXbWWbd8RXckCJuHdUHE7D.webp";
const METHODOLOGY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";

const services = [
  {
    name: "Fractional CIO (vCIO)",
    tagline: "Board-level IT leadership that transforms technology into enterprise value.",
    description: "Mid-market companies need board-level IT leadership to adopt AI, modernize infrastructure, and open new markets. Our vCIO service is built on the 'Innovate and Monetize' model — we architect IT strategy that directly opens markets, closes deals, and creates enterprise value.",
    href: "/advisory/fractional-cio",
    image: ADVISORY_IMAGE,
    anchor: "$7,000/month",
  },
  {
    name: "Cybersecurity Advisory (vCISO)",
    tagline: "Board-ready security leadership natively integrated with our CIO methodology.",
    description: "We provide board-ready security leadership from a practitioner who has built inaugural FedRAMP and SOC 2 authorizations from the ground up. Security is a design requirement, not an afterthought. We deploy Zero-Trust frameworks and manage GovRAMP, FedRAMP, SOC 2, and HIPAA authorizations.",
    href: "/advisory/cybersecurity",
    image: CYBER_IMAGE,
    anchor: "$6,000/month",
  },
  {
    name: "AI Transformation",
    tagline: "Outcome-accountable AI adoption that treats security as a design requirement.",
    description: "Ninety-five percent of enterprise AI pilots fail to scale. We deliver outcome-accountable AI adoption strategies that treat security and compliance as design requirements from day one. We architect right-sized AI solutions that drive measurable ROI without the enterprise bloat.",
    href: "/advisory/ai-transformation",
    image: METHODOLOGY_IMAGE,
    anchor: "$6,000/month",
  },
  {
    name: "Compliance Advisory",
    tagline: "Proactive compliance programs that directly unblock enterprise sales cycles.",
    description: "Mid-market companies are losing enterprise deals because they cannot produce the compliance documentation that enterprise buyers require. We transform compliance from a cost center into a revenue enabler, building HIPAA, CMMC, SOC 2, and FedRAMP programs that accelerate sales.",
    href: "/advisory/compliance",
    image: ADVISORY_IMAGE,
    anchor: "$5,000/month",
  },
  {
    name: "Go-to-Market Advisory",
    tagline: "Strategic revenue growth leveraging technical capabilities as competitive differentiators.",
    description: "Fifty-five percent of mid-market companies miss quarterly revenue forecasts by more than ten percent. We architect strategic revenue growth that leverages technical capabilities and compliance posture as competitive differentiators, translating security architecture into closed commercial deals.",
    href: "/advisory/go-to-market",
    image: CYBER_IMAGE,
    anchor: "$5,000/month",
  },
];

export default function Advisory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-up").forEach((t, i) => {
            setTimeout(() => t.classList.add("visible"), i * 80);
          });
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${ADVISORY_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" style={{ opacity: 0.6 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <p className="teeva-section-label mb-4">Advisory Services</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Integrated Advisory<br />for the Mid-Market.
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            We deliver high-margin professional services designed specifically for mid-market companies. Our integrated approach eliminates the friction of hiring separate firms to build systems and secure them, providing a unified strategy that accelerates revenue and mitigates risk.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container max-w-5xl">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="fade-up mb-12 last:mb-0 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="overflow-hidden"
                style={{ border: "1px solid #F4F5F7" }}
              >
                <div
                  className="relative h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "#0F2439", opacity: 0.65 }} />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <p className="teeva-section-label mb-2">Starting at {service.anchor}</p>
                    <h2
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {service.name}
                    </h2>
                    <p className="text-white/70 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    {service.description}
                  </p>
                  <Link href={service.href} className="teeva-btn-gold text-xs">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F2439" }}>
        <div className="container text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Get Started?
          </h2>
          <div className="teeva-gold-line" />
          <p className="text-white/70 text-base mt-6 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Book a complimentary Strategy Assessment to discuss your specific challenges and how our integrated advisory methodology can deliver measurable outcomes.
          </p>
          <Link href="/contact" className="teeva-btn-gold">
            Book a Strategy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
