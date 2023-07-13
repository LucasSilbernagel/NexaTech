/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      type: 'string',
      name: 'title',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'text',
      name: 'description',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'image',
      name: 'image',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'string',
      name: 'slug',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'date',
      name: 'date',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'array',
      name: 'authors',
      validation: (Rule: { required: () => any }) => Rule.required(),
      of: [
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: [{ type: 'author' }],
        },
      ],
    },
    {
      type: 'array',
      name: 'postContent',
      validation: (Rule: { required: () => any }) => Rule.required(),
      of: [
        { type: 'block' },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'AltText',
              validation: (Rule: { required: () => any }) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
