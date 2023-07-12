export default {
  name: 'navbar',
  type: 'document',
  title: 'Navbar',
  fields: [
    {
      type: 'image',
      name: 'logo',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
