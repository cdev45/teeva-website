import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-cybersecurity-CXbWWbd8RXckCJuHdUHE7D.webp";

export default function Cybersecurity() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Cybersecurity Advisory (vCISO)"
      subheadline="Security architecture that unlocks enterprise markets, accelerates sales cycles, and defends against churn."
      problem="Mid-market companies are losing enterprise contracts and federal opportunities because they cannot demonstrate the security posture that sophisticated buyers require. Experienced CISOs command $300,000 to $600,000 in total compensation and are not interested in mid-market roles. The result is that security becomes a reactive cost center — rather than the commercial accelerator it should be."
      solution="We transform security from a liability into a revenue asset. FedRAMP, SOC 2, Zero-Trust, and HIPAA authorizations are not compliance checkboxes — they are the credentials that unlock federal markets, close enterprise deals, shorten sales cycles, and defend against the customer churn that follows a breach. We build security programs that generate measurable commercial returns, integrated with the firm's broader technology and go-to-market strategy."
      deliverables={[
        "Security Program Design and Commercial Integration",
        "Zero-Trust Architecture",
        "FedRAMP, SOC 2, HIPAA, and CMMC Authorization Management",
        "Incident Response Planning and Business Continuity",
        "Vendor Risk Management",
        "Board-Level Security and Commercial Risk Reporting",
        "Security as a Sales Enablement Asset",
      ]}
      retainerCopy="Cybersecurity Advisory engagements begin at $6,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $6,000/month"
      heroImage={HERO}
    />
  );
}
