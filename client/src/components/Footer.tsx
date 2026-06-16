/*
 * TEEVA Footer — Architectural Precision Design System
 * Navy background, white/gold text, full navigation, legal links
 */

import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0F2439" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/teeva-logo_18bfea62.png"
                alt="TEEVA"
                className="h-10 w-auto"
              />
              <span
                className="text-white font-bold tracking-widest text-lg"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.25em" }}
              >
                TEEVA
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              The only mid-market advisory firm delivering integrated Fractional CIO and CISO leadership.
            </p>
            <div className="mt-6">
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <a
                  href="mailto:support@teeva.co"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D4AF37" }}
                >
                  support@teeva.co
                </a>
              </p>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                St. Augustine, FL
              </p>
            </div>
          </div>

          {/* Advisory Services */}
          <div>
            <h4
              className="teeva-section-label mb-5"
              style={{ color: "#D4AF37" }}
            >
              Advisory Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Fractional CIO (vCIO)", href: "/advisory/fractional-cio" },
                { name: "Cybersecurity Advisory (vCISO)", href: "/advisory/cybersecurity" },
                { name: "AI Transformation", href: "/advisory/ai-transformation" },
                { name: "Compliance Advisory", href: "/advisory/compliance" },
                { name: "Go-to-Market Advisory", href: "/advisory/go-to-market" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="teeva-section-label mb-5" style={{ color: "#D4AF37" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Our Methodology", href: "/methodology" },
                { name: "Leadership", href: "/leadership" },
                { name: "Executive Resources", href: "/resources" },
                { name: "Wellness", href: "/wellness" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="teeva-section-label mb-5" style={{ color: "#D4AF37" }}>
              Get Started
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Ready to transform your IT and security into a primary revenue driver?
            </p>
            <Link href="/contact" className="teeva-btn-gold text-xs">
              Book a Strategy Assessment
            </Link>
            <div className="mt-6">
              <p className="teeva-section-label mb-3">Follow</p>
              <a
                href="https://www.linkedin.com/in/cdenoia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {currentYear} The Elite Executive Advantage (TEEVA). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Cookie Policy", href: "/cookies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
