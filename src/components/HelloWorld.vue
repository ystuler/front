<script setup>
import CardComponent from "./CardComponent.vue";
import FormComponent from "./FormComponent.vue";
import CollectionCardsComponent from "./CollectionCardsComponent.vue";
import CollectionCreateCardComponent from "./CollectionCreateCardComponent.vue";
</script>

<template>
  <card-component></card-component>
</template>

<style scoped>
.center-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh; /* Make sure it takes the full height of the viewport */
  text-align: center;
}
</style>
