/*
 * TEEVA Footer — v5 Commercial Growth OS Architecture
 * Background: Executive Navy #0F2439 | Gold accents
 */

import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0F2439" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src="/manus-storage/teeva-logo_18bfea62.png" alt="TEEVA" className="h-10 w-auto" />
              <span
                className="text-white font-bold text-lg tracking-widest"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
              >
                TEEVA
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              The premier community for elite technology executives — and the home of the TEEVA Commercial Growth OS.
            </p>
            <div className="space-y-1">
              <a
                href="mailto:support@teeva.co"
                className="block text-sm hover:text-white transition-colors"
                style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
              >
                support@teeva.co
              </a>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
                St. Augustine, FL
              </p>
            </div>
          </div>

          {/* Column 2 — Community */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
            >
              Community
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Executive Insights", href: "/insights" },
                { name: "Resource Library", href: "/resources" },
                { name: "Wellness Programs", href: "/wellness" },
                { name: "Join the Community", href: "/join" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — The Growth OS */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
            >
              The Growth OS
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Overview", href: "/os" },
                { name: "Foundation OS", href: "/os/foundation" },
                { name: "Growth OS", href: "/os/growth" },
                { name: "Enterprise OS", href: "/os/enterprise" },
                { name: "Sustain Tier", href: "/os/sustain" },
                { name: "Book a Gap Analysis", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Leadership", href: "/leadership" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/in/cdenoia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-150 hover:text-white flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Arcway Industries LLC dba The Elite Executive Advantage (TEEVA). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Cookie Policy", href: "/cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-150 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
