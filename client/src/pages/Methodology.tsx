import { Link } from "wouter";
import { useEffect, useRef } from "react";

const METHODOLOGY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";

const caseStudies = [
  {
    outcome: "$42M in Enterprise Value Created",
    tag: "Fractional CIO",
    description1: "A mid-market technology company needed to capture federal and enterprise markets but lacked the IT infrastructure and compliance posture to compete. We were engaged to architect a net-new Commercial Division from the ground up.",
    description2: "Within 18 months, we had designed and deployed the cloud infrastructure, compliance framework, and security architecture required to unlock federal and enterprise sales cycles. The result was $42M in enterprise value creation and access to markets that were previously inaccessible.",
  },
  {
    outcome: "Inaugural FedRAMP Authorization",
    tag: "Compliance Advisory",
    description1: "A SaaS provider was losing enterprise deals because federal agency buyers required FedRAMP authorization. No existing compliance firm had the integrated CIO/CISO capability to architect both the technical infrastructure and the compliance program simultaneously.",
    description2: "We built the FedRAMP authorization from the ground up — designing the security architecture, developing the System Security Plan, and managing the authorization process. The authorization directly unblocked enterprise pre-sales cycles and accelerated time-to-revenue.",
  },
  {
    outcome: "SOC 2 Type II Authorization",
    tag: "Cybersecurity Advisory",
    description1: "A mid-market B2B company was losing deals to competitors who could demonstrate SOC 2 compliance. Their existing MSP had no capability to build a compliance program; they could only manage tools.",
    description2: "We designed and implemented a SOC 2 Type II program that transformed a compliance gap into a competitive advantage. The authorization accelerated commercial market fit, shortened sales cycles, and became a primary differentiator in competitive evaluations.",
  },
];

const pillars = [
  { name: "Technology Strategy", desc: "Revenue Architecture & Market Expansion", color: "#0F2439" },
  { name: "AI & Agentic AI", desc: "OpEx Reduction & Revenue Automation", color: "#1A365D" },
  { name: "Security & Compliance", desc: "Market Access & Churn Defense", color: "#0F2439" },
  { name: "Go-to-Market", desc: "Top-Line Growth & Competitive Strategy", color: "#1A365D" },
  { name: "Commercial Advisory", desc: "EBITDA Expansion & Valuation Enhancement", color: "#0F2439" },
];

