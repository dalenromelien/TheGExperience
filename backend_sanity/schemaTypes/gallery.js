export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'eventImages',
      type: 'array',
      title: 'Event Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'altText',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
  ],
}
