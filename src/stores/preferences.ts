import { defineStore } from 'pinia'
import { watch } from 'vue'
export const usePreferences = defineStore('preferences', {
  state: () => ({
    theme: 'light'
  }),
  persist: true,
  actions: {
    toggleTheme() {
      if(this.theme == 'dark')
        this.theme = 'light';
      else this.theme = 'dark';
    }
  }
})
