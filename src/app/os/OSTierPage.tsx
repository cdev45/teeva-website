"use client";

/*
 * TEEVA OS Tier Page — Reusable component for Foundation, Growth, Enterprise OS
 * Design: Architectural Precision | Dark hero, white body
 */

import { useEffect, useRef } from "react";
import Link from "next/link";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

interface OSTierPageProps {
  tier: "Foundation OS" | "Growth OS" | "Enterprise OS" | "The Sustain Tier";
  tagline: string;
  anchor: string;
  icp: string;
  icpDetails: string[];
  deliverables: { category: string; items: string[] }[];
  disclaimer?: string;
}

export default function OSTierPage({
  tier,
  tagline,
  anchor,
  icp,
  icpDetails,
  deliverables,
  disclaimer,
}: OSTierPageProps) {
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
        className="relative pt-40 pb-24 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" style={{ opacity: 0.6 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <Link
            href="/os"
            className="inline-flex items-center gap-2 text-xs mb-6 transition-colors"
            style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
          >
            ← The Commercial Growth OS
          </Link>
          <p className="teeva-section-label mb-4">The Growth OS</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {tier}
          </h1>
          <div className="teeva-gold-line-left" />
          <p
            className="text-white/80 text-lg leading-relaxed max-w-2xl mt-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {tagline}
          </p>
        </div>
      </section>

      <div ref={sectionRef}>

        {/* Section 2 — Who It's For */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="fade-up">
              <p className="teeva-section-label mb-4">Who It's For</p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                {icp}
              </h2>
              <div className="teeva-gold-line-left" />
              <ul className="mt-6 space-y-3">
                {icpDetails.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-base leading-relaxed"
                    style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                  >
                    <span style={{ color: "#D4AF37", flexShrink: 0, marginTop: "2px" }}>→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 — What It Delivers */}
        <section className="py-16" style={{ backgroundColor: "#F4F5F7" }}>
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <p className="teeva-section-label mb-4">What It Delivers</p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Specific Outcomes & Implementations.
              </h2>
              <div className="teeva-gold-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {deliverables.map((group, i) => (
                <div
                  key={group.category}
                  className="fade-up bg-white p-7"
                  style={{ borderLeft: "3px solid #D4AF37", transitionDelay: `${i * 60}ms` }}
                >
                  <h3
                    className="text-lg font-bold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                  >
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                      >
                        <span style={{ color: "#D4AF37", flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Pricing */}
        <section className="py-16 bg-white">
          <div className="container max-w-2xl">
            <div className="fade-up text-center">
              <p className="teeva-section-label mb-4">The Investment</p>
              <div
                className="p-10"
                style={{ backgroundColor: "#0F2439", borderTop: "3px solid #D4AF37" }}
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#D4AF37", fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {anchor}
                </p>
                <p
                  className="text-white/70 text-sm leading-relaxed mt-4 mb-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {disclaimer || "Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. All OS implementations require a 12-month commitment."}
                </p>
                <Link href="/contact" className="teeva-btn-gold">
                  Book a Commercial Gap Analysis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ backgroundColor: "#F4F5F7" }}>
          <div className="container text-center fade-up">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Not sure which tier is right for you?
            </h2>
            <p
              className="text-base leading-relaxed mb-6 max-w-lg mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
            >
              Book a complimentary Commercial Gap Analysis. We will assess your current commercial position and recommend the right OS tier and implementation sequence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="teeva-btn-gold">
                Book a Commercial Gap Analysis
              </Link>
              <Link href="/os" className="teeva-btn-outline-navy text-xs">
                View All Tiers
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
