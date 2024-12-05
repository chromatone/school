import { createDirectus, realtime, staticToken } from '@directus/sdk'
import { onMounted, ref } from 'vue'

export const ws = createDirectus('https://schooldb.chromatone.center/').with(staticToken('ogbYm_VIY1zQ29J1BLd1Xf29EQnCjswk')).with(realtime())

const connected = ref(false)

export function useWS() {
  onMounted(async () => {
    await ws.connect()
    connected.value = true
  })
  return { ws, connected }
}