import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const WELLNESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-wellness-WP6QQx5MddrcxFdf9U7KJp.webp";

const articles = [
  { title: "The Executive's Guide to High-Performance Fitness", category: "Fitness", excerpt: "Building a sustainable fitness routine that complements the demands of executive leadership." },
  { title: "Nutrition Strategies for Cognitive Performance", category: "Nutrition", excerpt: "How elite executives optimize their diet for sustained mental clarity and decision-making capacity." },
  { title: "Managing Stress at the Executive Level", category: "Mental Well-being", excerpt: "Evidence-based strategies for managing the unique stressors of C-suite leadership without sacrificing performance." },
  { title: "Sleep Architecture for High Performers", category: "Recovery", excerpt: "Why sleep quality — not just duration — is the most underutilized performance lever available to executives." },
  { title: "Building Resilience Under Pressure", category: "Mental Well-being", excerpt: "The psychological frameworks that allow elite performers to maintain clarity and composure in high-stakes environments." },
  { title: "The Power of Structured Recovery", category: "Fitness", excerpt: "How intentional recovery protocols prevent burnout and sustain peak performance over a multi-decade career." },
];

export default function Wellness() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [gateEmail, setGateEmail] = useState("");
  const [gateSubmitted, setGateSubmitted] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

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

  const openGate = (program: string) => {
    setSelectedProgram(program);
    setGateOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${WELLNESS_IMAGE})` }}
          aria-hidden="true"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#0F2439", opacity: 0.55 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <p className="teeva-section-label mb-4">Community</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Wellness.
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Powerful Body = Powerful Mind. Adaptable Program = Achievable Results.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <p className="teeva-section-label mb-4">Programs</p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Built for Executive Performance.
            </h2>
            <div className="teeva-gold-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Men's Program",
                description: "A comprehensive fitness and nutrition program designed for male executives. Built around the realities of a demanding schedule, frequent travel, and the need for sustainable, long-term results. The program combines strength training, cardiovascular conditioning, and evidence-based nutrition strategies to build a high-performance physique without sacrificing career output.",
                features: ["Strength & Conditioning Protocol", "Executive Nutrition Framework", "Travel-Adaptive Workouts", "Recovery & Sleep Optimization"],
              },
              {
                name: "Women's Program",
                description: "A tailored wellness program for female executives, designed to address the unique physiological and professional demands of women in leadership. The program integrates strength training, hormonal health optimization, and stress management strategies to build resilience, confidence, and sustained energy.",
                features: ["Hormonal Health Optimization", "Strength & Toning Protocol", "Stress Management Framework", "Nutrition for Cognitive Performance"],
              },
            ].map((program, i) => (
              <div
                key={program.name}
                className="fade-up p-8"
                style={{
                  backgroundColor: "#F4F5F7",
                  borderTop: "3px solid #D4AF37",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  {program.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  {program.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ color: "#D4AF37" }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openGate(program.name)}
                  className="teeva-btn-gold text-xs"
                >
                  Access Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gate Modal */}
      {gateOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15, 36, 57, 0.85)" }}
          onClick={() => setGateOpen(false)}
        >
          <div
            className="bg-white p-10 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {gateSubmitted ? (
              <div className="text-center">
                <div className="teeva-gold-line" />
                <h3
                  className="text-2xl font-bold mt-4 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  Program Access Granted.
                </h3>
                <p className="text-sm" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  Thank you. Your {selectedProgram} access link has been sent to your email.
                </p>
                <button
                  onClick={() => { setGateOpen(false); setGateSubmitted(false); setGateEmail(""); }}
                  className="teeva-btn-gold mt-6 text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="teeva-section-label mb-3">{selectedProgram}</p>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  Enter your email to access this program.
                </h3>
                <form
                  onSubmit={(e) => { e.preventDefault(); if (gateEmail) setGateSubmitted(true); }}
                  className="flex flex-col gap-3 mt-6"
                >
                  <input
                    type="email"
                    value={gateEmail}
                    onChange={(e) => setGateEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="px-4 py-3 text-sm border focus:outline-none"
                    style={{ borderColor: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                  />
                  <button type="submit" className="teeva-btn-gold text-xs">
                    Access Program
                  </button>
                </form>
                <p className="text-xs mt-3" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="underline">Privacy Policy</Link>.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Articles */}
      <section className="py-20" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="teeva-section-label mb-4">Insights</p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
            >
              Wellness Articles.
            </h2>
            <div className="teeva-gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <div
                key={article.title}
                className="bg-white p-6 hover:shadow-md transition-shadow duration-200"
              >
                <p className="teeva-section-label mb-2">{article.category}</p>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
