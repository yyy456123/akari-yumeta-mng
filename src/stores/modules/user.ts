import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (tk) => (token.value = tk)
    return { token, setToken }
  },
  {
    persist: true
  }
)
