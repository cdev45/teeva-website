/*
 * TEEVA Commercial Growth OS — Product Landing Page (/os)
 * Design: Architectural Precision | Dark hero, white body sections
 * This is the primary product landing page — the monetization engine.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";
const ADVISORY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

const outcomes = [
  {
    icon: "↗",
    title: "Unlock New Markets",
    desc: "Identify and penetrate market categories that are currently inaccessible — federal, enterprise, or international — through the right technology posture, compliance credentials, and commercial strategy.",
  },
  {
    icon: "⬆",
    title: "Expand Top-Line Sales",
    desc: "Architect the commercial infrastructure that converts pipeline into closed revenue: ICP definition, sales cycle design, competitive positioning, and technology-enabled sales enablement.",
  },
  {
    icon: "🛡",
    title: "Defend Against Churn",
    desc: "Build the operational systems, customer success frameworks, and security posture that retain customers, reduce voluntary churn, and convert at-risk accounts into long-term advocates.",
  },
  {
    icon: "↓",
    title: "Reduce OpEx",
    desc: "Deploy AI, Agentic AI, and operational automation to eliminate manual processes, optimize vendor spend, and systematically reduce the cost structure without sacrificing capability.",
  },
  {
    icon: "⚡",
    title: "Enhance Operational Efficiency",
    desc: "Redesign the technology and process architecture that powers your operations — eliminating bottlenecks, accelerating decision velocity, and building the infrastructure that scales without proportional cost growth.",
  },
  {
    icon: "📈",
    title: "Expand EBITDA & Valuation Multiples",
    desc: "Every initiative in the Commercial Growth OS is designed to compound toward one outcome: a stronger EBITDA profile and a higher enterprise valuation multiple — whether you are building toward an exit, a raise, or sustained growth.",
  },
];

const phases = [
  {
    number: "01",
    name: "Commercial Baseline",
    desc: "We conduct a comprehensive assessment of your current commercial position: revenue architecture, market positioning, technology stack, security posture, compliance gaps, and operational efficiency. The output is a prioritized Commercial Gap Analysis that becomes the implementation roadmap.",
  },
  {
    number: "02",
    name: "Foundation & Defense",
    desc: "We install the foundational infrastructure required to compete at the next level: Zero-Trust security architecture, compliance program initiation (FedRAMP, SOC 2, HIPAA, CMMC), and the operational baseline that eliminates the vulnerabilities that suppress growth.",
  },
  {
    number: "03",
    name: "Efficiency Engine",
    desc: "We deploy AI and Agentic AI automation across your revenue operations, customer success, and back-office functions — systematically reducing OpEx, accelerating cycle times, and building the operational leverage that expands EBITDA margins.",
  },
  {
    number: "04",
    name: "Revenue Accelerator",
    desc: "We activate the commercial growth engine: market expansion strategy, enterprise sales cycle optimization, competitive positioning, and the go-to-market architecture that converts your technology and compliance investments into closed revenue.",
  },
];

const tiers = [
  {
    name: "Foundation OS",
    tagline: "For companies building the commercial infrastructure to compete.",
    anchor: "From $8,000/month",
    href: "/os/foundation",
    highlights: ["Commercial Baseline Assessment", "Security & Compliance Foundation", "AI Automation Initiation", "Revenue Architecture Design"],
  },
  {
    name: "Growth OS",
    tagline: "For companies ready to accelerate revenue and expand markets.",
    anchor: "From $14,000/month",
    href: "/os/growth",
    highlights: ["Full 4-Phase Implementation", "Market Expansion Strategy", "Enterprise Sales Cycle Design", "Churn Defense Program"],
    featured: true,
  },
  {
    name: "Enterprise OS",
    tagline: "For companies with complex multi-market or PE-backed growth mandates.",
    anchor: "From $22,000/month",
    href: "/os/enterprise",
    highlights: ["Full-Scope Commercial Transformation", "PE/Board-Level Reporting", "Multi-Market Expansion", "EBITDA & Valuation Advisory"],
  },
];

export default function CommercialGrowthOS() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-up").forEach((t, i) => {
            setTimeout(() => t.classList.add("visible"), i * 60);
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
        className="relative pt-40 pb-28 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="relative z-10 container text-center">
          <p className="teeva-section-label mb-4">The Product</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            The TEEVA Commercial Growth OS
          </h1>
          <div className="teeva-gold-line" />
          <p
            className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mt-6 mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A proprietary, technology-enabled business system delivered via a standardized 4-Phase Implementation Framework for mid-market companies. Customers buy outcomes — not hours, not reports, not advice.
          </p>
          <Link href="/contact" className="teeva-btn-gold">
            Book a Commercial Gap Analysis
          </Link>
        </div>
      </section>

      <div ref={sectionRef}>

        {/* Section 2 — The Outcome Taxonomy */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-14 fade-up">
              <p className="teeva-section-label mb-4">What We Engineer</p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Six Commercial Outcomes.
              </h2>
              <div className="teeva-gold-line" />
              <p
                className="text-base leading-relaxed mt-6 max-w-2xl mx-auto"
                style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
              >
                Every engagement is scoped against these six outcome categories. The Commercial Gap Analysis determines which levers to pull first and in what sequence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcomes.map((outcome, i) => (
                <div
                  key={outcome.title}
                  className="fade-up p-7"
                  style={{
                    backgroundColor: "#F4F5F7",
                    borderTop: "3px solid #D4AF37",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    className="text-2xl mb-3"
                    style={{ color: "#D4AF37" }}
                  >
                    {outcome.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                  >
                    {outcome.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                  >
                    {outcome.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — The 4-Phase Framework */}
        <section className="py-20" style={{ backgroundColor: "#0F2439" }}>
          <div className="container">
            <div className="text-center mb-14 fade-up">
              <p className="teeva-section-label mb-4">How We Deliver</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The 4-Phase Implementation Framework.
              </h2>
              <div className="teeva-gold-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {phases.map((phase, i) => (
                <div
                  key={phase.name}
                  className="fade-up p-8"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    className="text-5xl font-bold mb-3 leading-none"
                    style={{ color: "rgba(212,175,55,0.3)", fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {phase.number}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {phase.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — The Three Tiers */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-14 fade-up">
              <p className="teeva-section-label mb-4">Choose Your OS</p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Three Tiers. One Methodology.
              </h2>
              <div className="teeva-gold-line" />
              <p
                className="text-base leading-relaxed mt-6 max-w-xl mx-auto"
                style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
              >
                All OS implementations require a 12-month commitment. Scope and investment are tailored to the complexity of the engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className="fade-up flex flex-col"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="flex-1 p-8"
                    style={{
                      backgroundColor: tier.featured ? "#0F2439" : "#F4F5F7",
                      borderTop: `3px solid ${tier.featured ? "#D4AF37" : "#0F2439"}`,
                    }}
                  >
                    {tier.featured && (
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                      >
                        Most Popular
                      </p>
                    )}
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: tier.featured ? "#FFFFFF" : "#0F2439",
                      }}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{
                        color: tier.featured ? "rgba(255,255,255,0.7)" : "#4A5568",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {tier.tagline}
                    </p>
                    <p
                      className="text-lg font-semibold mb-6"
                      style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                    >
                      {tier.anchor}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {tier.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm"
                          style={{
                            color: tier.featured ? "rgba(255,255,255,0.8)" : "#4A5568",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <span style={{ color: "#D4AF37", flexShrink: 0 }}>✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={tier.href}
                      className={tier.featured ? "teeva-btn-gold w-full text-center block" : "teeva-btn-outline-navy w-full text-center block text-xs"}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Proof of Concept */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F4F5F7" }}
        >
          <div className="container max-w-4xl">
            <div className="text-center mb-12 fade-up">
              <p className="teeva-section-label mb-4">Proof of Outcomes</p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                The Methodology Works.
              </h2>
              <div className="teeva-gold-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: "$42M",
                  label: "Enterprise Value Created",
                  desc: "Architected the commercial infrastructure for a net-new Commercial Division, unlocking federal and enterprise markets that were previously inaccessible.",
                },
                {
                  metric: "FedRAMP",
                  label: "Inaugural Authorization",
                  desc: "Built a FedRAMP authorization from the ground up — the compliance credential that directly unblocked federal agency sales cycles and accelerated time-to-revenue.",
                },
                {
                  metric: "SOC 2",
                  label: "Type II Authorization",
                  desc: "Designed and implemented a SOC 2 Type II program that transformed a compliance gap into a competitive advantage and shortened enterprise sales cycles.",
                },
              ].map((proof, i) => (
                <div
                  key={proof.metric}
                  className="fade-up bg-white p-8"
                  style={{ borderTop: "3px solid #D4AF37", transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4AF37" }}
                  >
                    {proof.metric}
                  </div>
                  <p
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                  >
                    {proof.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                  >
                    {proof.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — CTA */}
        <section className="py-20" style={{ backgroundColor: "#0F2439" }}>
          <div className="container text-center">
            <div className="fade-up">
              <p className="teeva-section-label mb-4">Ready to Begin?</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Book a Commercial Gap Analysis.
              </h2>
              <div className="teeva-gold-line" />
              <p
                className="text-white/70 text-base mt-6 mb-8 max-w-xl mx-auto"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A 30-minute complimentary assessment to identify the highest-leverage commercial opportunities in your business and determine which OS tier is the right fit.
              </p>
              <Link href="/contact" className="teeva-btn-gold">
                Book a Commercial Gap Analysis
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
