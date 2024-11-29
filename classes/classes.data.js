import { useItems } from "../database"

export default {
  async load() {
    const tools = await useItems('courses', {})
    return tools || []
  }
}