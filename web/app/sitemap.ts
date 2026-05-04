import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { getAllIssueSlugs } from '@/lib/issues';
import { TOOLS } from '@/lib/tools';
import { POSTS } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/issues', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/how', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/quiz', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/tools', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/b2b', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/online', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/expat', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/trust', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const issueRoutes = getAllIssueSlugs().map((slug) => ({
    path: `/issues/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const toolRoutes = TOOLS.map((t) => ({
    path: `/tools/${t.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  const blogRoutes = POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...issueRoutes, ...toolRoutes, ...blogRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${SITE_URL}${path}`,
        ru: `${SITE_URL}${path}?lang=ru`,
      },
    },
  }));
}
