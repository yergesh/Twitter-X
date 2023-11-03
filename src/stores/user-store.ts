import { CurrentUser } from '@/types/RegistrationModel'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user-store', {
  state: () => ({
    ...new CurrentUser()
  } as CurrentUser),
  persist: true,
  actions: {
    logoutUser() {
      try {
        this.$state = new CurrentUser();
      } catch {
        
      }
    }
  }

})
