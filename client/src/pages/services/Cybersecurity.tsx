import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-cybersecurity-CXbWWbd8RXckCJuHdUHE7D.webp";

export default function Cybersecurity() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Cybersecurity Advisory (vCISO)"
      subheadline="Board-ready security leadership natively integrated with our CIO methodology."
      problem="Experienced CISOs command $300,000 to $600,000 in total compensation, and they are typically not interested in mid-market roles. The result is that mid-market companies either go without security leadership or rely on MSPs with structural conflicts of interest who are incentivized to sell tools, not deliver strategic outcomes. Security becomes a reactive, tactical function rather than a proactive, revenue-enabling discipline."
      solution="We provide board-ready security leadership from a practitioner who has built inaugural FedRAMP and SOC 2 authorizations from the ground up. Our vCISO service is natively integrated with our CIO methodology — security is a design requirement, not an afterthought. We deploy Zero-Trust frameworks and manage GovRAMP, FedRAMP, SOC 2, and HIPAA authorizations to accelerate time-to-market and unlock enterprise sales cycles."
      deliverables={[
        "Security Program Design and Management",
        "Zero-Trust Architecture",
        "Incident Response Planning",
        "Vendor Risk Management",
        "Board-Level Security Reporting",
        "Compliance Authorization Management (FedRAMP, SOC 2, HIPAA, CMMC)",
      ]}
      retainerCopy="Cybersecurity Advisory engagements begin at $6,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $6,000/month"
      heroImage={HERO}
    />
  );
}
