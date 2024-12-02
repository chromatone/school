import { createDirectus, rest, readItems } from '@directus/sdk'

const client = createDirectus('https://schooldb.chromatone.center/').with(rest())


export default {
  async paths() {

    const courses = await client.request(readItems('courses', {
      fields: [
        '*'
      ]
    }))

    return courses.map(course => {
      let content = course.content
      delete course.content
      return {
        params: {
          ...course,
          course: course.title
        },
        content
      }
    })
  }
}