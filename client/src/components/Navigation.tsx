/*
 * TEEVA Navigation — v5 Commercial Growth OS Architecture
 * Design: Architectural Precision | Navy #0F2439 | Gold #D4AF37
 *
 * Nav Order: Insights | Resources | Wellness | The Growth OS (dropdown) | Leadership
 * CTA: "Join the Community (Free)" → /join
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL = "/manus-storage/teeva-logo_18bfea62.png";

const osTiers = [
  { name: "Foundation OS", href: "/os/foundation", desc: "From $8,000/month" },
  { name: "Growth OS", href: "/os/growth", desc: "From $14,000/month" },
  { name: "Enterprise OS", href: "/os/enterprise", desc: "From $22,000/month" },
  { name: "View All Tiers", href: "/os", desc: "" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [osOpen, setOsOpen] = useState(false);
  const osRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOsOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (osRef.current && !osRef.current.contains(e.target as Node)) {
        setOsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15, 36, 57, 0.97)" : "rgba(15, 36, 57, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(212, 175, 55, 0.2)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={LOGO_URL} alt="TEEVA" className="h-10 w-auto" />
            <span
              className="text-white font-bold text-lg tracking-widest hidden sm:block"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
            >
              TEEVA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: "Insights", href: "/insights" },
              { name: "Resources", href: "/resources" },
              { name: "Wellness", href: "/wellness" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-150 relative group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-200"
                  style={{ backgroundColor: "#D4AF37" }}
                />
              </Link>
            ))}

            {/* The Growth OS Dropdown */}
            <div
              ref={osRef}
              className="relative"
              onMouseEnter={() => setOsOpen(true)}
              onMouseLeave={() => setOsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium transition-colors duration-150"
                style={{ fontFamily: "'Inter', sans-serif" }}
                onClick={() => setOsOpen(!osOpen)}
                aria-expanded={osOpen}
              >
                The Growth OS
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${osOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown hover bridge */}
              <div className="absolute top-full left-0 w-full h-3" />

              {osOpen && (
                <div
                  className="absolute top-[calc(100%+12px)] left-0 w-72 py-2 z-50"
                  style={{
                    backgroundColor: "#0F2439",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    animation: "fadeInDown 0.15s ease-out",
                  }}
                >
                  {osTiers.map((tier) => (
                    <Link
                      key={tier.href}
                      href={tier.href}
                      className="block px-5 py-3 hover:bg-white/5 transition-colors duration-100 group"
                    >
                      <span
                        className="block text-sm font-medium text-white group-hover:text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {tier.name}
                      </span>
                      {tier.desc && (
                        <span
                          className="block text-xs mt-0.5"
                          style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                        >
                          {tier.desc}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/leadership"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-150 relative group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Leadership
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-200"
                style={{ backgroundColor: "#D4AF37" }}
              />
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/join"
              className="hidden lg:inline-flex teeva-btn-gold text-xs"
            >
              Join the Community
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "600px" : "0",
          backgroundColor: "#0F2439",
          borderTop: mobileOpen ? "1px solid rgba(212, 175, 55, 0.2)" : "none",
        }}
      >
        <div className="container py-4 flex flex-col gap-1">
          {[
            { name: "Insights", href: "/insights" },
            { name: "Resources", href: "/resources" },
            { name: "Wellness", href: "/wellness" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-white/80 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.name}
            </Link>
          ))}

          {/* OS Tiers in mobile */}
          <div className="py-2">
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
            >
              The Growth OS
            </p>
            {osTiers.map((tier) => (
              <Link
                key={tier.href}
                href={tier.href}
                className="block py-2 pl-3 text-white/70 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tier.name}
                {tier.desc && <span className="ml-2 text-xs" style={{ color: "#D4AF37" }}>{tier.desc}</span>}
              </Link>
            ))}
          </div>

          {[
            { name: "Leadership", href: "/leadership" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-white/80 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.name}
            </Link>
          ))}

          <Link href="/join" className="teeva-btn-gold text-xs mt-3 text-center">
            Join the Community
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </header>
  );
}
