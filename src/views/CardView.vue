<template>
  <HeaderComponent></HeaderComponent>
  <div class="wrapper">
    <div class="center-container">
      <div v-for="collection in collections" :key="collection.id">
        <CollectionCardsComponent :id="collection.id" :name="collection.name" :description="collection.description"></CollectionCardsComponent>
      </div>
      <CollectionCreateCardComponent class="margin" @create="createCollection"></CollectionCreateCardComponent>
    </div>
  </div>
  <BackGroundComponent></BackGroundComponent>
</template>

<script setup>
import {ref, onMounted, watch, computed} from 'vue';
import {useCollectionStore} from '../Pinia/collectionStore.js';
import HeaderComponent from "../components/HeaderComponent.vue";
import CollectionCardsComponent from "../components/CollectionCardsComponent.vue";
import CollectionCreateCardComponent from "../components/CollectionCreateCardComponent.vue";
import BackGroundComponent from "../components/BackGroundComponent.vue";

const collectionStore = useCollectionStore();
const collections = ref([]);

const extractCollections = (data) => {
  if (Array.isArray(data)) {
    return data;
  } else if (typeof data === 'object' && data !== null) {
    return data.items || data.collections || Object.values(data);
  }
  return [];
};

const logCollections = (collections) => {
  console.log('Type of collections:', typeof collections);
  console.log('Is collections an array?', Array.isArray(collections));
  if (Array.isArray(collections)) {
    collections.forEach(collection => {
      console.log('Collection ID:', collection.id);
      console.log('Collection Name:', collection.name);
      console.log('Collection Description:', collection.description);
    });
  } else {
    console.warn('Collections is not an array:', collections);
  }
};

onMounted(async () => {
  await collectionStore.fetchCollections();
  collections.value = extractCollections(collectionStore.collections);
  console.log('Initial collections:', collections.value);
  logCollections(collections.value);
});

watch(() => collectionStore.collections, (newCollections) => {
  collections.value = extractCollections(newCollections);
  console.log('Updated collections:', collections.value);
  logCollections(collections.value);
});

const loading = computed(() => collectionStore.loading);
const error = computed(() => collectionStore.error);

const createCollection = async (name, description) => {
  await collectionStore.createCollection(name, description);
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 25vh; /* Отступ сверху равный четверти высоты экрана */
  overflow: hidden; /* Скрываем прокрутку */
}

.center-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* Расстояние между элементами */
  justify-content: center;
  align-items: center;
  padding: 16px;
}
</style>
