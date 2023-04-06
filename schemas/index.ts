import about from './about';
import blockContent from './blockContent';
import portfolioCycles from './portfolio/cycles';
import portfolioAnimation from './portfolio/portfolioAnimation';
import {portfolioContent} from './portfolio/works';
import post from './post';

export const schemaTypes = [
  post,
  about,
  portfolioAnimation,
  blockContent,
  portfolioCycles,
  ...portfolioContent,
];
