import { cache } from 'react'
import customClient from './customClient'

export const clientFetch = cache(customClient.fetch.bind(customClient))
