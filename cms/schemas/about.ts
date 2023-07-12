/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      type: 'string',
      name: 'seoTitle',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      type: 'text',
      name: 'seoDescription',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      type: 'image',
      name: 'seoImage',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      type: 'array',
      name: 'aboutUs',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [
        {type: 'block'},
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'AltText',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
