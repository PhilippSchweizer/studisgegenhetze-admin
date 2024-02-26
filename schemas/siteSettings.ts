import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Einstellungen',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Seitenbeschreibung (für Suchmaschinen)',
      type: 'text',
    }),
  ],
})
