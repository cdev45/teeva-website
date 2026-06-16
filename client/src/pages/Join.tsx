/*
 * TEEVA Join the Community — /join
 * Email capture form for community membership
 * Routes to Google Sheets via webhook (placeholder endpoint)
 */

import { useState } from "react";
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-main-etAuiCGcpMpRU7MvCHPuw4.webp";

const benefits = [
  "Access to the full Executive Insights article library — teardowns, frameworks, and strategies from practitioners who have operated at the board level.",
  "Downloadable templates, checklists, and frameworks from the TEEVA Resource Library — including the Commercial Gap Analysis Framework and the Zero-Trust Architecture Blueprint.",
  "Wellness programs designed for busy executives — sustainable fitness and nutrition strategies that elevate performance in and out of the boardroom.",
  "Weekly insights on technology strategy, AI, compliance, and leadership — delivered when they matter.",
  "Early access to new resources, frameworks, and community events.",
];

export default function Join() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", title: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with Google Sheets webhook endpoint
    // await fetch("YOUR_GOOGLE_SHEETS_WEBHOOK_ENDPOINT", { method: "POST", body: JSON.stringify(form) });
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

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
        <div className="hero-overlay" style={{ opacity: 0.6 }} aria-hidden="true" />
        <div className="relative z-10 container text-center">
          <p className="teeva-section-label mb-4">Community</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Join the Community.
          </h1>
          <div className="teeva-gold-line" />
          <p
            className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mt-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Free access to the premier resource library for elite technology executives — frameworks, assets, and strategies you can deploy immediately.
          </p>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

            {/* Benefits */}
            <div>
              <p className="teeva-section-label mb-4">What You Get</p>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
              >
                Everything in the Community is Free.
              </h2>
              <div className="teeva-gold-line-left" />
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                  >
                    <span style={{ color: "#D4AF37", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div
                className="mt-10 p-6"
                style={{ backgroundColor: "#F4F5F7", borderLeft: "3px solid #D4AF37" }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                >
                  When you are ready to move from playbooks to implementation, the{" "}
                  <Link href="/os" className="font-semibold" style={{ color: "#0F2439" }}>
                    TEEVA Commercial Growth OS
                  </Link>{" "}
                  is the done-for-you system that guarantees the outcomes.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div
                  className="p-10 text-center"
                  style={{ backgroundColor: "#0F2439", borderTop: "3px solid #D4AF37" }}
                >
                  <div
                    className="text-4xl mb-4"
                    style={{ color: "#D4AF37" }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Welcome to the Community.
                  </h3>
                  <p
                    className="text-white/70 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    You now have access to the full resource library. Check your inbox for your welcome email with direct links to our most popular frameworks.
                  </p>
                  <Link href="/resources" className="teeva-btn-gold">
                    Access the Resource Library
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div
                    className="p-8"
                    style={{ backgroundColor: "#F4F5F7", borderTop: "3px solid #D4AF37" }}
                  >
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                    >
                      Create Your Free Account
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wide mb-1"
                          style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm border focus:outline-none focus:border-gray-400"
                          style={{ borderColor: "#E2E8F0", fontFamily: "'Inter', sans-serif", backgroundColor: "#FFFFFF" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wide mb-1"
                          style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm border focus:outline-none focus:border-gray-400"
                          style={{ borderColor: "#E2E8F0", fontFamily: "'Inter', sans-serif", backgroundColor: "#FFFFFF" }}
                        />
                      </div>
                    </div>

                    {[
                      { name: "email", label: "Email Address *", type: "email", required: true },
                      { name: "company", label: "Company Name *", type: "text", required: true },
                      { name: "title", label: "Job Title", type: "text", required: false },
                    ].map((field) => (
                      <div key={field.name} className="mb-4">
                        <label
                          className="block text-xs font-semibold uppercase tracking-wide mb-1"
                          style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-3 text-sm border focus:outline-none focus:border-gray-400"
                          style={{ borderColor: "#E2E8F0", fontFamily: "'Inter', sans-serif", backgroundColor: "#FFFFFF" }}
                        />
                      </div>
                    ))}

                    <button
                      type="submit"
                      disabled={loading}
                      className="teeva-btn-gold w-full mt-2"
                    >
                      {loading ? "Joining..." : "Join the Community"}
                    </button>

                    <p
                      className="text-xs mt-4 text-center"
                      style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                    >
                      By joining, you agree to our{" "}
                      <Link href="/privacy" className="underline">Privacy Policy</Link>.
                      {" "}No spam. Unsubscribe at any time.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
