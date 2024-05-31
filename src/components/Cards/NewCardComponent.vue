<script setup>
import { ref } from 'vue';

const isFlipped = ref(false);
const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<template>
  <RouterLink to="/createscard" class="flip-card">
    <div :class="['flip-card-inner', { flipped: isFlipped }]">
      <div class="flip-card-front">
        <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" id="plus">
          <g fill="none" fill-rule="evenodd" stroke="#FF7F50" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2 2)">
            <line x1="10" x2="10" y1="6.327" y2="13.654"></line>
            <line x1="13.667" x2="6.333" y1="9.99" y2="9.99"></line>
            <path d="M14.6857143,0 L5.31428571,0 C2.04761905,0 0,2.31208373 0,5.58515699 L0,14.414843 C0,17.6879163 2.03809524,20 5.31428571,20 L14.6857143,20 C17.9619048,20 20,17.6879163 20,14.414843 L20,5.58515699 C20,2.31208373 17.9619048,0 14.6857143,0 Z"></path>
          </g>
        </svg>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 14vw;
  height: 16vw;
  position: relative;
  cursor: pointer;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
}

.card__icon {
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
</style>
