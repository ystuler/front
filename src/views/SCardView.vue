<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCardStore } from '../Pinia/cardStore.js';
import HeaderComponent from "../components/HeaderComponent.vue";
import BackGroundComponent from "../components/BackGroundComponent.vue";
import CardComponent from "../components/Cards/CardComponent.vue";
import NewCardComponent from "../components/Cards/NewCardComponent.vue";

const cardStore = useCardStore();
const route = useRoute();
const router = useRouter();
const cards = ref([]);
const collectionID = computed(() => route.params.id);
console.log(route.params.id);
const goToCreateSCard = () => {
  router.push({ path: '/createscard', query: { collectionID: collectionID.value } });
};
console.log('Collection ID:', collectionID.value);

const extractCards = (data) => {
  if (Array.isArray(data)) {
    return data;
  } else if (typeof data === 'object' && data !== null) {
    return data.items || data.cards || Object.values(data);
  }
  return [];
};

const logCards = (cards) => {
  console.log('Type of cards:', typeof cards);
  console.log('Is cards an array?', Array.isArray(cards));
  if (Array.isArray(cards)) {
    cards.forEach(card => {
      console.log('Card ID:', card.id);
      console.log('Card Front:', card.question);
      console.log('Card Back:', card.answer);
    });
  } else {
    console.warn('Cards is not an array:', cards);
  }
};

onMounted(async () => {
  console.log('Fetching cards for collection ID:', collectionID.value);
  await cardStore.fetchCardsByCollectionID(collectionID.value);
  cards.value = extractCards(cardStore.cards);
  console.log('Initial cards:', cards.value);
  logCards(cards.value);
});

watch(() => cardStore.cards, (newCards) => {
  cards.value = extractCards(newCards);
  console.log('Updated cards:', cards.value);
  logCards(cards.value);
});

const loading = computed(() => cardStore.loading);
const error = computed(() => cardStore.error);
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="wrapper">
    <div class="center-container">
      <CardComponent
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :answer="card.answer"
        :question="card.question"
        :edit="false"
      />
      <NewCardComponent @click="goToCreateSCard" :collection-id="collectionID.value" />
    </div>
  </div>
  <BackGroundComponent></BackGroundComponent>
</template>


<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 15vh;
  overflow: hidden;
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
