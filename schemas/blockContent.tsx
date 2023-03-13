import {GoLink, GoLinkExternal} from 'react-icons/go';
import {defineArrayMember, defineType} from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',

      styles: [
        {title: 'nagłówek trocha mnijszy drugi', value: 'h2'},
        {title: 'jeszcze mnijszy czeci', value: 'h3'},
        {title: 'czworty', value: 'h4'},
        {title: 'pjonty', value: 'h5'},
        {title: 'szósty', value: 'h6'},
        {title: 'Kłot', value: 'blockquote'},
        {title: 'ajnfachowy', value: 'normal'},
      ],
      lists: [
        {title: 'Kulki', value: 'bullet'},
        {title: 'Cyferki', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Tu mosz rubego teksta', value: 'strong'},
          {title: 'Tu mosz kopniętego teksta', value: 'em'},
          {title: 'A tu z kolei skrziwionego teksta', value: 'underline'},
          {title: 'I na koniec przekreślonego teksta', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'external Link',
            name: 'externalLink',
            type: 'object',
            icon: GoLinkExternal,
            fields: [
              {
                title: 'URL',
                name: 'externalURL',
                type: 'url',
              },
            ],
          },
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'reference',
            icon: GoLink,
            to: {type: 'post'},
          },
        ],
      },
    }),
    defineArrayMember({
      title: 'ôbrŏzek',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
});
