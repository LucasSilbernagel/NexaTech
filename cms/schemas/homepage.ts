import { defineField } from "sanity";

export default {
  name: 'homepage',
  type: 'document',
	title: 'Homepage',
  fields: [
    {type: 'string', name: 'heroTitle'},
    defineField({
      type: 'object',
      name: 'heroLink',
      fields: [
        {type: 'string', name: 'text'},
        {type: 'string', name: 'url'}
      ]
    }),
    {type: 'image', name: 'heroImage'},
  ]
}
