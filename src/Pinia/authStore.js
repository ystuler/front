import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
    logoutTimer: null,
  }),
  actions: {
    async register(username, password) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:8000/auth/signup', {
          username,
          password,
        });

        this.user = response.data;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Registration successful:', response.data);
        this.startLogoutTimer();
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Registration failed:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async login(username, password) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:8000/auth/login', {
          username,
          password,
        });

        this.user = response.data;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Login successful:', response.data);
        this.startLogoutTimer();
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Login failed:', this.error);
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        this.logoutTimer = null;
      }
      console.log('User logged out.');
    },
    startLogoutTimer() {
      if (this.logoutTimer) clearTimeout(this.logoutTimer);

      this.logoutTimer = setTimeout(() => {
        this.logout();
      }, 300000);
    },
    resetLogoutTimer() {
      if (this.user) {
        this.startLogoutTimer();
      }
    },
  },
});
