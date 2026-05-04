import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ISSUES, getAllIssueSlugs, getIssueBySlug } from '@/lib/issues';
import { ogImage } from '@/lib/og';
import { IssueDetail } from './IssueDetail';

export function generateStaticParams() {
  return getAllIssueSlugs().map((slug) => ({ slug }));
}

interface Params {
  params: { slug: string };
}

export function generateMetadata({ params }: Params): Metadata {
  const issue = getIssueBySlug(params.slug);
  if (!issue) return {};
  return {
    title: `${issue.t.en} Therapy in Dubai`,
    description: issue.metaDesc.en,
    alternates: {
      canonical: `/issues/${issue.slug}`,
    },
    openGraph: {
      title: `${issue.t.en} Therapy — Anna Barkley`,
      description: issue.metaDesc.en,
      url: `/issues/${issue.slug}`,
      images: ogImage({ kind: 'issues', title: `${issue.t.en} support` }),
    },
    twitter: {
      card: 'summary_large_image',
      images: ogImage({ kind: 'issues', title: `${issue.t.en} support` }),
    },
  };
}

export default function IssuePage({ params }: Params) {
  const issue = getIssueBySlug(params.slug);
  if (!issue) notFound();

  // JSON-LD: MedicalCondition
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: issue.t.en,
    description: issue.metaDesc.en,
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Mind' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IssueDetail issue={issue} />
    </>
  );
}
