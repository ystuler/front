<script setup>
import { ref } from 'vue';

const isFlipped = ref(false);

const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<template>
  <div class="flip-card">
    <div :class="['flip-card-inner', { flipped: isFlipped }]">
      <div class="flip-card-front" @click="flipCard">
        <p class="title">FLIP CARD</p>
        <p>Click Plus or Minus</p>
        <div class="corner plus">+</div>
        <div class="corner minus">-</div>
      </div>
      <div class="flip-card-back" @click="flipCard">
        <p class="title">BACK</p>
        <p>Click Plus or Minus</p>
        <div class="corner plus">+</div>
        <div class="corner minus">-</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
  position: relative;
}

.title {
  font-size: 1.5em;
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
  color: coral;
}

.plus:hover,
.minus:hover {
  color: darkorange;
}
</style>
