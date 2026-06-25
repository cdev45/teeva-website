"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Article } from "@/data/articles";

interface ArticleDetailProps {
  article: Article;
  backPath: string;
  backLabel: string;
  relatedArticles: Article[];
}

// Markdown-to-HTML renderer preserving original content verbatim
function renderContent(content: string): string {
  // Process line by line to preserve structure
  const lines = content.split('\n');
  const htmlLines: string[] = [];
  let inList = false;
  let inOrderedList = false;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (/^# /.test(line)) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (inOrderedList) { htmlLines.push('</ol>'); inOrderedList = false; }
      htmlLines.push(`<h2 class="article-h2">${escapeHtml(line.replace(/^# /, ''))}</h2>`);
    } else if (/^## /.test(line)) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (inOrderedList) { htmlLines.push('</ol>'); inOrderedList = false; }
      htmlLines.push(`<h2 class="article-h2">${escapeHtml(line.replace(/^## /, ''))}</h2>`);
    } else if (/^### /.test(line)) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (inOrderedList) { htmlLines.push('</ol>'); inOrderedList = false; }
      htmlLines.push(`<h3 class="article-h3">${escapeHtml(line.replace(/^### /, ''))}</h3>`);
    } else if (/^#### /.test(line)) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      htmlLines.push(`<h4 class="article-h4">${escapeHtml(line.replace(/^#### /, ''))}</h4>`);
    }
    // Images
    else if (/^!\[/.test(line)) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (inOrderedList) { htmlLines.push('</ol>'); inOrderedList = false; }
      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        const alt = imgMatch[1] || '';
        const src = imgMatch[2];
        htmlLines.push(`<figure class="article-figure"><img src="${src}" alt="${escapeHtml(alt)}" loading="lazy" /></figure>`);
      }
    }
    // Unordered list items
    else if (/^[\-\*] /.test(line) || /^    [\-\*\+] /.test(line)) {
      if (!inList) { htmlLines.push('<ul>'); inList = true; }
      const text = line.replace(/^\s*[\-\*\+] /, '');
      htmlLines.push(`<li>${processInline(text)}</li>`);
    }
    // Ordered list items
    else if (/^\d+\.\s/.test(line)) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (!inOrderedList) { htmlLines.push('<ol>'); inOrderedList = true; }
      const text = line.replace(/^\d+\.\s/, '');
      htmlLines.push(`<li>${processInline(text)}</li>`);
    }
    // Empty line — close lists
    else if (line.trim() === '') {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (inOrderedList) { htmlLines.push('</ol>'); inOrderedList = false; }
      htmlLines.push('');
    }
    // Regular paragraph
    else if (line.trim()) {
      if (inList) { htmlLines.push('</ul>'); inList = false; }
      if (inOrderedList) { htmlLines.push('</ol>'); inOrderedList = false; }
      htmlLines.push(`<p>${processInline(line)}</p>`);
    }

    i++;
  }

  if (inList) htmlLines.push('</ul>');
  if (inOrderedList) htmlLines.push('</ol>');

  return htmlLines.join('\n');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function processInline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Inline code
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Links [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return text;
}

