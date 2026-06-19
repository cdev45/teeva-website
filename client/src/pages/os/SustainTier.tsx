import OSTierPage from "./OSTierPage";

export default function SustainTier() {
  return (
    <OSTierPage
      tier="The Sustain Tier"
      tagline="Post-implementation continuity and fractional oversight without bespoke scope creep."
      anchor="From $6,000 - $12,000 / month"
      icp="For existing customers requiring ongoing continuity."
      icpDetails={[
        "Existing customers who have successfully completed the 12-month implementation of the Foundation, Growth, or Enterprise OS.",
        "Organizations requiring ongoing fractional oversight to maintain compliance and security posture.",
      ]}
      deliverables={[
        {
          category: "Phase 5: OS Sustain & Optimize",
          items: [
            "Quarterly Strategic Board Briefings",
            "Monthly Compliance & Security Posture Audits",
            "Annual Vendor & Cloud Cost Renegotiation",
            "Capped On-Demand Advisory Hours",
          ],
        },
        {
          category: "Continuous Commercial Outcomes",
          items: [
            "Defend Against Churn (Continuous)",
            "Reduce OpEx Expenses (Continuous)",
            "Maintain Compliance Authorizations",
          ],
        },
      ]}
      disclaimer="Terms: Annual renewal. Available only to customers who have completed at least The Foundation OS. Regulated Industry Premium (GovCon/HealthTech): +20%."
    />
  );
}
