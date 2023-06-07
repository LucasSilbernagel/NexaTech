import { defineField } from "sanity";

export default {
  name: 'navbar',
  type: 'document',
	title: 'Navbar',
  fields: [
    defineField({
      type: 'object',
      name: 'logoLink',
      fields: [
        {type: 'image', name: 'image'},
        {type: 'string', name: 'ariaLabel'},
        {type: 'string', name: 'link'}
      ]
    })
  ]
}
