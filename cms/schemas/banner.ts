import { defineField } from "sanity";

export default {
  name: 'banner',
  type: 'document',
	title: 'Banner',
  fields: [
    {type: 'text', name: 'bannerText'},
    defineField({
      type: 'object',
      name: 'bannerLink',
      fields: [
        {type: 'string', name: 'text'},
        {type: 'string', name: 'url'}
      ]
    })
  ]
}
