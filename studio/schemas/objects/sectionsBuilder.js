export default {
  name: 'sectionsBuilder',
  type: 'object',
  title: 'Page builder',
  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'List of page sections',
      of: [
        { name: 'blogTemplate', type: 'blogTemplate' },
        { name: 'productTemplate', type: 'productTemplate' },
        { name: 'whyWespireTemplate', type: 'whyWespireTemplate' },
        { name: 'solutionsOverviewTemplate', type: 'solutionsOverviewTemplate' },
        { name: 'heroVideo', type: 'heroVideo' },
        { name: 'heroSection', type: 'heroSection' },
        { name: 'capabilitiesSection', type: 'capabilitiesSection' },
        { name: 'heroInfoSection', type: 'heroInfoSection' },
        { name: 'heroImageAndForm', type: 'heroImageAndForm' },
        { name: 'imageSection', type: 'imageSection' },
        { name: 'openingsPressSection', type: 'openingsPressSection' },
        { name: 'quoteSection', type: 'quoteSection' },
        { name: 'valuesSection', type: 'valuesSection' },
        { name: 'contentSection', type: 'contentSection' },
        { name: 'longSection', type: 'longSection' },
        { name: 'sliderSection', type: 'sliderSection' },
        { name: 'cardsSection', type: 'cardsSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ],
      validation: Rule => Rule.required()
    }
  ]
}