/*
 * TEEVA Navigation — Architectural Precision Design System
 * Sticky header, gold CTA, Advisory Services dropdown, mobile hamburger
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const services = [
  { name: "Fractional CIO (vCIO)", href: "/advisory/fractional-cio" },
  { name: "Cybersecurity Advisory (vCISO)", href: "/advisory/cybersecurity" },
  { name: "AI Transformation", href: "/advisory/ai-transformation" },
  { name: "Compliance Advisory", href: "/advisory/compliance" },
  { name: "Go-to-Market Advisory", href: "/advisory/go-to-market" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

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
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/manus-storage/teeva-logo_18bfea62.png"
              alt="TEEVA"
              className="h-10 w-auto"
            />
            <span
              className="text-white font-bold tracking-widest text-lg hidden sm:block"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.25em" }}
            >
              TEEVA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Advisory Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ paddingBottom: dropdownOpen ? "12px" : "0" }}
            >
              <button
                className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors duration-150"
                style={{ fontFamily: "'Inter', sans-serif" }}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Advisory Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className="absolute top-full left-0 w-72 py-2 rounded-sm shadow-2xl transition-all duration-150"
                style={{
                  backgroundColor: "#0F2439",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  opacity: dropdownOpen ? 1 : 0,
                  transform: dropdownOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
                  pointerEvents: dropdownOpen ? "auto" : "none",
                }}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="mx-5 mt-2 pt-2" style={{ borderTop: "1px solid rgba(212, 175, 55, 0.2)" }}>
                  <Link
                    href="/advisory"
                    className="block py-2 text-xs font-medium transition-colors duration-150"
                    style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {[
              { name: "Our Methodology", href: "/methodology" },
              { name: "Executive Resources", href: "/resources" },
              { name: "Wellness", href: "/wellness" },
              { name: "Leadership", href: "/leadership" },
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
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="teeva-btn-gold text-xs">
              Book a Strategy Assessment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-200"
              style={{ transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-200"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-200"
              style={{ transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
            />
          </button>
        </nav>
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
        <div className="container py-6 flex flex-col gap-1">
          <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="teeva-section-label mb-3">Advisory Services</p>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block py-2.5 text-white/80 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.name}
              </Link>
            ))}
          </div>
          {[
            { name: "Our Methodology", href: "/methodology" },
            { name: "Executive Resources", href: "/resources" },
            { name: "Wellness", href: "/wellness" },
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
          <div className="mt-4">
            <Link href="/contact" className="teeva-btn-gold w-full text-center text-xs">
              Book a Strategy Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
