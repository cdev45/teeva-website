import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-cybersecurity-CXbWWbd8RXckCJuHdUHE7D.webp";

export default function Compliance() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Compliance Advisory"
      subheadline="Compliance programs that unlock new markets, accelerate enterprise revenue, and enhance valuation multiples."
      problem="Mid-market companies are losing enterprise contracts and federal opportunities because they cannot demonstrate the compliance posture that sophisticated buyers require. Most compliance firms confuse audit preparation with compliance management — they help you pass a test, not build a commercial asset. The result is compliance investment that generates cost but no revenue."
      solution="We build compliance programs that function as commercial weapons. FedRAMP, SOC 2, HIPAA, and CMMC authorizations are not regulatory burdens — they are the market access credentials that unlock federal contracts, close enterprise deals, and command premium valuation multiples from acquirers and investors. We have built inaugural FedRAMP and SOC 2 authorizations from the ground up that directly accelerated enterprise sales cycles and created measurable enterprise value."
      deliverables={[
        "Commercial Compliance Gap Assessment",
        "Compliance Program Design and Management",
        "FedRAMP, SOC 2, HIPAA, and CMMC Authorization",
        "Policy and Procedure Development",
        "Audit Preparation and Support",
        "Compliance as a Sales Enablement Asset",
        "Ongoing Compliance Monitoring and Reporting",
      ]}
      retainerCopy="Compliance Advisory engagements begin at $5,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $5,000/month"
      heroImage={HERO}
    />
  );
}
