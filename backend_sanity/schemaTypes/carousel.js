import {type} from '@testing-library/user-event/dist/cjs/utility/type.js'

export default {
  name: 'carouselImage',
  type: 'document',
  title: 'Carousel Image',
  fields: [
    {
      name: 'imgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'Image URL',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
}
