import {defineArrayMember, defineField} from 'sanity'

export default {
  name: 'shop',
  type: 'document',
  title: 'Shop',
  fields: [
    {type: 'string', name: 'seoTitle'},
    {type: 'text', name: 'seoDescription'},
    {type: 'image', name: 'seoImage'},
    {type: 'string', name: 'productName'},
    {type: 'number', name: 'price'},
    {type: 'number', name: 'salePrice'},
    {type: 'text', name: 'description'},
    defineField({
      name: 'slides',
      type: 'array',
      title: 'Image carousel slides',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'slide',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'altText'},
          ],
        }),
      ],
    }),
  ],
}
