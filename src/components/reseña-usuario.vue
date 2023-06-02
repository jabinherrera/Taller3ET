<template>

<div class="container-fluid">
      <div v-for="review in reviews" :key="review._id" class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="review.product.images[0]" class="img-sm rounded-start" style="height: 200px;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ review.product.name }}</h5>
          <p class="card-text">{{ review.product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { fetchData } from '../services/data-reseña-usuario.js';

export default {
  data() {
    return {
      reviews: [], // Datos obtenidos de la API
    };
  },
  mounted() {
    this.fetchDataFromAPI();
  },
  methods: {
    async fetchDataFromAPI() {
      try {
        const response = await fetchData();
        this.users = response.user
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>

</style>