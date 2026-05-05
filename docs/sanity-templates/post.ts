import { defineType, defineField, defineArrayMember } from 'sanity';

/**
 * Схема статьи блога. Билингв EN/RU. Тело статьи — Portable Text для каждого
 * языка. Категория и фон — простые поля.
 */
export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (EN)',
      type: 'string',
      validation: (r) => r.required().min(5).max(120),
    }),
    defineField({
      name: 'titleRu',
      title: 'Title (RU)',
      type: 'string',
      validation: (r) => r.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEn', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publication date',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'categoryEn',
      title: 'Category (EN)',
      type: 'string',
      options: {
        list: [
          { title: 'Children', value: 'Children' },
          { title: 'Teens', value: 'Teens' },
          { title: 'Adults', value: 'Adults' },
          { title: 'Parenting', value: 'Parenting' },
          { title: 'Families', value: 'Families' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'categoryRu',
      title: 'Category (RU)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bgImage',
      title: 'Background image',
      type: 'image',
      options: { hotspot: true },
      description: 'Используется для hero-блока статьи и карточки в /blog',
    }),
    defineField({
      name: 'metaDescEn',
      title: 'Meta description (EN)',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(180),
    }),
    defineField({
      name: 'metaDescRu',
      title: 'Meta description (RU)',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(180),
    }),
    defineField({
      name: 'readingMinutes',
      title: 'Reading time (minutes)',
      type: 'number',
      validation: (r) => r.min(1).max(60),
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body (EN)',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
      ],
    }),
    defineField({
      name: 'bodyRu',
      title: 'Body (RU)',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'titleRu',
      media: 'bgImage',
    },
  },
});
