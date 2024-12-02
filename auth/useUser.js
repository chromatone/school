import { createDirectus, authentication, rest, readMe } from '@directus/sdk'
import { onMounted, ref } from 'vue'

export const userDB = createDirectus('https://schooldb.chromatone.center/')
  .with(authentication('cookie', { credentials: 'include', autoRefresh: true }))
  .with(rest({ credentials: 'include' }));

const user = ref(null)

export function useUser() {
  onMounted(async () => {
    userDB.refresh()
    if (await userDB.getToken()) {
      user.value = await userDB.request(readMe())
    }
  })
  return { user, userDB }
}