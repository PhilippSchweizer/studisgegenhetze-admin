import {defineField, defineType} from 'sanity'
import {DashboardIcon} from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Seite',
  type: 'document',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
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
      name: 'isNav',
      title: 'Navigationseite',
      type: 'boolean',
      description: 'Wenn aktiviert wird diese Seite in der Navigation angezeigt.',
    }),

    defineField({
      name: 'isBlog',
      title: 'Blogseite',
      type: 'boolean',
      description:
        'Wenn aktiviert fungiert diese Seite als Blog. Welche Kategorien angezeigt werden, kann dann weiter unten eingestellt werden.',
    }),
    defineField({
      name: 'blogCategories',
      title: 'Kategorien',
      type: 'array',
      readOnly: ({document}) => !document?.isBlog,
      of: [{type: 'reference', to: [{type: 'tag'}]}],
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
