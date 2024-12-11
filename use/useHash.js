import { ref, computed, onMounted, onUnmounted } from "vue";


export function useHash() {
  const hash = ref('')
  const changeHash = () => hash.value = window.location.hash.slice(1)

  onMounted(() => {
    changeHash();
    window.addEventListener('hashchange', changeHash)
  })
  onUnmounted(() => window.removeEventListener('hashchange', changeHash))

  return hash
}
