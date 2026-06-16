import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container">
          <p className="teeva-section-label mb-4">Legal</p>
          <h1 className="text-white font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Privacy Policy
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/60 text-sm mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Last updated: May 17, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl prose" style={{ fontFamily: "'Inter', sans-serif", color: "#4A5568", lineHeight: "1.8" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>1. Introduction</h2>
          <p>This Privacy Policy is provided by Arcway Industries LLC, doing business as The Elite Executive Advantage (TEEVA), located in St. Augustine, Florida, which operates the website at teeva.co. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or submit information through our forms. This policy is compliant with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>2. Information We Collect</h2>
          <p>We collect information you voluntarily provide when you submit forms on our website, including your name, email address, company name, job title, company revenue range, and service of interest. We also collect information automatically through cookies and similar tracking technologies, including your IP address, browser type, pages visited, and time spent on the site.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>3. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our advisory services, send you newsletters and insights you have subscribed to, improve our website and services, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>4. Data Storage and Processing</h2>
          <p>Form submissions are collected via Google Forms and stored in Google Sheets and Google Drive, which are operated by Google LLC. Google's privacy practices are governed by the Google Privacy Policy. All data is transmitted over HTTPS/TLS encryption. No personally identifiable information (PII) is stored in local browser storage.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>5. Cookies</h2>
          <p>We use functional cookies required for site operation, which are set before consent. Analytics and marketing cookies are only set after you provide explicit consent via our cookie consent banner. You may withdraw consent at any time by clearing your browser cookies. For full details, see our <Link href="/cookies" style={{ color: "#D4AF37" }}>Cookie Policy</Link>.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>6. Your Rights</h2>
          <p>Under GDPR and CCPA, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:support@teeva.co" style={{ color: "#D4AF37" }}>support@teeva.co</a>. We will respond to all requests within 30 days. You also have the right to opt out of any marketing communications at any time by clicking the unsubscribe link in any email we send.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>7. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us at support@teeva.co.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}>8. Contact</h2>
          <p>For privacy-related inquiries, contact us at <a href="mailto:support@teeva.co" style={{ color: "#D4AF37" }}>support@teeva.co</a> or write to us at TEEVA, St. Augustine, FL.</p>
        </div>
      </section>
    </div>
  );
}
