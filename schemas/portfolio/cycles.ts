import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'portfolioCycle',
  title: 'Portfolio Cycle',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Cycle',
      type: 'string',
    }),
  ],
});
