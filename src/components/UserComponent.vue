<template>
  <HeaderComponent></HeaderComponent>
  <div class="user-container">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="!user">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="username" placeholder="Username" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <h2>Register</h2>
        <form @submit.prevent="register">
          <input v-model="username" placeholder="Username" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
      <div v-else>
        <h2>Profile</h2>
        <p>Username: {{ user.username }}</p>
        <form @submit.prevent="updateUsername">
          <input v-model="newUsername" placeholder="New Username" required />
          <button type="submit">Update Username</button>
        </form>
        <form @submit.prevent="updatePassword">
          <input v-model="oldPassword" type="password" placeholder="Old Password" required />
          <input v-model="newPassword" type="password" placeholder="New Password" required />
          <button type="submit">Update Password</button>
        </form>
      </div>
    </div>
  </div>
  <back-ground-component></back-ground-component>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from "../Pinia/authStore.js";
import HeaderComponent from "./HeaderComponent.vue";
import BackGroundComponent from "./BackGroundComponent.vue";

export default {
  components: { BackGroundComponent, HeaderComponent },
  setup() {
    const store = useUserStore();
    const username = ref('');
    const password = ref('');
    const newUsername = ref('');
    const oldPassword = ref('');
    const newPassword = ref('');

    const user = computed(() => store.user);
    const loading = computed(() => store.loading);
    const error = computed(() => store.error);

    const register = () => {
      store.register(username.value, password.value);
    };

    const login = () => {
      store.login(username.value, password.value);
    };

    const logout = () => {
      store.logout();
    };

    const fetchProfile = () => {
      store.getProfile();
    };

    const updateUsername = () => {
      store.updateUsername(newUsername.value);
    };

    const updatePassword = () => {
      store.updatePassword(oldPassword.value, newPassword.value);
    };

    return {
      username,
      password,
      newUsername,
      oldPassword,
      newPassword,
      user,
      loading,
      error,
      register,
      login,
      logout,
      fetchProfile,
      updateUsername,
      updatePassword
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.user-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid coral;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
  );
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
}

form {
  margin-bottom: 20px;
}

form input::placeholder {
  font-family: 'Press Start 2P', Arial, sans-serif;
  font-size: 0.8rem;
  color: coral;
}

form input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid rgb(255, 211, 195);
  border-radius: 4px;
  background-color: rgb(255, 231, 222);
  font-family: 'Press Start 2P', Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

form button {
  width: 100%;
  padding: 10px;
  background-color: coral;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Press Start 2P', Arial, sans-serif;
  font-size: 0.7rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

form button:hover {
  background-color: #ed5c27;
}

form button:active {
  transform: scale(0.95);
}

.error {
  color: red;
  margin-top: 10px;
}

.signup-link {
  color: rgb(255, 127, 80);
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
  color: coral;
}

.signup-link a:hover {
  color: darkorange;
}
</style>
