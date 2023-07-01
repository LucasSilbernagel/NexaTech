import { defineArrayMember, defineField } from "sanity";

export default {
  name: 'shop',
  type: 'document',
	title: 'Shop',
  fields: [
    {type: 'string', name: 'seoTitle'},
    {type: 'text', name: 'seoDescription'},
    {type: 'image', name: 'seoImage'},
    defineField({
      name: "slides",
      type: "array",
      title: "Image carousel slides",
      of: [
        defineArrayMember({
          type: 'object',
          name: 'slide',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'altText'},
          ]
        })
      ]
    }),
  ]
}
