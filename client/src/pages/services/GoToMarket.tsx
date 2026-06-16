import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

export default function GoToMarket() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Go-to-Market Advisory"
      subheadline="Strategic revenue growth that leverages technical capabilities and compliance posture as competitive differentiators."
      problem="Fifty-five percent of mid-market companies miss quarterly revenue forecasts by more than ten percent. Most GTM advisors focus on demand generation tactics without addressing the underlying strategic architecture — the alignment of technology capability, compliance posture, and market positioning that determines whether a company can actually win and retain enterprise accounts. They cannot advise on how to leverage FedRAMP or SOC 2 authorizations to unblock enterprise sales cycles."
      solution="We architect strategic revenue growth that leverages the company's technical capabilities and compliance posture as competitive differentiators. We partner directly with sales and product teams to translate technical security architecture into closed commercial deals. Our integrated CIO/CISO methodology gives us a unique ability to connect compliance achievements directly to revenue outcomes — a capability no pure GTM advisory firm can match."
      deliverables={[
        "GTM Strategy and Roadmap",
        "Ideal Customer Profile (ICP) Definition",
        "Sales Enablement Assets",
        "Competitive Positioning",
        "Enterprise Sales Cycle Support",
        "Revenue Architecture Design",
      ]}
      retainerCopy="Go-to-Market Advisory engagements begin at $5,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $5,000/month"
      heroImage={HERO}
    />
  );
}
