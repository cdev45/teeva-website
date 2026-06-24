import { Link } from "wouter";

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container">
          <p className="teeva-section-label mb-4">Legal</p>
          <h1 className="text-white font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Cookie Policy
          </h1>
          <div className="teeva-gold-line-left" />
          <p className="text-white/60 text-sm mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Effective Date: June 23, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#4A5568", lineHeight: "1.8" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            1. INTRODUCTION TO TELEMETRY AND COOKIE USAGE
          </h2>
          <p className="mb-4">
            Arcway Industries LLC, doing business as The Elite Executive Advantage ("TEEVA", "we", "us", or "our"), utilizes cookies, web beacons, tracking pixels, and other localized tracking technologies ("Cookies") when you access teeva.co (the "Platform").
          </p>
          <p className="mb-4">
            This Cookie Policy is an integral component of our <Link href="/privacy" style={{ color: "#D4AF37" }}>Privacy Policy</Link> and defines the technical nature, purpose, and governance mechanisms for the data telemetry deployed on our Platform. Our objective is to ensure transparency regarding the data we collect to optimize your executive B2B experience.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            2. DEFINITION AND MECHANICS OF COOKIES
          </h2>
          <p className="mb-4">
            Cookies are small cryptographic or plain-text files transmitted to your browser and stored on your local hardware device. They enable the Platform to recognize your browser, capture stateful information across requests, remember user preferences, and execute advanced analytics to refine our commercial offerings.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            3. CATEGORIES OF COOKIES DEPLOYED
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Strictly Necessary (Functional) Cookies:</strong> These are indispensable for the core operability of the Platform. They facilitate load balancing, network routing, and form submission security. Under GDPR and CCPA, these do not require prior consent and cannot be disabled without breaking site functionality.</li>
            <li><strong>Analytical and Performance Cookies:</strong> These track anonymized user behavior (e.g., page views, session duration, referral paths). We utilize these metrics to optimize our UI/UX and understand the efficacy of our commercial content.</li>
            <li><strong>Marketing and Targeting Cookies:</strong> Deployed in conjunction with third-party partners (e.g., HubSpot, Google Analytics), these track digital footprints to build user profiles and deliver highly relevant B2B advisory advertising on external networks.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            4. CONSENT AND USER GOVERNANCE
          </h2>
          <p className="mb-4">
            Upon initial entry to the Platform, you will be presented with a Cookie Consent Banner.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Opt-In Requirement:</strong> Analytical and Marketing cookies will only be activated following your explicit affirmative action ("Accept").</li>
            <li><strong>Right to Revoke:</strong> You retain the absolute right to revoke consent or modify your preferences at any time. You may clear your browser cache/cookies or adjust your localized browser settings to aggressively block third-party tracking.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            5. THIRD-PARTY DATA PROCESSORS
          </h2>
          <p className="mb-4">
            We authorize specific enterprise-grade sub-processors to deploy their own cookies through our Platform to aggregate analytics. These entities include, but are not limited to, Google Analytics and HubSpot. The telemetry gathered by these third parties is governed exclusively by their respective privacy architectures. TEEVA does not control the independent tracking parameters utilized by these external networks.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            6. MODIFICATIONS TO THIS POLICY
          </h2>
          <p className="mb-4">
            TEEVA reserves the right to update this Cookie Policy unilaterally to ensure ongoing compliance with evolving technical standards or legal requirements (e.g., CPRA amendments, ePrivacy Directive shifts). The "Effective Date" at the top of this document will reflect the latest revision cycle.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            7. CONTACT AND COMPLIANCE OPERATIONS
          </h2>
          <p className="mb-4">
            If you require technical clarification regarding our cookie deployment strategy, please direct your inquiry to:
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <a href="mailto:privacy@teeva.co" style={{ color: "#D4AF37" }}>privacy@teeva.co</a>
          </p>
        </div>
      </section>
    </div>
  );
}
