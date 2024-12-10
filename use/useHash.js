import { ref, computed, onMounted, onUnmounted } from "vue";

const hash = ref('')
let initiated = false

export function useHash() {
  const changeHash = () => hash.value = window.location.hash.slice(1)
  if (!initiated) {
    initiated = true
    onMounted(() => { changeHash(); window.addEventListener('hashchange', changeHash) }
    )
    onUnmounted(() => window.removeEventListener('hashchange', changeHash))
  }
  return hash
}
