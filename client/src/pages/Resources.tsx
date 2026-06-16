import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

const categories = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    name: "Executive Insights",
    description: "In-depth analysis and practical insights across technology strategy, AI, cybersecurity, compliance, and executive leadership. Teardowns, frameworks, and strategies written by practitioners, for practitioners.",
    cta: "Browse Insights",
    href: "/insights",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    name: "Downloadable Content",
    description: "A curated library of spreadsheet templates, document frameworks, and operational tools designed to help executives move faster and with greater precision.",
    cta: "Access Templates",
    href: "#downloads",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    name: "Learning Guides",
    description: "Comprehensive guides on compliance frameworks, financial modeling, IT operations, and software development. Content that is typically behind paywalls or difficult to aggregate.",
    cta: "Explore Guides",
    href: "#guides",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    name: "Newsletter",
    description: "Join thousands of executives who receive our insights on AI, cybersecurity, compliance, and leadership. Delivered when it matters, not on a schedule.",
    cta: "Subscribe",
    href: "#newsletter",
  },
];

export default function Resources() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [gateEmail, setGateEmail] = useState("");
  const [gateSubmitted, setGateSubmitted] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

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

  const handleGate = (e: React.FormEvent) => {
    e.preventDefault();
    if (gateEmail) {
      setGateSubmitted(true);
    }
  };

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
        <div className="hero-overlay" style={{ opacity: 0.55 }} aria-hidden="true" />
        <div className="relative z-10 container">
          <p className="teeva-section-label mb-4">Community</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            The Resource Library.
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Downloadable templates, learning guides, and professional resources designed to help you move faster. Everything in the library is free to community members.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="fade-up p-8 group"
                style={{
                  backgroundColor: "#F4F5F7",
                  borderTop: "3px solid transparent",
                  transitionDelay: `${i * 80}ms`,
                  transition: "border-top-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "#D4AF37";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div className="mb-5">{cat.icon}</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  {cat.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  {cat.description}
                </p>
                {cat.href.startsWith('/') && !cat.href.startsWith('/#') ? (
                  <Link
                    href={cat.href}
                    className="text-sm font-semibold transition-colors duration-150"
                    style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {cat.cta} →
                  </Link>
                ) : (
                  <button
                    onClick={() => setGateOpen(true)}
                    className="text-sm font-semibold transition-colors duration-150"
                    style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {cat.cta} →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gate Modal */}
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
                  Access Granted.
                </h3>
                <p className="text-sm" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  Thank you. A confirmation with your resource link has been sent to your email.
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
                <p className="teeva-section-label mb-3">Access Required</p>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                >
                  Enter your email to access this resource.
                </h3>
                <p className="text-sm mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  All downloadable resources are gated behind a brief email capture. You will receive a direct link and a soft introduction to our advisory services.
                </p>
                <form onSubmit={handleGate} className="flex flex-col gap-3">
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
                    Access Resource
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

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container max-w-2xl text-center">
          <p className="teeva-section-label mb-4">Stay Informed</p>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
          >
            Stay Ahead of the Curve.
          </h2>
          <div className="teeva-gold-line" />
          <p className="text-base leading-relaxed mt-6 mb-8" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
            Join thousands of executives who receive our insights on AI, cybersecurity, compliance, and leadership.
          </p>
          {submitted ? (
            <div className="p-6" style={{ backgroundColor: "#0F2439" }}>
              <p className="text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Thank you for subscribing. You will receive our next insight shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your executive email address"
                required
                className="flex-1 px-5 py-3 text-sm border focus:outline-none"
                style={{ borderColor: "#0F2439", fontFamily: "'Inter', sans-serif" }}
              />
              <button type="submit" className="teeva-btn-gold flex-shrink-0">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA to Advisory */}
      <section className="py-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container text-center">
          <p className="text-white/70 text-base mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready for done-for-you implementation?
          </p>
          <Link href="/os" className="teeva-btn-gold text-xs">
            Explore the Commercial Growth OS →
          </Link>
        </div>
      </section>
    </div>
  );
}
