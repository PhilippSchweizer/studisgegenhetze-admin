import {StructureBuilder} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      // The singleton type has a list item with a custom child
      S.listItem().title('Einstellungen').id('siteSettings').schemaType('siteSettings').child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType('siteSettings').documentId('siteSettings'),
      ),
      // Add a visual divider
      S.divider(),

      // Add the rest of the document types, but filter out siteSettings
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
      // S.documentTypeListItem('post').title('Posts'),
      // S.documentTypeListItem('page').title('Seiten'),
      // S.documentTypeListItem('author').title('Author'),
      // S.documentTypeListItem('category').title('Category'),
    ])
