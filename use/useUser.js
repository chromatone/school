import { createDirectus, authentication, rest, readMe, registerUser } from '@directus/sdk'
import { onMounted, ref } from 'vue'


const user = ref(null)

const userDB = createDirectus('https://schooldb.chromatone.center/')
  .with(authentication('cookie', { credentials: 'include', autoRefresh: true }))
  .with(rest({ credentials: 'include' }));

export function useUser() {

  onMounted(async () => {
    userDB.refresh()
    if (await userDB.getToken()) {
      loadProfile()
    }
  })

  async function auth(exists, email, password) {
    if (exists) {
      await userDB.request(registerUser(email, password))
      registered.value = true
    } else {
      await userDB.login(email, password)
      loadProfile()
    }
  }

  async function loadProfile() {
    user.value = await userDB.request(readMe())
  }


  return { user, userDB, auth }
}