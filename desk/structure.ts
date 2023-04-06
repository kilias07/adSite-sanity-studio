import {StructureResolver} from 'sanity/lib/exports/desk';
import {portfolioTypes} from '../schemas/portfolio/works';
import pages from './pages';

const excludeTypes = ['about', 'post', 'portfolioAnimation', ...portfolioTypes, 'portfolioCycle'];

export const myStructureTest: StructureResolver = (S) =>
  S.list()
    .title('Assets')
    .items([
      pages(S),
      ...S.documentTypeListItems().filter((listItem) => !excludeTypes.includes(listItem.getId()!)),
    ]);
