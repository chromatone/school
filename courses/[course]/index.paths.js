import { useItems } from "../../database"

export default {
  async paths() {

    const courses = await useItems('courses', {
      fields: [
        '*'
      ]
    })

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