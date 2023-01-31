import {defineField, defineType, Image} from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
          validation: (Rule) => [
            Rule.custom((images: Image[]) => {
              if (!images) {
                return true;
              }
              const alert = [];
              const hasElementAsMainImg = images.every((image) => image.mainImage === false);
              if (hasElementAsMainImg) alert.push('One image must be selected as main image');

              const hasDuplicates =
                new Set(
                  images.map((image) => {
                    if (image.asset !== undefined) {
                      return image.asset._ref;
                    }
                  })
                ).size !== images.length;
              if (hasDuplicates) alert.push('Duplicate images are not allowed');

              return alert.length > 0 ? alert.join(', ') : true;
            }),
            Rule.required().min(1),
          ],
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
                metadata: ['palette', 'lqip'],
              },
              fields: [
                {
                  name: 'mainImage',
                  type: 'boolean',
                  title: 'Main image',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: {type: 'media.tag'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'gallery',
    },
    prepare({media, ...rest}) {
      const mainImage = media.images.filter((img: Image) => img.mainImage === true);
      return mainImage ? {media: mainImage[0], ...rest} : {media: media.images[0], ...rest};
    },
  },
});
