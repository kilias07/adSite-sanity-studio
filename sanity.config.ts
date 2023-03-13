import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {media} from 'sanity-plugin-media';
import {deskTool} from 'sanity/desk';
import {myStructureTest} from './desk/structure';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Andrzej Dromert',

  projectId: '2xuqyt6i',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructureTest,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});
