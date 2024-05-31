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
    async deleteCollection(collectionId) {
      this.loading = true;
      this.error = null;

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        await axios.delete(`http://localhost:8000/collections/${collectionId}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        this.collections = this.collections.filter(collection => collection.id !== collectionId);
        localStorage.setItem('collections', JSON.stringify(this.collections));
        console.log('Collection deleted successfully');
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        console.log('Failed to delete collection:', this.error);
      } finally {
        this.loading = false;
      }
    },
async updateCollection(collectionId, Name, Description) {
  this.loading = true;
  this.error = null;

  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
      throw new Error('User not authenticated');
    }

    const response = await axios.put(`http://localhost:8000/collections/${collectionId}`, {
      Name,
      Description,
    }, {
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    });

    for (let i = 0; i < this.collections.length; i++) {
      if (this.collections[i].id === collectionId) {
        this.collections[i] = response.data;
        break;
      }
    }

    localStorage.setItem('collections', JSON.stringify(this.collections));
    console.log('Collection updated successfully:', response.data);
  } catch (error) {
    this.error = error.response ? error.response.data : error.message;
    console.log('Failed to update collection:', this.error);
  } finally {
    this.loading = false;
  }
},

  },
});