export default function ArticleDetail({ article, backPath, backLabel, relatedArticles }: ArticleDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.slug]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-16" style={{ backgroundColor: "#0F2439" }}>
        <div className="container max-w-4xl">
          <Link
            href={backPath}
            className="inline-flex items-center gap-2 text-xs font-medium mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            ← {backLabel}
          </Link>
          <span
            className="inline-block text-xs font-medium uppercase tracking-widest mb-4 px-2 py-1"
            style={{
              color: "#D4AF37",
              backgroundColor: "rgba(212, 175, 55, 0.15)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {article.category}
          </span>
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          >
            {article.title}
          </h1>
          <div className="teeva-gold-line-left" />
          <p
            className="text-white/70 text-base leading-relaxed mt-4 max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {article.excerpt}
          </p>
          <p
            className="text-white/50 text-xs mt-4 uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Last Updated: {article.lastUpdated || "Date not specified"}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <style>{`
                .article-body h2.article-h2 {
                  font-family: 'Cormorant Garamond', serif;
                  font-size: 1.75rem;
                  font-weight: 700;
                  color: #0F2439;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  line-height: 1.3;
                }
                .article-body h3.article-h3 {
                  font-family: 'Inter', sans-serif;
                  font-size: 1.1rem;
                  font-weight: 600;
                  color: #0F2439;
                  margin-top: 2rem;
                  margin-bottom: 0.75rem;
                }
                .article-body p {
                  font-family: 'Inter', sans-serif;
                  font-size: 1rem;
                  line-height: 1.8;
                  color: #4A5568;
                  margin-bottom: 1.25rem;
                }
                .article-body strong {
                  color: #0F2439;
                  font-weight: 600;
                }
                .article-body ul {
                  margin: 1rem 0 1.25rem 1.5rem;
                  list-style: disc;
                }
                .article-body li {
                  font-family: 'Inter', sans-serif;
                  font-size: 1rem;
                  line-height: 1.7;
                  color: #4A5568;
                  margin-bottom: 0.5rem;
                }
                .article-body .article-figure {
                  margin: 2rem 0;
                  text-align: center;
                }
                .article-body .article-figure img {
                  max-width: 100%;
                  height: auto;
                  border: 1px solid #F4F5F7;
                }
                .article-body h4.article-h4 {
                  font-family: 'Inter', sans-serif;
                  font-size: 1rem;
                  font-weight: 600;
                  color: #0F2439;
                  margin-top: 1.5rem;
                  margin-bottom: 0.5rem;
                }
                .article-body ol {
                  margin: 1rem 0 1.25rem 1.5rem;
                  list-style: decimal;
                }
                .article-body h2 {
                  font-family: 'Cormorant Garamond', serif;
                  font-size: 1.75rem;
                  font-weight: 700;
                  color: #0F2439;
                  margin-top: 2.5rem;
                  margin-bottom: 0.75rem;
                  line-height: 1.3;
                }
                .article-body h3 {
                  font-family: 'Inter', sans-serif;
                  font-size: 1.2rem;
                  font-weight: 600;
                  color: #0F2439;
                  margin-top: 2rem;
                  margin-bottom: 0.5rem;
                }
                .article-body h4 {
                  font-family: 'Inter', sans-serif;
                  font-size: 1rem;
                  font-weight: 600;
                  color: #0F2439;
                  margin-top: 1.5rem;
                  margin-bottom: 0.4rem;
                }
                .article-body img {
                  max-width: 100%;
                  height: auto;
                  margin: 1.5rem auto;
                  display: block;
                  border: 1px solid #F4F5F7;
                }
                .article-table thead th {
                  background-color: #0F2439;
                  color: #D4AF37;
                  font-family: 'Inter', sans-serif;
                  font-size: 0.8rem;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  padding: 0.75rem 1rem;
                  text-align: left;
                  border: none;
                }
                .article-table tbody td {
                  padding: 0.75rem 1rem;
                  border-bottom: 1px solid #F4F5F7;
                  vertical-align: top;
                  font-family: 'Inter', sans-serif;
                  font-size: 0.9rem;
                  color: #4A5568;
                }
                .article-table tr:nth-child(even) td {
                  background-color: #FAFAFA;
                }
                .article-table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 1.5rem 0;
                  overflow-x: auto;
                  display: block;
                }
                .article-table tbody td ul {
                  margin: 0;
                  padding-left: 1.2rem;
                  list-style: disc;
                }
                .article-table tbody td ul li {
                  margin-bottom: 0.25rem;
                  font-size: 0.9rem;
                }
                .article-body blockquote {
                  border-left: 3px solid #D4AF37;
                  padding-left: 1.25rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: #4A5568;
                }
                .article-body a {
                  color: #D4AF37;
                  text-decoration: underline;
                }
                .article-body code {
                  background: #F4F5F7;
                  padding: 0.1em 0.3em;
                  font-size: 0.9em;
                  border-radius: 2px;
                }
              `}</style>
              <div
                className="article-body"
                dangerouslySetInnerHTML={{
                  __html: article.contentHtml && article.contentHtml.length > 100
                    ? article.contentHtml
                    : renderContent(article.content)
                }}
              />

              {/* End-of-Article Advisory Bridge */}
              <div
                className="mt-12 p-8"
                style={{ backgroundColor: "#F4F5F7", borderLeft: "3px solid #D4AF37" }}
              >
                <p className="teeva-section-label mb-2">Mid-Market Leader?</p>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}
                >
                  The TEEVA Commercial Growth OS is the done-for-you implementation of the frameworks in this article — engineered for companies with $20M–$150M in revenue. If you are a CEO, CFO, or PE Operating Partner with a commercial growth mandate, we welcome the conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/os" className="teeva-btn-gold text-xs">
                    Explore the Growth OS
                  </Link>
                  <Link href="/contact" className="teeva-btn-outline-navy text-xs">
                    Book a Commercial Gap Analysis
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Strategic Advisory Sidebar — soft B2B mention */}
                <div
                  className="p-5 mb-6"
                  style={{ backgroundColor: "#0F2439" }}
                >
                  <p className="teeva-section-label mb-2">TEEVA Advisory</p>
                  <p className="text-white/70 text-xs leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Integrated Fractional CIO and CISO leadership for mid-market companies.
                  </p>
                  <Link
                    href="/advisory"
                    className="text-xs font-semibold uppercase tracking-wide transition-colors"
                    style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More →
                  </Link>
                </div>

                <p className="teeva-section-label mb-4">More Articles</p>
                <div className="space-y-4">
                  {relatedArticles.slice(0, 4).map((related) => (
                    <Link
                      key={related.slug}
                      href={`${backPath}/${related.slug}`}
                      className="block group"
                    >
                      <div className="py-3" style={{ borderBottom: "1px solid #F4F5F7" }}>
                        <span
                          className="text-xs uppercase tracking-wide block mb-1"
                          style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                        >
                          {related.category}
                        </span>
                        <p
                          className="text-sm font-medium leading-snug group-hover:underline"
                          style={{ color: "#0F2439", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                        >
                          {related.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={backPath}
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                  >
                    ← All Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
