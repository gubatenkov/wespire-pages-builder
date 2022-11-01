import { UlistIcon } from '@sanity/icons'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: UlistIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      title: 'Category color',
      type: 'colorPicker',
      validation: Rule => Rule.required()
    }
  ]
}