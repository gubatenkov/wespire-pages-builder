import { BookIcon } from '@sanity/icons'

export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  icon: BookIcon,
  fields: [
    {
      name: 'pageMeta',
      type: 'pageMeta',
      title: 'Add page meta',
      description: 'This fields are required and important for SEO'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short description of the article',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Recommended to use only lowercase letters, numbers and dashes in slugs',
      options: {
        source: 'title',
        maxLength: 150
      },
      validation: Rule => {
        // spaces regex
        const regEx1 = /\s+/g
        // special chars regex
        const regEx2 = /[&\/\\#,+()$~%.'":*?<>{}]/g
        return Rule.custom(slug => {
          if (!slug?.current) {
            return 'Required'
          } else if (slug.current.match(regEx1)) {
            return 'No spaces in slug'
          } else if (slug.current.match(regEx2)) {
            return 'No special characters in slug'
          }
          return true
        })
      }
    },
    {
      name: 'imageData',
      type: 'object',
      title: 'Article image',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          name: 'category',
          title: 'Choose a category',
          type: 'reference',
          to: { type: 'category' },
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required()
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Description',
              validation: Rule => Rule.required()
            }
          ]
        },
        {
          title: 'Quote',
          value: 'quote',
          name: 'quote',
          type: 'object',
          fields: [
            {
              name: 'quoteText',
              type: 'text',
              title: 'Quote Text',
              validation: Rule => Rule.required()
            },
            {
              name: 'quoteAuthor',
              type: 'string',
              title: 'Quote Author',
              validation: Rule => Rule.required()
            },
            {
              name: 'quoteAuthorJob',
              type: 'string',
              title: 'Quote Author Position',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'form',
      type: 'object',
      title: 'Form',
      description: 'There are several forms to choose from',
      fields: [
        {
          name: 'isForm',
          type: 'boolean',
          title: 'Show form under the blog cards',
          validation: Rule => Rule.required()
        },
        {
          name: 'form',
          type: 'array',
          title: 'List of forms',
          of: [
            { type: 'ctaForm' },
            { type: 'eventForm' },
            { type: 'subscribeForm' },
            { type: 'authorsQuoteForm' }
          ],
          validation: Rule => Rule.required().length(1)
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'related',
      type: 'array',
      title: 'Related blogs',
      of: [
        {
          name: 'blog',
          title: 'Choose an article',
          type: 'reference',
          to: { type: 'article' },
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required().max(3)
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      validation: Rule => Rule.required()
    }
  ]
}
