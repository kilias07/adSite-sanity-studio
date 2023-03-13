import {StructureResolver} from 'sanity/lib/exports/desk';
import pages from './pages';

const excludeTypes = ['about', 'post', 'portfolioAnimation'];

export const myStructureTest: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      pages(S),
      ...S.documentTypeListItems().filter((listItem) => !excludeTypes.includes(listItem.getId()!)),
    ]);
