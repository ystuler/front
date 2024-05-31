import { defineStore } from 'pinia';
import axios from 'axios';

export const useCardStore = defineStore('card', {
  state: () => ({
    cards: JSON.parse(localStorage.getItem('cards')) || [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCardsByCollectionID(collectionID) {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.get(`http://localhost:8000/collections/${collectionID}/cards`, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        this.cards = response.data;
        localStorage.setItem('cards', JSON.stringify(this.cards));
        console.log('Cards fetched successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to fetch cards:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async createCard(collectionID, front, back) {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.post(`http://localhost:8000/collections/${collectionID}/cards`, {
          front,
          back,
        }, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        this.cards.push(response.data);
        localStorage.setItem('cards', JSON.stringify(this.cards));
        console.log('Card created successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to create card:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async deleteCard(cardID) {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        await axios.delete(`http://localhost:8000/cards/${cardID}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        this.cards = this.cards.filter(card => card.id !== cardID);
        localStorage.setItem('cards', JSON.stringify(this.cards));
        console.log('Card deleted successfully');
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to delete card:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async updateCard(cardID, front, back) {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.put(`http://localhost:8000/cards/${cardID}`, {
          front,
          back,
        }, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        // Обновляем карточку в массиве cards
        for (let i = 0; i < this.cards.length; i++) {
          if (this.cards[i].id === cardID) {
            this.cards[i] = response.data;
            break;
          }
        }

        localStorage.setItem('cards', JSON.stringify(this.cards));
        console.log('Card updated successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to update card:', this.error);
      } finally {
        this.loading = false;
      }
    },
  },
});
