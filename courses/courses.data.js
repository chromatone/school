import { client } from "../database"
import { readItems } from '@directus/sdk'

export default {
  load: async () => await client.request(readItems('courses', {}))
}