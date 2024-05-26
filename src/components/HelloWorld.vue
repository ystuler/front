<script setup>
import CardComponent from "./CardComponent.vue";
import FormComponent from "./FormComponent.vue";
import CollectionCardsComponent from "./CollectionCardsComponent.vue";
import CollectionCreateCardComponent from "./CollectionCreateCardComponent.vue";
</script>

<template>
  <div class="center-container">
  <card-component answer="Ответ" question="Вопрос"></card-component>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
