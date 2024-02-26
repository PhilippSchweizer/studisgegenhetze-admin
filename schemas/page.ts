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
