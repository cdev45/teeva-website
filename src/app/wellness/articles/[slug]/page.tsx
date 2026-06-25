
import { getArticleBySlug, wellnessArticles } from "@/data/articles";
import ArticleDetail from "@/components/ArticleDetail";
import NotFound from "@/components/NotFound";

export async function generateStaticParams() {
  return wellnessArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function WellnessArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug || "");

  if (!article || article.type !== "wellness") {
    return <NotFound />;
  }

  const related = wellnessArticles.filter((a) => a.slug !== article.slug);

  return (
    <ArticleDetail
      article={article}
      backPath="/wellness/articles"
      backLabel="Wellness Articles"
      relatedArticles={related}
    />
  );
}
