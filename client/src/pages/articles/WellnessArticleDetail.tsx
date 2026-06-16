import { useParams } from "wouter";
import { getArticleBySlug, wellnessArticles } from "@/data/articles";
import ArticleDetail from "@/components/ArticleDetail";
import NotFound from "@/pages/NotFound";

export default function WellnessArticleDetail() {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug || "");

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
