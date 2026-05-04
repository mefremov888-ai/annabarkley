import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { getPostContent } from '@/lib/blog-content';
import { SITE_URL } from '@/lib/config';
import { ogImage } from '@/lib/og';
import { BlogArticle } from './BlogArticle';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

interface Params {
  params: { slug: string };
}

export function generateMetadata({ params }: Params): Metadata {
  const meta = getPostBySlug(params.slug);
  if (!meta) return {};
  return {
    title: `${meta.t.en} | Anna Barkley`,
    description: meta.metaDesc.en,
    alternates: {
      canonical: `/blog/${meta.slug}`,
    },
    openGraph: {
      title: meta.t.en,
      description: meta.metaDesc.en,
      url: `/blog/${meta.slug}`,
      type: 'article',
      publishedTime: meta.date,
      images: ogImage({ kind: 'blog', title: meta.t.en, subtitle: meta.cat.en }),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.t.en,
      description: meta.metaDesc.en,
      images: ogImage({ kind: 'blog', title: meta.t.en, subtitle: meta.cat.en }),
    },
  };
}

export default function Page({ params }: Params) {
  const meta = getPostBySlug(params.slug);
  const content = getPostContent(params.slug);
  if (!meta || !content) notFound();

  // JSON-LD: Article schema for SEO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.t.en,
    description: meta.metaDesc.en,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      '@type': 'Person',
      name: 'Anna Barkley',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Anna Barkley — Psychologist',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${meta.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogArticle meta={meta} content={content} />
    </>
  );
}
