/*
 * TEEVA Insight Article Detail — /insights/:slug
 * Individual article page with mid-content OS CTA
 */

import Link from 'next/link';
import { vocationalArticles } from "@/data/articles";
import ArticleDetail from "@/components/ArticleDetail";

export async function generateStaticParams() {
  return vocationalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function InsightArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = vocationalArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
          >
            Article Not Found
          </h1>
          <Link href="/insights" className="teeva-btn-gold">
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ArticleDetail
      article={article}
      backPath="/insights"
      backLabel="Executive Insights"
      relatedArticles={vocationalArticles.filter((a) => a.slug !== slug).slice(0, 4)}
    />
  );
}