export default function Methodology() {
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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${METHODOLOGY_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="relative z-10 container text-center">
          <p className="teeva-section-label mb-4">Our Approach</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            ONE FIRM. TWO DISCIPLINES.<br />ZERO GAPS.
          </h1>
          <div className="teeva-gold-line" />
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            The TEEVA Integrated Advisory Methodology.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="bg-white">
        {/* Section 2 — Core Differentiator */}
        <div className="py-20 container max-w-4xl">
          <div className="fade-up">
            <blockquote className="teeva-pull-quote text-2xl md:text-3xl mb-8">
              "Most advisory firms help you manage technology. We use technology to win markets, expand revenue, and build enterprise value. That is a fundamentally different mandate."
            </blockquote>
            <p className="text-base leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
              TEEVA's integrated methodology is built on a single conviction: technology is the underlying foundation of the modern economy, and the firms that master it gain a structural commercial advantage over those that do not. We do not manage IT. We architect commercial outcomes. Revenue growth, market expansion, churn defense, OpEx reduction, EBITDA expansion, and valuation enhancement are the deliverables. Technology strategy, AI, Agentic AI, security architecture, compliance programs, and go-to-market execution are the instruments. The five service pillars are not separate offerings — they are interconnected levers within a single, unified commercial methodology.
            </p>
          </div>
        </div>

        {/* Section 3 — Competitor Comparison */}
        <div className="py-20" style={{ backgroundColor: "#F4F5F7" }}>
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <p className="teeva-section-label mb-4">Why TEEVA</p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                How We Compare.
              </h2>
              <div className="teeva-gold-line" />
            </div>

            <div className="fade-up overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <thead>
                  <tr style={{ backgroundColor: "#0F2439" }}>
                    <th className="text-left px-6 py-4 text-white font-medium">Capability</th>
                    <th className="px-6 py-4 text-white/60 font-medium text-center">Big 4</th>
                    <th className="px-6 py-4 text-white/60 font-medium text-center">MSP vCIO/vCISO</th>
                    <th className="px-6 py-4 text-white/60 font-medium text-center">Fractional Networks</th>
                    <th className="px-6 py-4 font-semibold text-center" style={{ color: "#D4AF37" }}>TEEVA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Commercial Outcomes Mandate", "✗", "✗", "✗", "✓"],
                    ["Revenue & Market Expansion Focus", "✗", "✗", "Partial", "✓"],
                    ["AI & Agentic AI Strategy", "Partial", "✗", "✗", "✓"],
                    ["EBITDA & Valuation Advisory", "✗", "✗", "✗", "✓"],
                    ["Integrated Technology + GTM", "✗", "✗", "✗", "✓"],
                    ["Mid-Market Focus", "✗", "✓", "Partial", "✓"],
                    ["Outcome-Accountable Retainers", "✗", "✗", "✗", "✓"],
                    ["Cost Structure", "$500K+", "Low / MSP-bundled", "High / fragmented", "Mid-market optimized"],
                  ].map(([capability, big4, msp, network, teeva], i) => (
                    <tr
                      key={capability}
                      style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F4F5F7" }}
                    >
                      <td className="px-6 py-4 font-medium" style={{ color: "#0F2439" }}>{capability}</td>
                      <td className="px-6 py-4 text-center" style={{ color: big4 === "✗" ? "#EF4444" : "#4A5568" }}>{big4}</td>
                      <td className="px-6 py-4 text-center" style={{ color: msp === "✗" ? "#EF4444" : "#4A5568" }}>{msp}</td>
                      <td className="px-6 py-4 text-center" style={{ color: network === "✗" ? "#EF4444" : "#4A5568" }}>{network}</td>
                      <td className="px-6 py-4 text-center font-semibold" style={{ color: "#D4AF37" }}>{teeva}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 4 — Case Studies */}
        <div className="py-20" style={{ backgroundColor: "#F4F5F7" }}>
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <p className="teeva-section-label mb-4">Proof of Outcomes</p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Firm-Level Case Studies.
              </h2>
              <div className="teeva-gold-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.outcome}
                  className="fade-up bg-white p-8"
                  style={{ transitionDelay: `${i * 80}ms`, borderTop: "3px solid #D4AF37" }}
                >
                  <p className="teeva-section-label mb-3">{cs.tag}</p>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                  >
                    {cs.outcome}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    {cs.description1}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    {cs.description2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5 — Five Pillars Diagram */}
        <div className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <p className="teeva-section-label mb-4">The Integrated Model</p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                The Five Pillars.
              </h2>
              <div className="teeva-gold-line" />
            </div>

            <div className="fade-up max-w-4xl mx-auto">
              {/* Central hub diagram */}
              <div className="relative flex items-center justify-center py-8">
                {/* Center */}
                <div
                  className="absolute z-10 w-32 h-32 rounded-full flex items-center justify-center text-center"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span
                    className="text-xs font-bold leading-tight"
                    style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                  >
                    TEEVA<br />METHODOLOGY
                  </span>
                </div>

                {/* Surrounding pillars */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                  {pillars.map((pillar, i) => (
                    <div
                      key={pillar.name}
                      className="p-5 text-center"
                      style={{ backgroundColor: pillar.color }}
                    >
                      <div
                        className="text-sm font-bold mb-1"
                        style={{ color: "#D4AF37", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                      >
                        {pillar.name}
                      </div>
                      <div
                        className="text-xs leading-tight"
                        style={{ color: "#FFFFFF80", fontFamily: "'Inter', sans-serif" }}
                      >
                        {pillar.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center text-sm mt-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                Each pillar is interconnected within the TEEVA commercial methodology. Technology strategy opens markets. AI reduces costs and automates revenue. Security and compliance unlock enterprise buyers. Go-to-market execution converts capability into closed deals. Commercial advisory ensures every initiative compounds toward EBITDA expansion and valuation enhancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F2439" }}>
        <div className="container text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Claim Your Edge.
          </h2>
          <div className="teeva-gold-line" />
          <p className="text-white/70 text-base mt-6 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Book a complimentary Strategy Assessment to discover how the TEEVA commercial methodology can expand your revenue, unlock new markets, reduce OpEx, and enhance your firm's enterprise valuation.
          </p>
          <Link href="/contact" className="teeva-btn-gold">
            Book a Strategy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
