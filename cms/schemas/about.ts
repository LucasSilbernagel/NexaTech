export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {type: 'string', name: 'seoTitle'},
    {type: 'text', name: 'seoDescription'},
    {type: 'image', name: 'seoImage'},
    {
      type: 'array',
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
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
          ],
        },
      ],
      name: 'aboutUs',
    },
  ],
}
