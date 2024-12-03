import { ref, onMounted, onUnmounted } from 'vue'

export function useHash() {
  const hash = ref(window.location.hash.slice(1))

  const updateHash = () => {
    hash.value = window.location.hash.slice(1)
  }

  const setHash = (newHash) => {
    window.location.hash = newHash
  }

  onMounted(() => {
    window.addEventListener('hashchange', updateHash)
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', updateHash)
  })

  return {
    hash,
    setHash
  }
}