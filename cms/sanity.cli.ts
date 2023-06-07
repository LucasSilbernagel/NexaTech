import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.CMS_PROJECT_ID,
    dataset: 'production'
  }
})
