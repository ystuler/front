<script setup>

</script>

<template>
  <div class="card" @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseLeave">
    <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" id="plus">
      <g fill="none" fill-rule="evenodd" stroke="#FF7F50" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2 2)">
        <line x1="10" x2="10" y1="6.327" y2="13.654"></line>
        <line x1="13.667" x2="6.333" y1="9.99" y2="9.99"></line>
        <path d="M14.6857143,0 L5.31428571,0 C2.04761905,0 0,2.31208373 0,5.58515699 L0,14.414843 C0,17.6879163 2.03809524,20 5.31428571,20 L14.6857143,20 C17.9619048,20 20,17.6879163 20,14.414843 L20,5.58515699 C20,2.31208373 17.9619048,0 14.6857143,0 Z"></path>
      </g>
    </svg>

  </div>
</template>

<script>
export default {
  methods: {
    handleMouseDown(event) {
      event.currentTarget.style.transform = 'scale(0.95)';
    },
    handleMouseUp(event) {
      event.currentTarget.style.transform = 'scale(1)';
    },
    handleMouseLeave(event) {
      event.currentTarget.style.transform = 'scale(1)';
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  width: 350px;
  aspect-ratio: 16/9;
  background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
  );
  border: 1px solid coral;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.card__icon {
  width: 48px;
  height: 48px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__icon {
  transform: scale(1.2);
  stroke: #FF7F50;
}

.card__name {
  margin: 10px 0 0;
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  color: DarkOrange;
}

.card__image {
  width: 100%;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__description {
  margin: 10px 0;
  font-size: 1em;
  line-height: 1.4;
}

.card__buttons {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.card__button {
  padding: 10px;
  border-radius: 8px;
  background: #ea4d14;
  border: none;
  color: white;
}

.secondary {
  background: transparent;
  color: #ea4d14;
  border: 1px solid #ea4d14;
}

.card__button:hover, .secondary:hover {
  background: darkorange;
  color: white;
}
</style>
