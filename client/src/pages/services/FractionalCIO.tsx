import ServicePage from "../../components/ServicePage";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490541487/oNZTLoLQKpWBdVZWntoGbm/teeva-hero-main-etAuiCGcpMpRU7MvCHPuw4.webp";

export default function FractionalCIO() {
  return (
    <ServicePage
      label="Fractional CIO (vCIO)"
      headline="Board-Level IT Strategy."
      subheadline="Transform your technology stack from a cost center into a primary revenue driver. We architect strategy that opens markets and creates enterprise value."
      problem="Mid-market companies often face a difficult choice: hire a highly compensated full-time CIO, or delegate critical technology decisions to operational managers or third-party MSPs. This compromise leads to a fragmented technology stack, unpredictable spending, and a reactive IT posture that fails to align with strategic business objectives. When technology is managed purely as an operational utility rather than a strategic asset, enterprise growth stalls and technical debt rapidly compounds."
      solution="TEEVA delivers board-level IT leadership on a fractional basis, providing the strategic oversight and governance of an enterprise CIO without the full-time executive overhead. We operate as your dedicated technology partner, meticulously aligning your IT infrastructure with your revenue targets, streamlining complex operations, and aggressively positioning your organization for scale, acquisition, or market dominance."
      deliverables={[
        "Comprehensive IT Strategy & Roadmap Alignment",
        "Strategic Vendor Management & Contract Negotiation",
        "Technology Budgeting & Enterprise Cost Optimization",
        "Board-Level Communication & Executive Reporting",
        "Digital Transformation & Cloud Adoption Initiatives",
        "M&A Technology Due Diligence & Integration Planning"
      ]}
      anchor="Fractional Retainer"
      retainerCopy="Our vCIO engagements are structured as predictable, fixed monthly retainers. You gain immediate, ongoing access to executive IT leadership, strategic roadmapping, and vendor oversight without the financial burden of a full-time executive compensation package, benefits, or equity grants."
      heroImage={HERO_IMAGE}
    />
  );
}
