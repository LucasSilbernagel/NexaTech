export default {
  name: 'about',
  type: 'document',
	title: 'About',
  fields: [
    {type: 'string', name: 'seoTitle'},
    {type: 'text', name: 'seoDescription'},
    {type: 'image', name: 'seoImage'},
    {type: 'array', of: [
      {type: 'block'}, 
      {type: 'image'},
    ], name: 'aboutUs'},
  ]
}
