/*
 * TEEVA Homepage — Architectural Precision Design System
 * 8 sections: Hero, Trust Bar, Problem, Services, Methodology Teaser,
 * Testimonials, Dual CTA, Newsletter
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-main-etAuiCGcpMpRU7MvCHPuw4.webp";
const METHODOLOGY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    name: "Fractional CIO (vCIO)",
    description: "Board-level IT leadership that transforms technology from a cost center into a primary revenue driver. We architect strategy that opens markets and creates enterprise value.",
    href: "/advisory/fractional-cio",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    name: "Cybersecurity Advisory (vCISO)",
    description: "Board-ready security leadership natively integrated with our CIO methodology. Security is a design requirement, not an afterthought.",
    href: "/advisory/cybersecurity",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    name: "AI Transformation",
    description: "Outcome-accountable AI adoption strategies that treat security and compliance as design requirements. We architect right-sized solutions that drive measurable ROI.",
    href: "/advisory/ai-transformation",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    name: "Compliance Advisory",
    description: "Proactive compliance programs that transform regulatory requirements into revenue enablers. We build FedRAMP, SOC 2, HIPAA, and CMMC programs that unblock enterprise sales.",
    href: "/advisory/compliance",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    name: "Go-to-Market Advisory",
    description: "Strategic revenue growth that leverages technical capabilities and compliance posture as competitive differentiators. We translate security architecture into closed commercial deals.",
    href: "/advisory/go-to-market",
  },
];

const testimonials = [
  {
    quote: "TEEVA transformed our IT infrastructure and security posture, enabling us to capture significant enterprise value and unlock markets we previously could not access.",
    role: "CEO, Mid-Market Healthcare Company",
  },
  {
    quote: "Their integrated CIO/CISO approach to compliance and security directly unblocked critical enterprise sales cycles. The ROI was measurable within the first quarter.",
    role: "CFO, B2B SaaS Provider",
  },
  {
    quote: "Working with TEEVA is fundamentally different from any advisory relationship we have had. They speak the language of the boardroom and deliver outcomes, not reports.",
    role: "Board Member, Financial Services Firm",
  },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const val42 = useCountUp(42, 1800, started);
  const val20 = useCountUp(20, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ backgroundColor: "#1A365D" }} className="py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { value: `$${val42}M`, label: "in Enterprise Value Created" },
            { value: "FedRAMP & SOC 2", label: "Inaugural Authorizations" },
            { value: `${val20}+`, label: "Years CIO/CISO Experience" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-8 py-4 md:py-0"
            >
              <span
                className="text-2xl font-bold mb-1"
                style={{ color: "#D4AF37", fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.value}
              </span>
              <span className="text-white/60 text-xs tracking-wide uppercase" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const targets = el.querySelectorAll(".fade-up");
            targets.forEach((target, i) => {
              setTimeout(() => target.classList.add("visible"), i * 80);
            });
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="relative z-10 container text-center px-4">
          <p
            className="teeva-section-label mb-6"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            Mid-Market Advisory
          </p>
          <h1
            className="text-white font-bold leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.05em",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}
          >
            YOUR EDGE IN<br />BUSINESS AND LIFE.
          </h1>

          <div
            className="teeva-gold-line"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.5s ease 0.2s",
            }}
          />

          <p
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mt-4 mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
            }}
          >
            We are the only mid-market advisory firm delivering integrated Fractional CIO and CISO leadership. We transform your IT and security from a cost center into a primary revenue driver.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s",
            }}
          >
            <Link href="/methodology" className="teeva-btn-gold">
              Explore Our Methodology
            </Link>
            <Link href="/resources" className="teeva-btn-outline-white">
              Access Executive Resources
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* Section 2 — Trust Bar */}
      <TrustBar />

      {/* Section 3 — The Problem */}
      <section
        ref={(el) => { sectionRefs.current[0] = el as HTMLElement; }}
        className="py-24 bg-white"
      >
        <div className="container max-w-4xl">
          <div className="fade-up">
            <p className="teeva-section-label mb-4">The Challenge</p>
            <h2
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              The Mid-Market Paradox.
            </h2>
            <div className="teeva-gold-line-left" />
          </div>
          <div className="fade-up mt-8 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
              Mid-market companies face enterprise-level challenges but cannot afford Big 4 consultancies. A full-time CIO costs $250,000 to $450,000 per year. An experienced CISO commands $300,000 to $600,000 in total compensation. Hiring both is a budget most mid-market companies cannot justify — and yet the complexity of modern digital operations demands both disciplines operating in concert.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
              The result is a structural vulnerability. Technology decisions are made reactively, by committee, or delegated to vendors with conflicts of interest. Security is treated as a compliance checkbox rather than a revenue enabler. AI pilots launch without governance frameworks and fail to scale. Enterprise deals stall because compliance documentation does not exist.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
              Boutique agencies lack the strategic depth to integrate security, compliance, and revenue growth into a single, cohesive roadmap. TEEVA was built to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — The Five Service Pillars */}
      <section
        ref={(el) => { sectionRefs.current[1] = el as HTMLElement; }}
        className="py-24"
        style={{ backgroundColor: "#F4F5F7" }}
      >
        <div className="container">
          <div className="text-center mb-16 fade-up">
            <p className="teeva-section-label mb-4">What We Deliver</p>
            <h2
              className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Five Service Pillars.
            </h2>
            <div className="teeva-gold-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="fade-up bg-white p-8 group hover:shadow-xl transition-all duration-300"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  borderTop: "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
                }}
              >
                <div className="mb-5">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-sm font-semibold transition-colors duration-150"
                  style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Methodology Teaser */}
      <section
        ref={(el) => { sectionRefs.current[2] = el as HTMLElement; }}
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${METHODOLOGY_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 container max-w-4xl text-center">
          <div className="fade-up">
            <p className="teeva-section-label mb-4">Our Approach</p>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              One Firm. Two Disciplines. Zero Gaps.
            </h2>
            <div className="teeva-gold-line" />
          </div>
          <div className="fade-up mt-8">
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              We integrate IT strategy and risk management into a single, cohesive roadmap. Our dual-threat methodology ensures that security is a design requirement, not an afterthought — driving outcomes that neither discipline could achieve independently.
            </p>
            <Link href="/methodology" className="teeva-btn-gold">
              Explore Our Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonials */}
      <section
        ref={(el) => { sectionRefs.current[3] = el as HTMLElement; }}
        className="py-24 bg-white"
      >
        <div className="container">
          <div className="text-center mb-16 fade-up">
            <p className="teeva-section-label mb-4">Client Outcomes</p>
            <h2
              className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              From the Field.
            </h2>
            <div className="teeva-gold-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="fade-up p-8"
                style={{
                  backgroundColor: "#F4F5F7",
                  borderLeft: "3px solid #D4AF37",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <svg className="w-8 h-8 mb-4 opacity-40" fill="#D4AF37" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#4A5568", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
                  "{t.quote}"
                </p>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}>
                  {t.role}
                </p>
                <p className="text-xs mt-1" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  Client testimonials are representative of typical outcomes. Names withheld at client request.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Dual Audience CTA */}
      <section
        ref={(el) => { sectionRefs.current[4] = el as HTMLElement; }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* B2B Side */}
        <div
          className="flex flex-col items-start justify-center p-12 lg:p-20 fade-up"
          style={{ backgroundColor: "#0F2439" }}
        >
          <p className="teeva-section-label mb-4">For Mid-Market Executives</p>
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to transform your IT and security?
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Secure your risk. Accelerate your revenue. Claim your edge. Book a complimentary Strategy Assessment with our team.
          </p>
          <Link href="/contact" className="teeva-btn-gold">
            Book a Strategy Assessment
          </Link>
        </div>

        {/* B2C Side */}
        <div
          className="flex flex-col items-start justify-center p-12 lg:p-20 fade-up"
          style={{ backgroundColor: "#FFFFFF", borderLeft: "1px solid #F4F5F7" }}
        >
          <p className="teeva-section-label mb-4" style={{ color: "#D4AF37" }}>For the Executive Community</p>
          <h3
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
          >
            Looking for career resources and wellness programs?
          </h3>
          <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
            Access our curated library of executive resources, downloadable templates, learning guides, and wellness programs.
          </p>
          <Link href="/resources" className="teeva-btn-outline-navy">
            Explore Executive Resources
          </Link>
        </div>
      </section>

      {/* Section 8 — Newsletter */}
      <section
        ref={(el) => { sectionRefs.current[5] = el as HTMLElement; }}
        className="py-20"
        style={{ backgroundColor: "#F4F5F7" }}
      >
        <div className="container max-w-2xl text-center">
          <div className="fade-up">
            <p className="teeva-section-label mb-4">Stay Informed</p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Stay Ahead of the Curve.
            </h2>
            <div className="teeva-gold-line" />
            <p className="text-base leading-relaxed mt-6 mb-8" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
              Join thousands of executives who receive our insights on AI, cybersecurity, compliance, and leadership.
            </p>
          </div>

          {newsletterSubmitted ? (
            <div className="fade-up p-6 text-center" style={{ backgroundColor: "#0F2439" }}>
              <p className="text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Thank you for subscribing. You will receive our next insight shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="fade-up flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your executive email address"
                required
                className="flex-1 px-5 py-3 text-sm border focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#0F2439",
                  fontFamily: "'Inter', sans-serif",
                  color: "#0F2439",
                  backgroundColor: "#FFFFFF",

                }}
              />
              <button type="submit" className="teeva-btn-gold flex-shrink-0">
                Subscribe
              </button>
            </form>
          )}
          <p className="text-xs mt-4" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
            No spam. Unsubscribe at any time.{" "}
            <Link href="/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
