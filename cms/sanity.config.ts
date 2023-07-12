import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["about", "blog", "homepage", "navbar", "shop"])

export default defineConfig({
  name: 'default',
  title: 'cms',

  projectId: 'k8h63h1t',
  dataset: 'production',

  plugins: [deskTool({
    structure: (S) =>
      S.list()
        .title("Content")
        .items([

          // Singleton items
          S.listItem()
            .title("About")
            .id("about")
            .child(
              S.document()
                .schemaType("about")
                .documentId("about")
            ),
            S.listItem()
            .title("Blog")
            .id("blog")
            .child(
              S.document()
                .schemaType("blog")
                .documentId("blog")
            ),
            S.listItem()
            .title("Homepage")
            .id("homepage")
            .child(
              S.document()
                .schemaType("homepage")
                .documentId("homepage")
            ),
            S.listItem()
            .title("Navbar")
            .id("navbar")
            .child(
              S.document()
                .schemaType("navbar")
                .documentId("navbar")
            ),
            S.listItem()
            .title("Shop")
            .id("shop")
            .child(
              S.document()
                .schemaType("shop")
                .documentId("shop")
            ),

          // Regular document types
          S.documentTypeListItem("author").title("Authors"),
          S.documentTypeListItem("post").title("Posts"),
        ]),
  }), visionTool()],

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
})