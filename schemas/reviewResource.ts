import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviewResource',
  title: 'rezensiertes Werk',
  type: 'object',
  options: {
    collapsible: true,
  },
  // fieldsets: [{name: 'meta', title: 'Metadaten des Werks', options: {collapsible: true}}],
  fields: [
    defineField({
      name: 'resourceImage',
      title: 'Buchcover, Filmplakat, o.ä.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'resourceTitle',
      title: 'Titel des Werks',
      type: 'string',
      // fieldset: 'meta',
    }),
    defineField({
      name: 'resourceAuthor',
      title: 'Autor/Urheber des Werks',
      type: 'string',
      // fieldset: 'meta',
    }),
    defineField({
      name: 'resourcePublishedAt',
      title: 'Erscheinungsdatum des Werks',
      type: 'date',
      description: 'Datum der Veröffentlichung des rezensierten Werks',
      // fieldset: 'meta',
    }),
  ],
})
