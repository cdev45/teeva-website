import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BOOKING_LINK = "YOUR_GOOGLE_CALENDAR_BOOKING_LINK";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "", jobTitle: "",
    revenue: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 text-sm border focus:outline-none focus:ring-1 focus:ring-yellow-600 bg-white";
  const inputStyle = { borderColor: "#E2E8F0", fontFamily: "'Inter', sans-serif", color: "#0F2439" };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 flex items-center"
        style={{ backgroundColor: "#0F2439" }}
      >
        <div className="relative z-10 container">
          <p className="teeva-section-label mb-4">Get in Touch</p>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Contact TEEVA.
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Book a complimentary Strategy Assessment or send us a message. We respond to all qualified inquiries within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="fade-up p-10 text-center" style={{ backgroundColor: "#F4F5F7" }}>
                  <div className="teeva-gold-line" />
                  <h3
                    className="text-3xl font-bold mt-4 mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
                  >
                    Message Received.
                  </h3>
                  <p className="text-base" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                    Thank you for reaching out. A member of our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="fade-up">
                    <p className="teeva-section-label mb-6">Strategy Assessment Request</p>
                  </div>

                  <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        Job Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.jobTitle}
                        onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        Company Revenue Range *
                      </label>
                      <select
                        required
                        value={form.revenue}
                        onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      >
                        <option value="">Select range</option>
                        <option value="under-10m">Under $10M</option>
                        <option value="10m-50m">$10M – $50M</option>
                        <option value="50m-250m">$50M – $250M</option>
                        <option value="250m-1b">$250M – $1B</option>
                        <option value="over-1b">Over $1B</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                        Service of Interest *
                      </label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      >
                        <option value="">Select service</option>
                        <option value="fractional-cio">Fractional CIO (vCIO)</option>
                        <option value="cybersecurity">Cybersecurity Advisory (vCISO)</option>
                        <option value="ai-transformation">AI Transformation</option>
                        <option value="compliance">Compliance Advisory</option>
                        <option value="go-to-market">Go-to-Market Advisory</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="fade-up">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your current challenge and what you are hoping to achieve."
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div className="fade-up">
                    <button type="submit" className="teeva-btn-gold">
                      Submit Request
                    </button>
                    <p className="text-xs mt-3" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="underline">Privacy Policy</Link>.
                      Your information is encrypted in transit and never sold.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="fade-up space-y-8">
                {/* Book Direct */}
                <div className="p-8" style={{ backgroundColor: "#0F2439" }}>
                  <p className="teeva-section-label mb-3">Prefer to Book Direct?</p>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Schedule a Strategy Assessment
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Book a 30-minute complimentary Strategy Assessment directly on our calendar.
                  </p>
                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teeva-btn-gold text-xs block text-center"
                  >
                    Book on Calendar
                  </a>
                </div>

                {/* Contact Info */}
                <div className="p-8" style={{ backgroundColor: "#F4F5F7" }}>
                  <p className="teeva-section-label mb-4">Direct Contact</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>Email</p>
                      <a
                        href="mailto:support@teeva.co"
                        className="text-sm font-medium hover:underline"
                        style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                      >
                        support@teeva.co
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>Location</p>
                      <p className="text-sm" style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}>
                        St. Augustine, FL
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/cdenoia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline"
                        style={{ color: "#0F2439", fontFamily: "'Inter', sans-serif" }}
                      >
                        linkedin.com/in/cdenoia
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
