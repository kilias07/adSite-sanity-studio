import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {media} from 'sanity-plugin-media';
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Andrzej Dromert',

  projectId: '2xuqyt6i',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem().title('about').child(S.document().schemaType('about').documentId('about')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['about'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});
