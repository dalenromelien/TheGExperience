import {defineType} from 'sanity'

export default defineType({
  name: 'carousel',
  type: 'array',
  title: 'Carousel',
  of: [
    {
      type: 'image',
      name: 'carouselItem',
      title: 'Carousel Item',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'imgUrl',
          type: 'image',
          title: 'Image URL',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
})
