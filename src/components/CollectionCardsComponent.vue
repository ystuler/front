<script setup>
const description = 'Описание карточки тутутутутутуту ............... Описание карточки тутутутутутуту ............... Описание карточки тутутутутутуту ............... Описание карточки тутутутутутуту ............... Описание карточки тутутутутутуту ...............';
const name = 'Название';
</script>

<template>
  <div class="card">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
    </svg>
    <p class="card__name">{{ name }}</p>

    <div class="card__content">
      <p class="card__title">{{ name }}</p>
      <div class="card__description">{{ description }}</div>
      <div class="card__buttons">
        <button class="card__button">Изучить</button>
        <button class="card__button secondary">Удалить</button>
        <button class="card__button secondary">Редактировать</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__name {
  margin: 10px 0 0;
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  color: coral;
}

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
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
  width: 48px;
  fill: coral;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

.card__title {
  margin: 0;
  font-size: 1.8em;
  font-weight: 900;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0;
  font-size: 1em;
  line-height: 1.4;
  height: 80px; /* Set a fixed height */
  overflow: auto; /* Add scroll bar if content overflows */
}

.card__description::-webkit-scrollbar {
  width: 4px; /* Thin scrollbar */
}

.card__description::-webkit-scrollbar-thumb {
  background: coral; /* Coral color for the scrollbar thumb */
  border-radius: 2px; /* Round edges for the scrollbar thumb */
}

.card__description::-webkit-scrollbar-track {
  background: #f2f2f2; /* Light background for the scrollbar track */
  border-radius: 2px; /* Round edges for the scrollbar track */
}

/* Firefox scrollbar styles */
.card__description {
  scrollbar-width: thin;
  scrollbar-color: coral #f2f2f2;
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
  color: #ffffff;
  border: 1px solid #ea4d14;
}

.card__button:hover, .secondary:hover {
  background: darkorange;
  color: white;
}
</style>
