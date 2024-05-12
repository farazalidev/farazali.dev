/* eslint-disable import/no-default-export -- its required to use default export*/
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'farazali.dev',

  projectId: '2tqtanc4',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema({})],

  schema: {
    types: schemaTypes,
  },
})
