/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField } from 'sanity'

export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
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
    {
      type: 'string',
      name: 'heroTitle',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    defineField({
      type: 'object',
      name: 'heroLink',
      fields: [
        {
          type: 'string',
          name: 'text',
          validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
          type: 'string',
          name: 'url',
          validation: (Rule: { required: () => any }) => Rule.required(),
        },
      ],
    }),
    {
      type: 'image',
      name: 'heroImage',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
}
