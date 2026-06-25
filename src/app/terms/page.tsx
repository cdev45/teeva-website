import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container">
          <p className="teeva-section-label mb-4">Legal</p>
          <h1 className="text-white font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Terms of Service
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
            1. ACCEPTANCE AND B2B CLASSIFICATION
          </h2>
          <p className="mb-4">
            These Master Terms of Service ("Terms") constitute a legally binding enterprise agreement between Arcway Industries LLC, doing business as The Elite Executive Advantage ("TEEVA", "we", "us", or "our"), and the corporate entity, executive, or authorized representative accessing the Platform or engaging our services ("Client", "User", "you", or "your").
          </p>
          <p className="mb-4">
            By accessing teeva.co (the "Platform"), submitting inquiries, or consuming TEEVA-authored intelligence, you expressly acknowledge and agree that TEEVA operates exclusively in a Business-to-Business (B2B) capacity. Consumer protection statutes applicable to retail transactions do not apply to the high-ticket advisory, fractional executive, or commercial growth services provided by TEEVA.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            2. SERVICES PROVISION AND EXECUTION
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Advisory Services:</strong> All formal consulting, Go-To-Market (GTM) architecture, Chief Information Security Officer (CISO) advisory, and fractional executive engagements are subject to the execution of a separate, bilateral Master Services Agreement (MSA) and attached Statements of Work (SOWs). In the event of a conflict between these Terms and an executed MSA, the MSA shall strictly govern.</li>
            <li><strong>Digital Platform Usage:</strong> The insights, templates, and frameworks published on the Platform are provided for general executive informational purposes only. They do not constitute formal legal, financial, or cyber-risk advice and should not be relied upon as a substitute for retained professional counsel.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            3. INTELLECTUAL PROPERTY AND COMMERCIAL ASSETS
          </h2>
          <p className="mb-4">
            All intellectual property rights, titles, and interests in the Platform—including but not limited to proprietary methodologies, commercial playbooks, algorithms, UI/UX designs, trademarks, service marks, and written intelligence—are exclusively owned by Arcway Industries LLC.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Limited License:</strong> TEEVA grants you a limited, non-exclusive, non-transferable, and revocable license to access and utilize the Platform strictly for internal corporate evaluation purposes.</li>
            <li><strong>Prohibited Actions:</strong> You are strictly prohibited from reproducing, scraping, reverse-engineering, repackaging, or reselling any TEEVA content, frameworks, or proprietary methodologies for competitive commercial advantage.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            4. EXECUTIVE COMMUNITY AND CHATHAM HOUSE RULE
          </h2>
          <p className="mb-4">
            Access to the "TEEVA Elite Executives Group" (formerly "Community") and related syncs is granted at the sole discretion of TEEVA.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Confidentiality Protocol:</strong> All discussions, strategy sharing, and intel disseminated within these executive cohorts operate strictly under the Chatham House Rule. Participants are free to use the information received, but neither the identity nor the corporate affiliation of the speaker(s) may be revealed.</li>
            <li><strong>Revocation of Access:</strong> TEEVA reserves the unilateral right to terminate the access of any participant who breaches confidentiality protocols, engages in unauthorized solicitation, or violates the professional standards of the cohort.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            5. LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES
          </h2>
          <p className="mb-4">
            The Platform and its contents are provided strictly on an "AS-IS" and "AS-AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, Arcway Industries LLC and its officers, directors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, revenue, data, or enterprise valuation—arising out of or related to your use of the Platform or reliance on its content.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            6. INDEMNIFICATION
          </h2>
          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless Arcway Industries LLC, its subsidiaries, and its executive officers from any and all third-party claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your breach of these Terms, your misuse of the Platform, or your infringement of TEEVA's intellectual property rights.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            7. GOVERNING LAW AND JURISDICTION
          </h2>
          <p className="mb-4">
            These Terms, and any disputes arising out of or related to the Platform or TEEVA services, shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.
          </p>
          <p className="mb-4">
            Any legal action or formal proceeding shall be brought exclusively in the state or federal courts located in St. Johns County, Florida. You hereby irrevocably consent to the personal jurisdiction and venue of such courts.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            8. CONTACT INFORMATION
          </h2>
          <p className="mb-4">
            All legal notices, questions regarding these Terms, or requests for enterprise MSA evaluation should be directed to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:privacy@teeva.co" style={{ color: "#D4AF37" }}>privacy@teeva.co</a></li>
            <li><strong>Physical Mail:</strong> Arcway Industries LLC dba TEEVA, Legal & Compliance Dept., St. Augustine, FL, United States.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
