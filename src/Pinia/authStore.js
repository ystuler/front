import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
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
    async getProfile() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('http://localhost:8000/profile', {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        });

        this.user = { ...this.user, ...response.data };
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Profile fetched successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Fetching profile failed:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async updateUsername(newUsername) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.put('http://localhost:8000/profile/username', {
          username: newUsername
        }, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        });

        this.user.username = newUsername;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Username updated successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Updating username failed:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async updatePassword(oldPassword, newPassword) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.put('http://localhost:8000/profile/password', {
          old_password: oldPassword,
          new_password: newPassword
        }, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        });

        console.log('Password updated successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Updating password failed:', this.error);
      } finally {
        this.loading = false;
      }
    },
    startLogoutTimer() {
      if (this.logoutTimer) clearTimeout(this.logoutTimer);

      this.logoutTimer = setTimeout(() => {
        this.logout();
      }, 300000); // 5 minutes
    },
    resetLogoutTimer() {
      if (this.user) {
        this.startLogoutTimer();
      }
    },
  },
});