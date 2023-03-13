import {BsPersonCircle, ImNewspaper} from 'react-icons/all';
import {StructureBuilder} from 'sanity/lib/exports/desk';

const pages = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
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
            .child(
              S.list()
                .title('Portfolio')
                .items([
                  S.listItem()
                    .title('Portfolio Animation')
                    .child(
                      S.document().schemaType('portfolioAnimation').documentId('portfolioAnimation')
                    ),
                ])
            ),
        ])
    );

export default pages;
