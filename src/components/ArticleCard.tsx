import Link from "next/link";
import type { Article } from "@/data/articles";

const categoryColors: Record<string, string> = {
  AI: "#D4AF37",
  Cybersecurity: "#D4AF37",
  Compliance: "#D4AF37",
  Leadership: "#D4AF37",
  Technology: "#D4AF37",
  Wellness: "#D4AF37",
  Nutrition: "#D4AF37",
  Fitness: "#D4AF37",
};

interface ArticleCardProps {
  article: Article;
  basePath: string; // e.g. "/resources/articles" or "/wellness/articles"
}

export default function ArticleCard({ article, basePath }: ArticleCardProps) {
  return (
    <Link
      href={`${basePath}/${article.slug}`}
      className="block group"
    >
      <div
        className="h-full bg-white p-7 transition-all duration-200 group-hover:shadow-lg"
        style={{ borderTop: "3px solid transparent", transition: "border-top-color 0.2s ease, box-shadow 0.2s ease" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderTopColor = "#D4AF37";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
        }}
      >
        <span
          className="inline-block text-xs font-medium uppercase tracking-widest mb-3 px-2 py-1"
          style={{
            color: "#D4AF37",
            backgroundColor: "rgba(212, 175, 55, 0.08)",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.15em",
          }}
        >
          {article.category}
        </span>
        <h3
          className="text-xl font-bold mb-3 leading-snug group-hover:text-yellow-700 transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
        >
          {article.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5 line-clamp-3"
          style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
        >
          {article.excerpt}
        </p>
        <span
          className="text-xs font-semibold uppercase tracking-wide transition-colors"
          style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}
        >
          Read Article →
        </span>
      </div>
    </Link>
  );
}
