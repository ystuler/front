<script setup>
import CardComponent from "./CardComponent.vue";
import FormComponent from "./FormComponent.vue";
import CollectionCardsComponent from "./CollectionCardsComponent.vue";
import CollectionCreateCardComponent from "./CollectionCreateCardComponent.vue";
import BackGroundComponent from "./BackGroundComponent.vue";
</script>

<template>
  <div class="center-container">
  <CollectionCardsComponent name="Вологин" description="тут все билеты по вологину"></CollectionCardsComponent>
  </div>
  <back-ground-component></back-ground-component>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
