import OSTierPage from "../OSTierPage";

export default function EnterpriseOS() {
  return (
    <OSTierPage
      tier="Enterprise OS"
      tagline="Full-scope commercial transformation for companies with complex multi-market mandates, PE-backed growth requirements, or enterprise valuation objectives."
      anchor="Engagements begin at $22,000/month"
      icp="For companies with complex growth mandates or exit objectives."
      icpDetails={[
        "PE-backed portfolio companies with aggressive EBITDA and valuation expansion mandates on a defined timeline.",
        "Mid-market companies preparing for an M&A exit or capital raise that requires a premium commercial and technical profile.",
        "Companies operating across multiple markets, geographies, or regulatory environments that require coordinated commercial transformation.",
        "Boards and operating partners that require direct, board-level advisory engagement with measurable quarterly outcomes.",
      ]}
      deliverables={[
        {
          category: "Full-Scope Commercial Transformation",
          items: [
            "Complete 4-Phase OS Implementation",
            "Multi-Market Expansion Strategy",
            "Complex Compliance Portfolio (FedRAMP, SOC 2, HIPAA, CMMC)",
            "M&A Technology Integration Support",
          ],
        },
        {
          category: "PE & Board-Level Advisory",
          items: [
            "Direct Board and Operating Partner Engagement",
            "Quarterly Commercial Performance Reviews",
            "EBITDA and Valuation Multiple Advisory",
            "Exit Readiness Assessment and Preparation",
          ],
        },
        {
          category: "Enterprise Revenue Architecture",
          items: [
            "Enterprise Sales Cycle Design and Optimization",
            "Multi-Segment Churn Defense Program",
            "Customer Lifetime Value Expansion Strategy",
            "Revenue Operations at Scale",
          ],
        },
        {
          category: "AI & Operational Scale",
          items: [
            "Enterprise-Scale Agentic AI Deployment",
            "Full OpEx Reduction and Efficiency Program",
            "Technology Vendor Rationalization",
            "Scalable Infrastructure for Post-Exit Operations",
          ],
        },
      ]}
    />
  );
}
