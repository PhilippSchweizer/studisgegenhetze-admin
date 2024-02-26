import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'review',
  title: 'Rezension',
  type: 'document',
  icon: BookIcon,
  groups: [{name: 'resourceMetadata', title: 'Daten zum rezensierten Werk'}],
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
      name: 'publishedAt',
      title: 'Veröffentlichung',
      type: 'date',
      description: 'Datum der Veröffentlichung dieser Rezension',
    }),
    defineField({
      name: 'resource',
      title: 'Rezensiertes Werk',
      type: 'reviewResource',
    }),
    defineField({
      name: 'resourceCategory',
      title: 'Art des Werks',
      type: 'string',
      options: {
        list: ['Buch', 'Sammelband', 'Artikel', 'Spielfilm', 'Dokumentarfilm'],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Auszug',
      type: 'blockContent',
      description:
        'Soll Lust darauf machen, die Rezension zu lesen. Wenn es den Anfang des Artikels darstellt, trotzdem unten nochmal mit aufnehmen.',
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
      const subtitle = authors.length > 1 ? `von ${authors.join(', ')}` : `von ${authors}`
      const hasMoreAuthors = Boolean(author2)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}...` : subtitle,
        media,
      }
    },
  },
})
