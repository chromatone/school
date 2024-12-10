import { createDirectus, rest, readItems } from '@directus/sdk'

export default {
  async paths() {
    let programs = []

    try {
      programs = await createDirectus('https://schooldb.chromatone.center/').with(rest()).request(readItems('programs', {
        fields: [
          '*', 'courses.*', 'courses.teacher.*'
        ]
      }))
    } catch (e) {
      console.log('Programs paths not loaded')
    }


    return programs.map(program => {
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
  }
}