import { groq } from 'next-sanity';

export const allPostsQuery = groq`
  *[_type == "post"] | order(date desc) {
    "slug": slug.current,
    titleEn,
    titleRu,
    date,
    categoryEn,
    categoryRu,
    "bgImage": bgImage.asset->url,
    metaDescEn,
    metaDescRu,
    readingMinutes,
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    titleEn,
    titleRu,
    date,
    categoryEn,
    categoryRu,
    "bgImage": bgImage.asset->url,
    metaDescEn,
    metaDescRu,
    readingMinutes,
    bodyEn,
    bodyRu,
  }
`;

export interface SanityPostMeta {
  slug: string;
  titleEn: string;
  titleRu: string;
  date: string;
  categoryEn: string;
  categoryRu: string;
  bgImage?: string;
  metaDescEn?: string;
  metaDescRu?: string;
  readingMinutes?: number;
}

export interface SanityPost extends SanityPostMeta {
  bodyEn?: unknown[];
  bodyRu?: unknown[];
}
