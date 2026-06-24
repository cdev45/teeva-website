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
            Effective Date: June 23, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#4A5568", lineHeight: "1.8" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            1. INTRODUCTION AND SCOPE
          </h2>
          <p className="mb-4">
            This Privacy Policy ("Policy") establishes the comprehensive data protection and privacy framework for Arcway Industries LLC, doing business as The Elite Executive Advantage ("TEEVA", "we", "us", or "our"), a Florida limited liability company headquartered in St. Augustine, Florida. This Policy governs all personal information collected, processed, and maintained via our website located at teeva.co (the "Platform"), as well as any associated B2B advisory interactions, lead generation activities, and top-of-funnel executive community engagements.
          </p>
          <p className="mb-4">
            This Platform is designed for enterprise-level business-to-business (B2B) interactions. However, to ensure global data compliance, this Policy is engineered to satisfy the rigorous requirements of the General Data Protection Regulation (GDPR) (EU) 2016/679, the California Consumer Privacy Act (CCPA) (Cal. Civ. Code § 1798.100 et seq.), as amended by the California Privacy Rights Act (CPRA), and the Florida Digital Bill of Rights (FDBR) to the extent applicable.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            2. NOTICE AT COLLECTION: CATEGORIES OF DATA COLLECTED
          </h2>
          <p className="mb-4">
            We collect information that identifies, relates to, describes, or is reasonably capable of being associated with an identifiable individual ("Personal Information"). We do not collect Sensitive Personal Information (SPI) as defined under applicable modern statutory frameworks. Within the past twelve (12) months, TEEVA has collected the following categories of Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identifiers:</strong> Full name, professional email address, and corporate contact details.</li>
            <li><strong>Commercial and Professional Information:</strong> Job title, executive role, company name, annual corporate revenue range, and specific advisory services of interest.</li>
            <li><strong>Internet or Electronic Network Activity Telemetry:</strong> Internet Protocol (IP) address, browser type, operating system, referral URLs, specific pages viewed on the Platform, interaction timestamps, and general session duration data.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            3. LEGAL BASES AND COGNIZANT PURPOSES OF PROCESSING
          </h2>
          <p className="mb-4">
            Under Article 6 of the GDPR and equivalent data protection regimes, TEEVA processes your Personal Information under the following explicit legal frameworks:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Legitimate Interests:</strong> To deliver our high-ticket B2B consulting, fractional executive operations, and commercial growth advisory services; to manage and optimize our Platform infrastructure; and to protect our digital assets against unauthorized access or malicious activity.</li>
            <li><strong>Consent:</strong> To provision requested newsletters, gated insights, and entry into the top-of-funnel TEEVA Executive Community. This consent may be revoked at any time.</li>
            <li><strong>Contractual Necessity:</strong> To perform preliminary due diligence or execute obligations arising from enterprise Master Services Agreements (MSAs).</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            4. DATA ARCHITECTURE, RETENTION, AND THIRD-PARTY SUB-PROCESSORS
          </h2>
          <p className="mb-4">
            TEEVA does not sell, trade, rent, or lease consumer or business Personal Information to third parties or data brokers. Your data is routed and secured via enterprise-grade cloud ecosystems:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Sub-Processors:</strong> Data captured via intake mechanisms is processed primarily through HubSpot (for CRM and marketing automation) and Google Workspace (including Google Forms, Google Sheets, and Google Drive for secure, segmented cloud storage).</li>
            <li><strong>Security Protocols:</strong> All data transmission is encrypted in transit using strict Hypertext Transfer Protocol Secure (HTTPS) and Transport Layer Security (TLS 1.3). No personally identifiable information (PII) is stored in unencrypted local browser storage.</li>
            <li><strong>Data Retention Cycles:</strong> TEEVA applies strict data minimization constraints. We retain your Personal Information only for as long as necessary to satisfy the commercial purposes for which it was harvested, or to comply with statutory corporate record-keeping mandates under Florida and federal law.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            5. COOKIE AND AUTOMATED TELEMETRY CONTROLS
          </h2>
          <p className="mb-4">
            The Platform utilizes data collection technologies to analyze traffic and optimize executive user experiences.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Essential/Functional Cookies:</strong> Deployed automatically prior to consent to ensure core Platform operational capability, load balancing, and submission form functionality.</li>
            <li><strong>Analytics and Marketing Telemetry:</strong> Deployed exclusively subsequent to your explicit opt-in selection via our interactive Cookie Consent Banner. You retain the absolute right to purge, block, or reconfigure cookie behaviors through your native browser administrative tools.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            6. STATUTORY CONSUMER AND CORPORATE RIGHTS
          </h2>
          <p className="mb-4">
            Depending on your residency jurisdiction (including California, the European Economic Area, and the United Kingdom), you possess specific, enforceable legal rights regarding your Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Right to Know, Access, and Portability:</strong> The right to request confirmation of processing and a copy of the specific pieces of Personal Information collected in a portable, machine-readable format.</li>
            <li><strong>Right to Rectification/Correction:</strong> The right to demand the immediate correction of inaccurate, obsolete, or incomplete professional or commercial profiles.</li>
            <li><strong>Right to Erasure ("Right to Be Forgotten"):</strong> The right to request the permanent deletion of your Personal Information from our active databases and those of our designated sub-processors.</li>
            <li><strong>Right to Opt-Out of Marketing:</strong> The right to terminate commercial outreach instantly via the "Unsubscribe" mechanisms embedded in our communications.</li>
          </ul>
          <p className="mb-4">
            To submit a verified Data Subject Access Request (DSAR) or exercise any statutory rights, transmit your request to <a href="mailto:privacy@teeva.co" style={{ color: "#D4AF37" }}>privacy@teeva.co</a>. TEEVA guarantees an administrative SLA response within thirty (30) calendar days from verification. TEEVA will not discriminate, deny access, or modify commercial terms for any individual exercising their legal privacy rights.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            7. AMENDMENTS AND REVISIONS
          </h2>
          <p className="mb-4">
            TEEVA reserves the unilateral right to amend this Policy at any time to reflect shifting regulatory environments, judicial precedents, or changes in our data architecture. All modifications will be published directly on this page with an updated effective date.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
            8. LEGAL AND COMPLIANCE CONTACT DATA
          </h2>
          <p className="mb-4">
            For formal inquiries regarding this Policy or our data governance architecture, direct all correspondence to:
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
