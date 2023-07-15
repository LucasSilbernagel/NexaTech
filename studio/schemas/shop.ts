/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineArrayMember, defineField } from 'sanity'

export default {
  name: 'shop',
  type: 'document',
  title: 'Shop',
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
      name: 'productName',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'number',
      name: 'price',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    { type: 'number', name: 'salePrice' },
    {
      type: 'text',
      name: 'description',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    defineField({
      name: 'slides',
      type: 'array',
      title: 'Image carousel slides',
      validation: (Rule: { required: () => any }) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'slide',
          fields: [
            { type: 'image', name: 'image' },
            { type: 'string', name: 'altText' },
          ],
        }),
      ],
    }),
  ],
}
