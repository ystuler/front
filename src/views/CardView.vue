<script setup>
import CardComponent from "../components/Cards/CardComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import CollectionCardsComponent from "../components/CollectionCardsComponent.vue";
import CollectionCreateCardComponent from "../components/CollectionCreateCardComponent.vue";
import BackGroundComponent from "../components/BackGroundComponent.vue";
import RegFormComponent from "../components/RegFormComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="wrapper">
    <div class="center-container">
      <CollectionCardsComponent name="Вологин 1" description="тут вопросы по вологину бутут как то вот так"></CollectionCardsComponent>
      <CollectionCardsComponent name="Вологин 1" description="тут вопросы по вологину бутут как то вот так"></CollectionCardsComponent>
      <CollectionCardsComponent name="Вологин 1" description="тут вопросы по вологину бутут как то вот так"></CollectionCardsComponent>
      <CollectionCreateCardComponent class="margin"></CollectionCreateCardComponent>
    </div>
  </div>
  <BackGroundComponent></BackGroundComponent>
</template>

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
