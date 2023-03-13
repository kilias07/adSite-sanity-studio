import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'portfolioAnimation',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      type: 'object',
      name: 'labels',
      title: 'Labels',
      options: {
        collapsible: true,
        collapsed: false,
        modal: {type: 'popover'},
      },
      fields: [
        {
          title: 'Top Label',
          name: 'topLabel',
          type: 'string',
          initialValue: 'rysunek',
          description: 'Górny duży napis na animacji',
          options: {
            required: true,
          },
        },
        {
          title: 'Bottom Label',
          name: 'bottomLabel',
          initialValue: 'rzeźba',
          description: 'Dolny mały napis na animacji',
          type: 'string',
          options: {
            required: true,
          },
        },
        {
          title: 'Short description',
          name: 'shortDescription',
          type: 'text',
          options: {
            required: true,
            rows: 3,
          },
          initialValue: `Wybrane prace zrealizowane w latach 2014 - ${new Date().getFullYear()}`,
        },
      ],
    }),
    defineField({
      name: 'animationImages',
      type: 'object',
      title: 'Animation Images',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'mainImageAnimation',
          type: 'image',
          title: 'Main Image Animation',
          options: {
            hotspot: true,
            metadata: ['palette', 'lqip'],
          },
        },
        {
          name: 'leftTopImageAnimation',
          type: 'image',
          title: 'Left Top Image Animation',
          options: {
            hotspot: true,
            metadata: ['palette', 'lqip'],
          },
        },
        {
          name: 'rightTopImageAnimation',
          type: 'image',
          title: 'Right Top Image Animation',
          options: {
            hotspot: true,
            metadata: ['palette', 'lqip'],
          },
        },
        {
          name: 'leftBottomImageAnimation',
          type: 'image',
          title: 'Left Bottom Image Animation',
          options: {
            hotspot: true,
            metadata: ['palette', 'lqip'],
          },
        },
        {
          name: 'rightBottomImageAnimation',
          type: 'image',
          title: 'Right Bottom Image Animation',
          options: {
            hotspot: true,
            metadata: ['palette', 'lqip'],
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Portfolio Animation',
      };
    },
  },
});
