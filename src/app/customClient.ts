import { createClient } from 'next-sanity'

export default createClient({
  projectId: 'k8h63h1t',
  dataset: 'production',
  apiVersion: '2023-06-04',
  useCdn: true,
})
