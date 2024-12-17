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

  const registered = ref(false)

  async function auth(exists, email, password) {
    if (!exists) {
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

  async function logout() {
    await userDB.logout()
    user.value = null
  }


  return { user, userDB, auth, logout, registered }
}