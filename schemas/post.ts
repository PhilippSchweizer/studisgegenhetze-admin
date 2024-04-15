import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Beitrag',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Untertitel',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Anwählen, wenn dieser Beitrag prominenter auf der Seite erscheinen soll.',
      initialValue: false,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'authors',
      title: 'Autoren',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'author'}]}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Schlagwörter',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlichung',
      type: 'date',
      description: 'Datum der Veröffentlichung dieses Beitrags',
      initialValue: () => {
        const date = new Date()
        return `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Auszug',
      type: 'blockContentSimple',
      description:
        'Soll Lust darauf machen, den Artikel zu lesen. Wenn es den Anfang des Artikels darstellt, trotzdem unten nochmal mit aufnehmen.',
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'authors.0.name',
      author1: 'authors.1.name',
      author2: 'authors.2.name',
      author3: 'authors.3.name',
      media: 'mainImage',
    },
    prepare: ({title, author0, author1, author2, author3, media}) => {
      const authors = [author0, author1, author2, author3].filter(Boolean)
      const subtitle = authors.length > 1 ? `${authors.join(', ')}` : `${authors}`
      const hasMoreAuthors = Boolean(author2)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}...` : subtitle,
        media,
      }
    },
  },
})
