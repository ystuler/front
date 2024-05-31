<script setup>
import FormComponent from "../components/FormComponent.vue";
import BackGroundComponent from "../components/BackGroundComponent.vue";
import RegFormComponent from "../components/RegFormComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import CreateCardComponent from "../components/Cards/CreateCardComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="center-container">
    <CreateCardComponent></CreateCardComponent>
  </div>
  <BackGroundComponent></BackGroundComponent>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Занимает всю высоту экрана */
}
</style>
