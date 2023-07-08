export default {
  name: 'post',
  type: 'document',
	title: 'Post',
  fields: [
    {type: 'string', name: 'title'},
    {type: 'text', name: 'description'},
    {type: 'image', name: 'image'},
    {type: 'string', name: 'slug'},
    {type: 'date', name: 'date'},
    {type: 'array', of: [
      {
        name: 'author',
        type: 'reference',
        title: 'Author',
        to: [{type: 'author' }]
      }
    ], name: 'authors'},
    {type: 'array', of: [
      {type: 'block'}, 
      {type: 'image'},
    ], name: 'postContent'},
  ]
}
