<script setup>
import CardComponent from "../components/Cards/CardComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import CollectionCardsComponent from "../components/CollectionCardsComponent.vue";
import CollectionCreateCardComponent from "../components/CollectionCreateCardComponent.vue";
import BackGroundComponent from "../components/BackGroundComponent.vue";
import RegFormComponent from "../components/RegFormComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import NewCardComponent from "../components/Cards/NewCardComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="wrapper">
    <div class="center-container">
      <CardComponent answer="тут очень сложная формула " question="какуя ту самую формулу ты знаешь?" ></CardComponent>
      <CardComponent answer="тут очень сложная формула " question="какуя ту самую формулу ты знаешь?" ></CardComponent>
      <CardComponent answer="тут очень сложная формула " question="какуя ту самую формулу ты знаешь?" ></CardComponent>
      <NewCardComponent class="margin"></NewCardComponent>
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
