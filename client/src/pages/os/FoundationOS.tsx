import OSTierPage from "./OSTierPage";

export default function FoundationOS() {
  return (
    <OSTierPage
      tier="Foundation OS"
      tagline="Build the commercial infrastructure required to compete at the next level — security posture, compliance credentials, and operational baseline."
      anchor="Engagements begin at $8,000/month"
      icp="For companies building the foundation to compete."
      icpDetails={[
        "Mid-market companies with $20M–$75M in revenue that have identified commercial gaps but lack the internal capability to close them.",
        "Companies that are losing enterprise or federal deals due to security, compliance, or operational deficiencies.",
        "CEOs and boards that recognize technology and compliance as strategic assets but need a structured implementation partner.",
        "Companies preparing for a Series A/B raise or an M&A process that requires a clean commercial and technical foundation.",
      ]}
      deliverables={[
        {
          category: "Commercial Baseline",
          items: [
            "Commercial Gap Analysis and Prioritization",
            "Revenue Architecture Assessment",
            "Technology Stack Audit",
            "Competitive Positioning Review",
          ],
        },
        {
          category: "Security & Compliance Foundation",
          items: [
            "Zero-Trust Security Architecture Design",
            "Compliance Program Initiation (SOC 2, HIPAA, or CMMC)",
            "Vendor Risk Management Framework",
            "Incident Response Planning",
          ],
        },
        {
          category: "AI & Operational Efficiency",
          items: [
            "AI Readiness Assessment",
            "High-ROI Automation Identification",
            "Initial Agentic AI Workflow Deployment",
            "OpEx Reduction Roadmap",
          ],
        },
        {
          category: "Revenue Architecture",
          items: [
            "ICP Definition and Segmentation",
            "Sales Enablement Foundation",
            "Board-Level Commercial Reporting",
            "12-Month Commercial Roadmap",
          ],
        },
      ]}
    />
  );
}
