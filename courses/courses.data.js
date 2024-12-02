import { createDirectus, rest, readItems } from '@directus/sdk'
import { loadEnv } from 'vitepress'

export default {
  load: async () => await createDirectus(loadEnv('', process.cwd()).VITE_DB_URL)
    .with(rest())
    .request(readItems('courses', {}))
}