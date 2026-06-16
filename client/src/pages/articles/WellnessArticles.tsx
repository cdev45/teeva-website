import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { wellnessArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-wellness-WP6QQx5MddrcxFdf9U7KJp.webp";

export default function WellnessArticles() {
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
        className="relative pt-40 pb-20 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#0F2439", opacity: 0.6 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <Link
            href="/wellness"
            className="inline-flex items-center gap-2 text-xs font-medium mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            ← Wellness
          </Link>
          <p className="teeva-section-label mb-4">Wellness Insights</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Wellness Articles.
          </h1>
          <div className="teeva-gold-line-left" />
          <p
            className="text-white/80 text-lg leading-relaxed max-w-2xl mt-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Evidence-based guidance on nutrition, fitness, and performance — designed for executives who demand results without sacrificing their careers.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={sectionRef} className="py-16" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {wellnessArticles.map((article, i) => (
              <div key={article.slug} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <ArticleCard article={article} basePath="/wellness/articles" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs CTA */}
      <section className="py-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container text-center">
          <p className="text-white/70 text-base mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready to put these principles into practice?
          </p>
          <Link href="/wellness" className="teeva-btn-gold text-xs">
            Explore Wellness Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
