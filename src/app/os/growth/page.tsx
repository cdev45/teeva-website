import OSTierPage from "../OSTierPage";

export default function GrowthOS() {
  return (
    <OSTierPage
      tier="Growth OS"
      tagline="Activate the full 4-Phase Commercial Growth OS — from baseline assessment through revenue acceleration and market expansion."
      anchor="Engagements begin at $14,000/month"
      icp="For companies ready to accelerate revenue and expand markets."
      icpDetails={[
        "Mid-market companies with $50M–$150M in revenue that have a stable foundation and are ready to scale aggressively.",
        "Companies targeting new market categories — federal, enterprise, or international — that require both commercial strategy and technical credibility.",
        "PE-backed portfolio companies with a defined growth mandate and a board that demands measurable commercial outcomes.",
        "Companies that have completed a Foundation OS engagement and are ready to activate the revenue acceleration phase.",
      ]}
      deliverables={[
        {
          category: "Full 4-Phase Implementation",
          items: [
            "Commercial Baseline Assessment",
            "Foundation & Defense Installation",
            "Efficiency Engine Deployment",
            "Revenue Accelerator Activation",
          ],
        },
        {
          category: "Market Expansion",
          items: [
            "New Market Entry Strategy and Execution",
            "Federal/Enterprise Market Access (FedRAMP, SOC 2)",
            "Competitive Positioning and Differentiation",
            "Market Expansion Roadmap",
          ],
        },
        {
          category: "Revenue Architecture",
          items: [
            "Enterprise Sales Cycle Design and Optimization",
            "Churn Defense Program",
            "Customer Retention Architecture",
            "Revenue Operations Automation",
          ],
        },
        {
          category: "AI & EBITDA Expansion",
          items: [
            "Full Agentic AI Workflow Deployment",
            "OpEx Reduction Program",
            "EBITDA Expansion Modeling",
            "Board-Level Commercial and Financial Reporting",
          ],
        },
      ]}
    />
  );
}
