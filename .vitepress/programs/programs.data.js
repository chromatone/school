import { createDirectus, rest, readItems } from '@directus/sdk'

export default {
  async load() {
    try {
      return await createDirectus('https://schooldb.chromatone.center/')
        .with(rest())
        .request(readItems('programs', {
          sort: 'sort',
          fields: ['*', 'courses.*', 'courses.program.*', 'courses.teacher.*', 'courses.classes.module.title', 'courses.classes.date']
        }))
    } catch (e) {
      console.log('Programs fetch failed')
      return []
    }
  }
}