import {defineField, defineType, Image} from 'sanity';

export function generateCategory(category: string) {
  return defineType({
    name: category,
    title: 'portfolio ' + category,
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'cycle',
        title: 'Cycle',
        type: 'reference',
        to: {type: 'portfolioCycle'},
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 5,
      }),
      defineField({
        name: 'gallery',
        type: 'object',
        title: 'Gallery',
        fields: [
          {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
              {
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                  hotspot: true,
                  metadata: ['palette', 'lqip'],
                },
              },
            ],
            options: {
              layout: 'grid',
            },
          },
        ],
      }),
      defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      }),
    ],

    preview: {
      select: {
        title: 'title',
        media: 'gallery',
      },
      prepare({media, ...rest}) {
        if (!media) {
          return {...rest};
        }
        const mainImage = media.images.filter((img: Image) => img.mainImage === true);
        return mainImage ? {media: mainImage[0], ...rest} : {media: media.images[0], ...rest};
      },
    },
  });
}

//Here you can add more categories into schema
export const portfolioTypes = ['sculptures', 'drawings', 'graphics', 'orders', 'outdoor'];
export const portfolioContent = portfolioTypes.map((el) => generateCategory(el));
