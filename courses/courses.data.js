import { createDirectus, rest, readItems } from '@directus/sdk'

export default {
  load: async () => await createDirectus('https://schooldb.chromatone.center/')
    .with(rest())
    .request(readItems('courses', {}))
}