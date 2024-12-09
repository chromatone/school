import { createDirectus, rest, readItems } from '@directus/sdk'

export default {
  async paths() {
    try {
      return await createDirectus('https://schooldb.chromatone.center/').with(rest()).request(readItems('programs', {
        fields: [
          '*', 'courses.*', 'courses.teacher.*'
        ]
      })).map(program => {
        let content = program.content
        delete program.content
        return {
          params: {
            ...program,
            program: program.slug
          },
          content
        }
      })
    } catch (e) {
      console.log('Programs paths fetch failed')
      return []
    }
  }
}