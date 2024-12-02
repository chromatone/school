import { createDirectus, rest, readItems } from '@directus/sdk'


export default {
  load: async () => await createDirectus((process.env || import.meta.env).VITE_DB_URL)
    .with(rest())
    .request(readItems('courses', {}))
}