import { useParams } from "wouter";
import { getArticleBySlug, vocationalArticles } from "@/data/articles";
import ArticleDetail from "@/components/ArticleDetail";
import NotFound from "@/pages/NotFound";

export default function VocationalArticleDetail() {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug || "");

  if (!article || article.type !== "vocational") {
    return <NotFound />;
  }

  const related = vocationalArticles.filter((a) => a.slug !== article.slug);

  return (
    <ArticleDetail
      article={article}
      backPath="/resources/articles"
      backLabel="All Articles"
      relatedArticles={related}
    />
  );
}
