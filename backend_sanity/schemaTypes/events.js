import {type} from '@testing-library/user-event/dist/cjs/utility/type.js'

export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title,',
    },
    {
      name: 'imgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'Image URL',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
    {
      name: 'signupLink',
      type: 'string',
      title: 'Signup Link',
    },
  ],
}
