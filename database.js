import { createDirectus, rest, readItems } from '@directus/sdk'

export const client = createDirectus('https://schooldb.chromatone.center/').with(rest())

export async function useItems(collection, query) {
  try {
    return await client.request(readItems(collection, query))
  } catch (e) {
    console.log(e)
    return []
  }
}

