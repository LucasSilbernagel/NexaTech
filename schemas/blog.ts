/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      type: 'string',
      name: 'seoTitle',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'text',
      name: 'seoDescription',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'image',
      name: 'seoImage',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
}
