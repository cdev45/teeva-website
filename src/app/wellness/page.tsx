"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { wellnessArticles } from "@/data/articles";

const WELLNESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-wellness-WP6QQx5MddrcxFdf9U7KJp.webp";

export default function Wellness() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newsletterConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleGate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbyJAaNXIuWGmhSto8Pf79fHoYx-sgXulC40-c7DUwkC6EmMTcd6tfT9OvJPgxxT9dxMcA/exec";
      
      const now = new Date();
      const payload = {
        ...form,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
      };

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please email info@teeva.co directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 text-sm border focus:outline-none focus:ring-1 focus:ring-yellow-600 bg-white";
  const inputStyle = { borderColor: "#E2E8F0", fontFamily: "'Inter', sans-serif", color: "#0F2439" };

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

            {/* Book 1 — Available Now */}
            <div
              className="fade-up p-8"
              style={{ backgroundColor: "#F4F5F7", borderTop: "3px solid #D4AF37" }}
            >
              {/* Book Cover */}
              <div className="mb-6 flex justify-center">
                <img
                  src="/mock_illustration_02.png"
                  alt="Great Body, Healthy Life book cover"
                  className="h-48 w-auto object-contain"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))" }}
                />
              </div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3 px-2 py-1 inline-block"
                style={{ color: "#D4AF37", backgroundColor: "rgba(212,175,55,0.1)", fontFamily: "'Inter', sans-serif" }}
              >
                Available Now
              </p>
              <h3
                className="text-2xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Great Body, Healthy Life
              </h3>
              <p
                className="text-sm font-medium mb-4"
                style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
              >
                The Working Professional's Guide to Weight Loss, Stress Relief, and Better Habits <span style={{ color: "#D4AF37" }}>#GH1</span>
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                A fully guided health and fitness lifestyle program for busy working professionals. A strength training, nutrition, motivational, and self-improvement book all in one — covering weight loss, stress relief, fitness, sleep, nutrition, and more. Designed for beginner, intermediate, and advanced fitness levels. Compatible with any big box gym.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Lose weight and keep it off",
                  "Improve sleep quality and reduce stress",
                  "Enhance cognitive acuity and energy",
                  "Build muscle and an attractive physique",
                  "Includes Nutrition Program and Fitness Program with organized tables and sample illustrations",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: "#D4AF37", flexShrink: 0, marginTop: "2px" }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openGate("Great Body, Healthy Life #GH1")}
                className="teeva-btn-gold text-xs"
              >
                Access Program
              </button>
            </div>

            {/* Book 2 — Coming Soon */}
            <div
              className="fade-up p-8"
              style={{ backgroundColor: "#F4F5F7", borderTop: "3px solid #0F2439", transitionDelay: "80ms" }}
            >

              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3 px-2 py-1 inline-block"
                style={{ color: "rgba(255,255,255,0.8)", backgroundColor: "#0F2439", fontFamily: "'Inter', sans-serif" }}
              >
                Coming Soon
              </p>
              <h3
                className="text-2xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Great Body, Healthy Life
              </h3>
              <p
                className="text-sm font-medium mb-4"
                style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
              >
                The Elite Executive Wellness Program
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                Designed specifically for executives who demand peak physical and mental performance. Built for the home gym and engineered to build a strong body, a powerful mind, and an attractive physique — in support of your career and life goals. Currently in development.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Target audience: Executives who value strong bodies and minds for career success",
                  "Fitness level: Advanced",
                  "Equipment: Home gym",
                  "Optimized for peak cognitive and physical performance",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: "#4A5568", flexShrink: 0, marginTop: "2px" }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

            </div>

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
            {submitted ? (
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
                  onClick={() => { setGateOpen(false); setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", newsletterConsent: false }); }}
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
                  Enter your details to access this program.
                </h3>
                <p className="text-sm mb-6" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                  Access is gated behind a brief capture. You will receive a direct link to the program and a soft introduction to our advisory services.
                </p>
                <form onSubmit={handleGate} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>First Name *</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        required
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>Last Name *</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        required
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="newsletterConsent"
                      checked={form.newsletterConsent}
                      onChange={(e) => setForm({ ...form, newsletterConsent: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="newsletterConsent" className="text-xs leading-tight" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                      I acknowledge the <Link href="/privacy" className="underline">Privacy Policy</Link> and approve to receive the TEEVA newsletter.
                    </label>
                  </div>
                  <button type="submit" disabled={loading} className="teeva-btn-gold text-xs mt-2">
                    {loading ? "Submitting..." : "Access Program"}
                  </button>
                </form>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {wellnessArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wellness/articles/${article.slug}`}
                className="block group"
              >
                <div className="bg-white p-7 hover:shadow-md transition-shadow duration-200 group-hover:border-yellow-500" style={{ borderTop: "3px solid #D4AF37" }}>
                  <p className="teeva-section-label mb-2">{article.category}</p>
                  <h3
                    className="text-xl font-bold mb-3 group-hover:underline"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    {article.excerpt}
                  </p>
                  <span className="text-xs font-semibold" style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/wellness/articles" className="teeva-btn-outline-navy text-xs">
              View All Wellness Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
