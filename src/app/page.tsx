"use client";

/*
 * TEEVA Homepage — v5 Community-First + Commercial Growth OS
 * Design: Architectural Precision | Navy #0F2439 | Gold #D4AF37
 *
 * Section Order (per v5 spec):
 * 1. Hero — "THE EXECUTIVE EDGE IN BUSINESS AND LIFE."
 * 2. Featured Insights (The Hook) — 3 recent articles
 * 3. The Resource Library — 3 resource cards
 * 4. The Commercial Growth OS (The Backend Product)
 * 5. Wellness Integration — split screen
 * 6. Newsletter Sign-Up
 */

import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { vocationalArticles } from "@/data/articles";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-main-etAuiCGcpMpRU7MvCHPuw4.webp";
const METHODOLOGY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";
const WELLNESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-wellness-WP6QQx5MddrcxFdf9U7KJp.webp";

const featuredArticles = vocationalArticles.slice(0, 3);

const resources = [
  {
    title: "AI Prompts, Agents & Automation Teams",
    category: "AI",
    desc: "Curated AI prompt libraries, individual agent configurations, and pre-built AI crew templates for automating executive workflows — plus a comprehensive AI tools database.",
  },
  {
    title: "CISO 100-Day Onboarding Plan & Checklist",
    category: "Information Security",
    desc: "A practitioner-built onboarding framework for incoming CISOs — covering the first 100 days from assessment through program design, stakeholder alignment, and quick wins.",
  },
  {
    title: "Job Market Templates & Interview Guides",
    category: "Career",
    desc: "Interview preparation templates, brand designer frameworks, and job market strategy guides built for senior technology executives navigating competitive leadership roles.",
  },
];

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
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
            el.querySelectorAll(".fade-up").forEach((t, i) => {
              setTimeout(() => t.classList.add("visible"), i * 70);
            });
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setNewsletterSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* ── Section 1: Hero ── */}
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
            The Elite Executive Advantage
          </p>
          <h1
            className="text-white font-bold leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "90px",
              letterSpacing: "0.06em",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}
          >
            YOUR EDGE
          </h1>

          <div
            className="teeva-gold-line"
            style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}
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
            Join the premier community for elite technology executives. Access exclusive frameworks, teardowns, and strategies to push your professional and personal performance to the highest level.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s",
            }}
          >
            <Link href="/join" className="teeva-btn-gold">
              Join the Community (Free)
            </Link>
            <Link href="/os" className="teeva-btn-outline-white">
              Explore the Growth OS
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: Featured Insights ── */}
      <section
        ref={(el) => { sectionRefs.current[0] = el as HTMLElement; }}
        className="py-20 bg-white"
      >
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <p className="teeva-section-label mb-4">Executive Insights</p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Practitioner Insights
            </h2>
            <div className="teeva-gold-line" />
            <p
              className="text-base leading-relaxed mt-6 max-w-xl mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
            >
              Frameworks, strategies, and practitioner insights for technology executives — written by operators who have worked at the board level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="block group fade-up"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className="h-full bg-white group-hover:shadow-lg transition-all duration-200"
                  style={{
                    border: "1px solid #F4F5F7",
                    borderTop: "3px solid transparent",
                    transition: "border-top-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#D4AF37"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent"; }}
                >
                  <div className="p-7">
                    <span
                      className="inline-block text-xs font-medium uppercase tracking-widest mb-3 px-2 py-1"
                      style={{ color: "#D4AF37", backgroundColor: "rgba(212,175,55,0.08)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {article.category}
                    </span>
                    <h3
                      className="text-xl font-bold mb-3 leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed line-clamp-3"
                      style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                    >
                      {article.excerpt}
                    </p>
                    <span
                      className="inline-block mt-4 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                    >
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 fade-up">
            <Link href="/insights" className="teeva-btn-outline-navy text-xs">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Resource Library ── */}
      <section
        ref={(el) => { sectionRefs.current[1] = el as HTMLElement; }}
        className="py-20"
        style={{ backgroundColor: "#F4F5F7" }}
      >
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <p className="teeva-section-label mb-4">Resource Library</p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Expert Guides, Templates & Tools
            </h2>
            <div className="teeva-gold-line" />
            <p
              className="text-base leading-relaxed mt-6 max-w-xl mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
            >
              Expert guides, job market templates, AI automation tools, and practitioner resources across AI, Information Security, Finance, Sales, Marketing, and more — curated for elite technology executives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource, i) => (
              <div
                key={resource.title}
                className="fade-up bg-white p-7"
                style={{ borderTop: "3px solid #D4AF37", transitionDelay: `${i * 70}ms` }}
              >
                <span
                  className="inline-block text-xs font-medium uppercase tracking-widest mb-3 px-2 py-1"
                  style={{ color: "#D4AF37", backgroundColor: "rgba(212,175,55,0.08)", fontFamily: "'Inter', sans-serif" }}
                >
                  {resource.category}
                </span>
                <h3
                  className="text-xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  {resource.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                >
                  {resource.desc}
                </p>
                <Link
                  href="/resources"
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                >
                  Access Resource →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-up">
            <Link href="/resources" className="teeva-btn-outline-navy text-xs">
              Access the Full Library
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: The Commercial Growth OS ── */}
      <section
        ref={(el) => { sectionRefs.current[2] = el as HTMLElement; }}
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${METHODOLOGY_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 container max-w-4xl">
          <div className="fade-up">
            <p className="teeva-section-label mb-4">The Product</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready for Done-For-You Implementation?
            </h2>
            <div className="teeva-gold-line-left" />
          </div>
          <div className="fade-up mt-8">
            <p
              className="text-white/80 text-base leading-relaxed max-w-2xl mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The community provides the playbooks. The <strong className="text-white">TEEVA Commercial Growth OS</strong> is the proprietary system we install for mid-market companies ($20M–$150M) to guarantee the commercial outcomes. It is a technology-enabled business system delivered via a standardized 4-Phase Implementation Framework — engineered to expand revenue, unlock markets, reduce OpEx, and enhance enterprise valuation.
            </p>
            <p
              className="text-white/60 text-sm leading-relaxed max-w-2xl mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Three tiers. One methodology. All implementations require a 12-month commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/os" className="teeva-btn-gold">
                Explore the Growth OS
              </Link>
              <Link href="/contact" className="teeva-btn-outline-white">
                Book a Commercial Gap Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Wellness Integration ── */}
      <section
        ref={(el) => { sectionRefs.current[3] = el as HTMLElement; }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* Image side */}
        <div
          className="relative h-64 md:h-auto min-h-64"
          style={{
            backgroundImage: `url(${WELLNESS_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "#0F2439", opacity: 0.4 }} />
        </div>

        {/* Text side */}
        <div
          className="flex flex-col justify-center p-12 lg:p-16 fade-up"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <p className="teeva-section-label mb-4">Wellness Programs</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
          >
            Powerful Body = Powerful Mind.
          </h2>
          <div className="teeva-gold-line-left" />
          <p
            className="text-base leading-relaxed mt-4 mb-8 max-w-sm"
            style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
          >
            Adaptable programs designed for busy executives — sustainable fitness, evidence-based nutrition, and mental resilience strategies that elevate performance in and out of the boardroom. Available to all community members.
          </p>
          <Link href="/wellness" className="teeva-btn-outline-navy self-start">
            Explore Wellness Programs
          </Link>
        </div>
      </section>

      {/* ── Section 6: Newsletter Sign-Up ── */}
      <section
        ref={(el) => { sectionRefs.current[4] = el as HTMLElement; }}
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
            <p
              className="text-base leading-relaxed mt-6 mb-8"
              style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
            >
              Join thousands of elite executives who receive our weekly insights on technology strategy, compliance, and leadership. Delivered when it matters.
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
                className="flex-1 px-5 py-3 text-sm border focus:outline-none"
                style={{ borderColor: "#0F2439", fontFamily: "'Inter', sans-serif", color: "#0F2439", backgroundColor: "#FFFFFF" }}
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
