import { defineStore } from 'pinia';
import axios from 'axios';
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      registerLoading: false
    }
  },
  actions: {
    async registerUser(payload: any) {
      this.registerLoading = true;
      try {
        const { data } = await axios.post('/api/users', payload);
        return data
      } catch (err: any) {
        const errorMsg = err.response?.data?.message || 'Registration failed';
        throw new Error(Array.isArray(errorMsg) ? errorMsg[0] : errorMsg);
      } finally {
        this.registerLoading = false;
      }
    }
  }
})