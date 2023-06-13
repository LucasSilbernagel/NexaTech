import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'cms',

  projectId: 'k8h63h1t',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  document: {
    actions: (prev) => prev.filter(action => action.action !== 'delete' && action.action !== 'duplicate' && action.action !== 'unpublish')
  },

  schema: {
    types: schemaTypes,
  },
})
