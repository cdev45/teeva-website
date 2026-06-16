import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-cybersecurity-CXbWWbd8RXckCJuHdUHE7D.webp";

export default function Compliance() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Compliance Advisory"
      subheadline="Proactive compliance programs that transform regulatory requirements into revenue enablers."
      problem="Mid-market companies are losing enterprise deals because they cannot produce the compliance documentation that enterprise buyers require. Most compliance firms confuse audit preparation with compliance management. They help you pass a test, not build a program. The result is a compliance posture that is reactive, fragile, and disconnected from the commercial strategy it is supposed to support."
      solution="We transform compliance from a cost center into a revenue enabler. We build proactive compliance programs — including HIPAA, CMMC, SOC 2, and FedRAMP — that directly unblock enterprise pre-sales cycles and secure commercial market fit. We have built inaugural FedRAMP and SOC 2 authorizations from the ground up that directly accelerated enterprise sales and created measurable enterprise value."
      deliverables={[
        "Compliance Gap Assessment",
        "Compliance Program Design and Management",
        "Policy and Procedure Development",
        "Audit Preparation and Support",
        "Ongoing Compliance Monitoring",
      ]}
      retainerCopy="Compliance Advisory engagements begin at $5,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $5,000/month"
      heroImage={HERO}
    />
  );
}
