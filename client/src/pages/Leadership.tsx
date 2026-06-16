import { useEffect, useRef } from "react";
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

export default function Leadership() {
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
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" style={{ opacity: 0.6 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <p className="teeva-section-label mb-4">About TEEVA</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Our Leadership.
          </h1>
          <div className="teeva-gold-line-left" />
        </div>
      </section>

      {/* Founder Profile */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Headshot Column */}
            <div className="lg:col-span-1 fade-up">
              <div
                className="aspect-square bg-cover bg-center bg-top flex items-end"
                style={{
                  backgroundImage: `url(/manus-storage/chris-denoia-headshot_ca084511.webp)`,
                  backgroundColor: "#F4F5F7",
                }}
              >
                <div
                  className="w-full p-4"
                  style={{ backgroundColor: "rgba(15, 36, 57, 0.85)" }}
                >
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Chris DeNoia
                  </p>
                  <p className="teeva-section-label" style={{ color: "#D4AF37" }}>
                    Founder & Principal Advisor
                  </p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="teeva-btn-outline-navy text-xs text-center"
                >
                  Contact
                </Link>
                <a
                  href="https://www.linkedin.com/in/cdenoia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teeva-btn-gold text-xs text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-2">
              <div className="fade-up">
                <p className="teeva-section-label mb-3">Founder & Principal Advisor</p>
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  Chris DeNoia
                </h2>
                <div className="teeva-gold-line-left" />
              </div>

              <div className="fade-up mt-8 space-y-6">
                <p className="text-base leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  Chris DeNoia is the Founder and Principal Advisor of TEEVA. He is a technology strategist and commercial architect with over 20 years of practitioner-level experience delivering measurable commercial outcomes through technology strategy, AI, and market execution. He recently architected the infrastructure and commercial strategy for a net-new Commercial Division, capturing $42M in enterprise value and unlocking massive federal and enterprise markets.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  Boards and CEOs engage Chris to solve a specific, high-stakes problem: how to use technology, AI, and commercial strategy to expand top-line revenue, unlock new markets, reduce operational costs, and enhance enterprise valuation — while ensuring the infrastructure that powers growth is secure, compliant, and built to scale.
                </p>

                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Revenue-Enabling Strategy",
                      description: "Partnering with boards, CEOs, and commercial leadership to architect technology strategies that directly drive revenue growth, defend market share, and expand EBITDA. Chris translates IT and security investments into measurable commercial outcomes — accelerating enterprise sales cycles, opening new market categories, and building the infrastructure that sustains long-term enterprise valuation.",
                    },
                    {
                      title: "Digital Transformation and Innovation",
                      description: "Steering cloud architecture on AWS and Google, AI automation integration, and complex M&A technology integrations. Chris has led digital transformation initiatives that created measurable enterprise value and opened new market categories.",
                    },
                    {
                      title: "Cybersecurity and Enterprise Risk Management",
                      description: "Deploying Zero-Trust frameworks and securing GovRAMP, FedRAMP, SOC 2, and HIPAA authorizations to accelerate time-to-market. Chris has built inaugural authorizations from the ground up, establishing security programs that function as competitive moats.",
                    },
                  ].map((mandate) => (
                    <div
                      key={mandate.title}
                      className="pl-5"
                      style={{ borderLeft: "2px solid #D4AF37" }}
                    >
                      <h4
                        className="font-semibold mb-2"
                        style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                      >
                        {mandate.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        {mandate.description}
                      </p>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container text-center">
          <p className="text-base mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
            Ready to work with Chris and the TEEVA team?
          </p>
          <Link href="/contact" className="teeva-btn-gold">
            Book a Strategy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
