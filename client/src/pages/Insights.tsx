/*
 * TEEVA Executive Insights — /insights
 * Premium publication design (HBR / First Round Review aesthetic)
 * Replaces the old /resources/articles page
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { vocationalArticles } from "@/data/articles";

const categories = ["All", "AI", "Cybersecurity", "Compliance", "Leadership", "Technology"];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "All"
    ? vocationalArticles
    : vocationalArticles.filter((a) => a.category === activeCategory);

  const featured = vocationalArticles[0];
  const rest = filtered.filter((a) => a.slug !== featured.slug);

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
        className="pt-40 pb-16 bg-white"
        style={{ borderBottom: "1px solid #F4F5F7" }}
      >
        <div className="container">
          <p className="teeva-section-label mb-4">Community</p>
          <h1
            className="font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Executive Insights.
          </h1>
          <div className="teeva-gold-line-left" />
          <p
            className="text-base leading-relaxed mt-6 max-w-xl"
            style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
          >
            Teardowns, frameworks, and strategies for elite technology leaders.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
          >
            Featured Article
          </p>
          <Link href={`/insights/${featured.slug}`} className="block group">
            <div
              className="p-10 group-hover:shadow-xl transition-all duration-200"
              style={{ backgroundColor: "#0F2439", borderLeft: "4px solid #D4AF37" }}
            >
              <span
                className="inline-block text-xs font-medium uppercase tracking-widest mb-4 px-2 py-1"
                style={{ color: "#D4AF37", backgroundColor: "rgba(212,175,55,0.15)", fontFamily: "'Inter', sans-serif" }}
              >
                {featured.category}
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug group-hover:text-white/90 transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-white/70 text-base leading-relaxed max-w-3xl mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {featured.excerpt}
              </p>
              <span
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
              >
                Read Article →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter + Article Grid */}
      <section ref={sectionRef} className="py-12" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container">

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-10 fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-150"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: activeCategory === cat ? "#0F2439" : "#FFFFFF",
                  color: activeCategory === cat ? "#D4AF37" : "#4A5568",
                  border: `1px solid ${activeCategory === cat ? "#0F2439" : "#E2E8F0"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="block group fade-up"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="h-full bg-white p-7 group-hover:shadow-lg transition-all duration-200"
                  style={{
                    borderTop: "3px solid transparent",
                    transition: "border-top-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#D4AF37"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent"; }}
                >
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
                    className="text-sm leading-relaxed line-clamp-3 mb-4"
                    style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                  >
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* OS CTA */}
      <section className="py-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container text-center">
          <p className="teeva-section-label mb-4">The Growth OS</p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Want us to implement these frameworks for you?
          </h2>
          <div className="teeva-gold-line" />
          <p
            className="text-white/70 text-base mt-6 mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Mid-market leader? The TEEVA Commercial Growth OS is the done-for-you implementation of everything you read in these articles — engineered to deliver measurable commercial outcomes for companies with $20M–$150M in revenue.
          </p>
          <Link href="/os" className="teeva-btn-gold">
            Explore the Commercial Growth OS
          </Link>
        </div>
      </section>

    </div>
  );
}
