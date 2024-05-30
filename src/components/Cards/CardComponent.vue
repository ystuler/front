<script setup>
import {ref} from 'vue';

const isFlipped = ref(false);
const show = ref(false);
const props = defineProps({
  answer: String,
  question: String
})
const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<template>
  <div class="flip-card">
    <div :class="['flip-card-inner', { flipped: isFlipped }]">
      <div class="flip-card-front">
        <p class="title">Вопрос</p>
        <p class="content">{{ question }}</p>
        <div @click="flipCard" class="corner plus">+</div>
        <div @click="flipCard" class="corner minus">-</div>
      </div>
      <div class="flip-card-back" @mouseover="show = true" @mouseleave="show = false">
        <p class="title">Ответ</p>
        <p class="content">{{ answer }}</p>
        <div v-show="show" class="corner arow"> ></div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.flip-card {
  background-color: transparent;
  width: 14vw;
  height: 16vw;
  position: relative;
}

.title {
  font-size: 2em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
  padding: 10px; /* Add padding to avoid overflow */
  box-sizing: border-box; /* Ensure padding is included in the total width and height */
}

.flip-card-front {
  background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
  );
  color: coral;
}

.flip-card-back {
  background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
  );
  color: white;
  transform: rotateY(180deg);
}

.content {
  height: 10vw;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
}

.content::-webkit-scrollbar {
  width: 4px;
}

.content::-webkit-scrollbar-thumb {
  background: coral; /* Coral color for the scrollbar thumb */
  border-radius: 2px; /* Round edges for the scrollbar thumb */
}

.content::-webkit-scrollbar-track {
  background: #f2f2f2; /* Light background for the scrollbar track */
  border-radius: 2px; /* Round edges for the scrollbar track */
}

/* Firefox scrollbar styles */
.content {
  scrollbar-width: thin;
  scrollbar-color: coral #f2f2f2;
}

.corner {
  position: absolute;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

.plus {
  bottom: 10px;
  left: 10px;
  color: coral;
}

.minus {
  bottom: 10px;
  right: 10px;
  color: #ea4d14;
}

.plus:hover,
.minus:hover {
  color: darkorange;
}

.arow {
  bottom: 1px;
  right: 2px;
  color: #d54b19;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.arow:hover {
  color: #d17427;
  animation: hoverPulse 0.6s infinite;
}

@keyframes hoverPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>
