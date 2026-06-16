import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-advisory-a3GjPVzdQihzX8W5EQkzEm.webp";

export default function FractionalCIO() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="Fractional CIO (vCIO)"
      subheadline="Board-level technology leadership that expands revenue, unlocks markets, and builds enterprise value."
      problem="Mid-market companies need board-level technology leadership to adopt AI, execute commercial strategy, and open new markets. A full-time CIO costs $250,000 to $450,000 per year, a budget most mid-market companies cannot justify. The result is that technology decisions are made reactively, by committee, or delegated to vendors with conflicts of interest — and the commercial opportunities that technology could unlock are left on the table."
      solution="We provide Fractional CIO leadership built on the 'Innovate and Monetize' model. We architect technology strategies that directly expand top-line revenue, unlock new market categories, reduce OpEx through automation and vendor optimization, and create measurable enterprise value. We have a proven track record of architecting the infrastructure that captured $42M in enterprise value and unlocked federal and enterprise markets that were previously inaccessible."
      deliverables={[
        "Commercial Technology Roadmap (12–24 month)",
        "Revenue Architecture Design",
        "AI and Agentic AI Integration Strategy",
        "Vendor Management and Contract Negotiation",
        "Technology Budget Optimization and OpEx Reduction",
        "Cloud Architecture (AWS/Google)",
        "M&A Technology Integration",
        "Board-Level Technology and Commercial Reporting",
      ]}
      retainerCopy="Fractional CIO advisory engagements begin at $7,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $7,000/month"
      heroImage={HERO}
    />
  );
}
