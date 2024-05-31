<template>
  <header class="header">
    <nav>
      <ul>
        <li class="secret-button"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">SECRET BUTTON</a></li>
        <li v-if="isAuthenticated"><a @click.prevent="logout" href="#">Выйти</a></li>
        <li><a :href="isAuthenticated ? '/collections' : '/'">Коллекции</a></li>
        <li><a :href="isAuthenticated ? '/profile' : '/'">Профиль</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../Pinia/authStore.js';

const userStore = useUserStore();
const router = useRouter();

const isAuthenticated = computed(() => userStore.user !== null);

const logout = async () => {
  userStore.logout();
  await router.push('/');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.header {
  background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
  );
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'Press Start 2P', Arial, sans-serif;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  position: relative;
}

.header nav ul .secret-button {
  position: absolute;
  left: 20px;
}

.header nav ul li {
  margin: 0 15px;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.header nav ul li a:hover {
  color: #ffe4b5;
}
</style>
