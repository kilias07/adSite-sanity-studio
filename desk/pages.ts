import {
  BsCollection,
  BsFillCollectionFill,
  BsPersonCircle,
  CgStack,
  ImNewspaper,
  MdAnimation,
} from 'react-icons/all';
import {StructureBuilder} from 'sanity/lib/exports/desk';
import {portfolioTypes} from '../schemas/portfolio/works';

const pages = (S: StructureBuilder) =>
  S.listItem()
    .title('Content')
    .child(
      S.list()
        .title('Pages')
        .items([
          S.listItem()
            .title('About')
            .icon(BsPersonCircle)
            .child(S.document().schemaType('about').documentId('about')),
          S.listItem()
            .title('Blog')
            .icon(ImNewspaper)
            .child(S.documentTypeList('post').title('Posts')),
          S.listItem()
            .title('Portfolio')
            .icon(CgStack)
            .child(
              S.list()
                .title('Portfolio')
                .items([
                  S.listItem()
                    .title('Animation')
                    .icon(MdAnimation)
                    .child(
                      S.document().schemaType('portfolioAnimation').documentId('portfolioAnimation')
                    ),
                  S.divider(),
                  ...portfolioTypes.map((type) =>
                    S.listItem()
                      .title(type)
                      .icon(BsFillCollectionFill)
                      .child(
                        S.documentTypeList(type).title(
                          `${type[0].toUpperCase() + type.substring(1)} works`
                        )
                      )
                  ),
                  S.divider(),
                  S.listItem()
                    .title(`Cycles`)
                    .icon(BsCollection)
                    .child(S.documentTypeList('portfolioCycle').title(`Cycles`)),
                ])
            ),
        ])
    );

export default pages;
