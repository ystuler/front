import { defineStore } from 'pinia';
import axios from 'axios';

export const useCollectionStore = defineStore('collection', {
  state: () => ({
    collections: JSON.parse(localStorage.getItem('collections')) || [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCollections() {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.get('http://localhost:8000/collections', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        this.collections = response.data;
        localStorage.setItem('collections', JSON.stringify(this.collections));
        console.log('Collections fetched successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to fetch collections:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async createCollection(Name, Description) {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.post('http://localhost:8000/collections', {
          Name,
          Description,
        }, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        this.collections.push(response.data);
        localStorage.setItem('collections', JSON.stringify(this.collections));
        console.log('Collection created successfully:', response.data);
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to create collection:', this.error);
      } finally {
        this.loading = false;
      }
    },
  },
});
