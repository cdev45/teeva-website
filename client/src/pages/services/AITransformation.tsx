import ServicePage from "@/components/ServicePage";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-methodology-GgdNRFoRRihrCfApnYU8Hh.webp";

export default function AITransformation() {
  return (
    <ServicePage
      label="Advisory Services"
      headline="AI Transformation"
      subheadline="Outcome-accountable AI adoption strategies that treat security and compliance as design requirements from day one."
      problem="Ninety-five percent of enterprise AI pilots fail to scale. Mid-market companies are under enormous pressure to adopt AI but lack the strategic leadership to do so without creating new security vulnerabilities, compliance gaps, or operational chaos. Most AI consultants deliver strategy decks that collect dust or implement tactical tools without integrating them into the broader IT infrastructure, security posture, and compliance requirements."
      solution="We deliver outcome-accountable AI adoption strategies that treat security and compliance as design requirements from day one. We do not deliver strategy decks that collect dust. We architect right-sized AI solutions that drive measurable ROI without the enterprise bloat or the pilot graveyard. Our integrated CIO/CISO methodology ensures that every AI initiative is secure, compliant, and operationally sound before it reaches production."
      deliverables={[
        "AI Readiness Assessment",
        "Use Case Prioritization",
        "Vendor Selection and Evaluation",
        "Implementation Oversight",
        "AI Risk and Security Framework",
        "ROI Measurement Framework",
      ]}
      retainerCopy="AI Transformation advisory engagements begin at $6,000/month. Scope and investment are tailored to the complexity of the engagement — contact us for a custom assessment. We do not offer hourly consulting or one-time project engagements."
      anchor="From $6,000/month"
      heroImage={HERO}
    />
  );
}
