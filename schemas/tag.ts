import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'
import {Rule, StringRule, ValidationContext} from '@sanity/types'

export default defineType({
  name: 'tag',
  title: 'Schlagwort',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',

      validation: (rule: StringRule) =>
        rule.required().custom(async (title: string | undefined, context: ValidationContext) => {
          // Skip validation if updating an existing document
          if (!context?.document || !title) {
            return true
          }

          const client = context.getClient({apiVersion: '2024-03-25'})

          // Get the base document ID (remove the draft suffix)
          const baseID = context.document._id.replace(/^drafts\./, '')

          const query = `(
            *[
              _type == "tag" && 
              title == $title && 
              !(_id in [$currentId, $draftId])
            ]
          )`

          const duplicates = await client.fetch(query, {
            title: title?.trim(),
            currentId: baseID,
            draftId: `drafts.${baseID}`,
          })

          if (duplicates.length > 0) {
            return `Ein Schlagwort mit dem Titel "${title}" existiert bereits`
          }

          return true
        }),
    }),
  ],
})
