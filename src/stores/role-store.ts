import { UserRole } from '@/types/RegistrationModel'
import { defineStore } from 'pinia'
export const useRoleStore = defineStore('role-store', {
  state: () => ({
    ...new UserRole()
  } as UserRole),
  persist: true,
  actions: {
    logoutUser() {
      try {
        this.$state = new UserRole();
      } catch {
        
      }
    }
  }

})
