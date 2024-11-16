import {defineType, defineArrayMember} from 'sanity'
import {CgInternal} from 'react-icons/cg'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Absatz', value: 'normal'},
        {title: 'Überschrift (Ebene 1)', value: 'h2'},
        {title: 'Überschrift (Ebene 2)', value: 'h3'},
        {title: 'Überschrift (Ebene 3)', value: 'h4'},
        {title: 'Blockzitat', value: 'blockquote'},
      ],
      lists: [
        {title: 'Aufzählung', value: 'bullet'},
        {title: 'Nummerierung', value: 'number'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'Interner Link',
            name: 'internalLink',
            type: 'object',
            icon: CgInternal,
            fields: [
              {
                title: 'Referenz',
                name: 'reference',
                type: 'reference',
                to: [{type: 'post'}, {type: 'page'}],
              },
            ],
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})

// Internal link implementation here and in the frontend gleaned from this repo: https://github.com/Fruup/spanischer-verein/blob/main/packages/sanity/schemas/blockContent.ts
