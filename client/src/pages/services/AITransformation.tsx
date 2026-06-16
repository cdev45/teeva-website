import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";

export default function AITransformation() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="AI Transformation"
      subheadline="AI and Agentic AI strategies that reduce OpEx, automate revenue operations, and expand EBITDA."
      problem="Ninety-five percent of enterprise AI pilots fail to scale — not because the technology does not work, but because the strategy is wrong. Most AI initiatives are technology projects. They are not commercial strategies. Mid-market companies invest in AI tools without a clear line from adoption to revenue growth, cost reduction, or valuation impact. The result is a pilot graveyard and a board that has lost confidence in AI as a business lever."
      solution="We architect AI and Agentic AI programs as commercial strategies, not technology projects. Every initiative is designed with a direct line to measurable outcomes: reduced operational costs, automated revenue-generating workflows, accelerated sales cycles, enhanced customer retention, and expanded EBITDA. We do not deliver strategy decks that collect dust. We deliver AI programs that move the commercial needle — with governance, security, and compliance built in from day one."
      deliverables={[
        "Commercial AI Readiness Assessment",
        "Revenue and OpEx Impact Prioritization",
        "Agentic AI Workflow Design and Deployment",
        "Vendor Selection and Evaluation",
        "AI Governance and Risk Framework",
        "ROI and Commercial Impact Measurement",
        "Board-Level AI Strategy Reporting",
      ]}
      retainerCopy="AI Transformation advisory engagements begin at $6,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $6,000/month"
      heroImage={HERO}
    />
  );
}
