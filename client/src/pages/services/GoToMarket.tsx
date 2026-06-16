import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

export default function GoToMarket() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Go-to-Market Advisory"
      subheadline="Commercial strategy that expands top-line revenue, unlocks new markets, and defends against churn."
      problem="Fifty-five percent of mid-market companies miss quarterly revenue forecasts by more than ten percent. Most GTM advisors focus on demand generation tactics without addressing the underlying commercial architecture — the alignment of market positioning, competitive strategy, technology capability, and customer retention that determines whether a company can actually win, expand, and defend its market. The result is tactical activity without strategic compounding."
      solution="We architect commercial growth strategies that deliver durable, compounding revenue outcomes. We define the markets worth winning, the customers worth pursuing, the competitive positioning that creates defensible differentiation, and the sales architecture that converts pipeline into closed revenue. We partner directly with boards, CEOs, and commercial leadership to translate the firm's technology capabilities, compliance posture, and AI investments into commercial advantages that competitors cannot easily replicate."
      deliverables={[
        "Commercial Strategy and Revenue Roadmap",
        "Market Expansion and New Market Entry Strategy",
        "Ideal Customer Profile (ICP) Definition and Segmentation",
        "Competitive Positioning and Differentiation Strategy",
        "Churn Defense and Customer Retention Architecture",
        "Enterprise Sales Cycle Design and Support",
        "Sales Enablement Assets",
        "Revenue Architecture and EBITDA Impact Modeling",
      ]}
      retainerCopy="Go-to-Market Advisory engagements begin at $5,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $5,000/month"
      heroImage={HERO}
    />
  );
}
