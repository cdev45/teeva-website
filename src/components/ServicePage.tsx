import Link from "next/link";
import { useEffect, useRef } from "react";

interface ServicePageProps {
  label: string;
  headline: string;
  subheadline: string;
  problem: string;
  solution: string;
  deliverables: string[];
  retainerCopy: string;
  anchor: string;
  heroImage: string;
}

export default function ServicePage({
  label,
  headline,
  subheadline,
  problem,
  solution,
  deliverables,
  retainerCopy,
  anchor,
  heroImage,
}: ServicePageProps) {
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
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="relative z-10 container">
          <p className="teeva-section-label mb-4">{label}</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {headline}
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            {subheadline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* The Problem */}
              <div className="fade-up">
                <p className="teeva-section-label mb-3">The Challenge</p>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  The Problem We Solve.
                </h2>
                <div className="teeva-gold-line-left" />
                <p className="text-base leading-relaxed mt-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  {problem}
                </p>
              </div>

              {/* The Solution */}
              <div className="fade-up">
                <p className="teeva-section-label mb-3">Our Approach</p>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  The TEEVA Solution.
                </h2>
                <div className="teeva-gold-line-left" />
                <p className="text-base leading-relaxed mt-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  {solution}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="fade-up">
                <p className="teeva-section-label mb-3">What You Receive</p>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  Key Deliverables.
                </h2>
                <div className="teeva-gold-line-left" />
                <ul className="mt-6 space-y-3">
                  {deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="mt-1 flex-shrink-0 w-4 h-4" style={{ color: "#D4AF37" }}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="fade-up sticky top-28 p-8"
                style={{ backgroundColor: "#0F2439" }}
              >
                <p className="teeva-section-label mb-4">Engagement Model</p>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4AF37" }}
                >
                  {anchor}
                </div>
                <p className="text-xs mb-6 leading-relaxed" style={{ color: "#FFFFFF99", fontFamily: "'Inter', sans-serif" }}>
                  {retainerCopy}
                </p>
                <Link href="/contact" className="teeva-btn-gold w-full text-center text-xs block">
                  Book a Strategy Assessment
                </Link>
                <p className="text-xs mt-4 text-center" style={{ color: "#FFFFFF40", fontFamily: "'Inter', sans-serif" }}>
                  No hourly billing. No break/fix work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
          >
            Expand Revenue. Unlock Markets. Build Value.
          </h2>
          <div className="teeva-gold-line" />
          <p className="text-base mt-6 mb-8 max-w-xl mx-auto" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
            Book a complimentary Strategy Assessment to discuss how TEEVA can expand your top-line revenue, unlock new markets, reduce OpEx, and enhance your firm's EBITDA and enterprise valuation.
          </p>
          <Link href="/contact" className="teeva-btn-gold">
            Book a Strategy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
