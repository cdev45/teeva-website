import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { vocationalArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";

const categories = ["All", "AI", "Cybersecurity", "Compliance", "Leadership", "Technology"];

export default function VocationalArticles() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filtered = activeCategory === "All"
    ? vocationalArticles
    : vocationalArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" style={{ opacity: 0.55 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-medium mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            ← Executive Resources
          </Link>
          <p className="teeva-section-label mb-4">Vocational Insights</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Articles.
          </h1>
          <div className="teeva-gold-line-left" />
          <p
            className="text-white/80 text-lg leading-relaxed max-w-2xl mt-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Practitioner-level insights on AI, cybersecurity, compliance, and leadership — written for executives who need to act on what they read.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div style={{ backgroundColor: "#1A365D" }}>
        <div className="container py-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-150"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.1em",
                  backgroundColor: activeCategory === cat ? "#D4AF37" : "transparent",
                  color: activeCategory === cat ? "#0F2439" : "rgba(255,255,255,0.6)",
                  border: activeCategory === cat ? "1px solid #D4AF37" : "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {cat}
              </button>
            ))}
            <span
              className="ml-auto text-xs"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
            >
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section ref={sectionRef} className="py-16" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <div key={article.slug} className="fade-up" style={{ transitionDelay: `${i * 60}ms` }}>
                <ArticleCard article={article} basePath="/resources/articles" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory CTA */}
      <section className="py-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container text-center">
          <p className="text-white/70 text-base mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready to put these insights into action?
          </p>
          <Link href="/contact" className="teeva-btn-gold text-xs">
            Book a Strategy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
