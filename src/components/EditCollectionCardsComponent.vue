<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Импортируем useRouter
import { useCollectionStore } from '../Pinia/collectionStore.js';

const router = useRouter();

const collectionStore = useCollectionStore();
const route = useRoute();
const name = ref('');
const description = ref('');

const updateCollection = async () => {
  const id = route.params.id;
  await collectionStore.updateCollection(id, name.value, description.value);
    router.push('/collections');

};

const isFormValid = computed(() => {
  return name.value.trim() !== '' && description.value.trim() !== '';
});
</script>

<template>
  <div class="form-container">
    <form class="form" @submit.prevent="updateCollection">
      <p class="form-title">Редактирование коллекции</p>
      <div class="input-container">
        <input v-model="name" placeholder="Название" />
      </div>
      <div class="input-container">
        <input v-model="description" placeholder="Описание" />
      </div>
      <button :disabled="!isFormValid" class="submit" type="submit">
        Сохранить
      </button>
      <RouterLink to="/collections">
        <button class="submit">
          Отмена
        </button>
      </RouterLink>
    </form>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.input-container input::placeholder {
  font-family: 'Press Start 2P', Arial, sans-serif;
  font-size: 0.8rem;
  color: coral;
}

.input-container input {
  font-family: 'Press Start 2P', Arial, sans-serif;

}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
  );
  display: block;
  padding: 1rem;
  max-width: 350px;
  border-radius: 1rem;
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid coral;
}

.form-title {
  font-size: 1.3em;
  line-height: 1.75rem;
  font-weight: 900;
  text-align: center;
  color: coral;
  margin: 0;
}

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid rgb(255, 211, 195);
  margin: 8px 0;
}

.input-container input {
  background-color: rgb(255, 231, 222);
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-container span {
  display: grid;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  place-content: center;
}

.input-container span svg {
  color: coral;
  width: 1rem;
  height: 1rem;
}

.submit {
  font-family: 'Press Start 2P', Arial, sans-serif;

  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: coral;
  color: #ffffff;
  font-size: 0.7rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.submit:hover {
  background-color: #ed5c27;
}

.submit:active {
  transform: scale(0.95);
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
``