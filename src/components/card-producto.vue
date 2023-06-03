<template>
    <div v-for="producto in products" :key="producto._id" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="producto.images[0]" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ producto.name }}</h5>
        <p class="card-text">{{ producto.price }}</p>
        <p class="card-text">{{ producto.description }}</p>
        <p class="card-text"><small class="text-body-secondary">{{ producto.updatedAt }}</small></p>
        <div><router-link to="/vista_producto">Ver detalles</router-link></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { fetchData } from '../services/data-card-producto.js';

export default {
  name : "CardProducto",

data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchDataFromAPI();
  },
  methods: {
    async fetchDataFromAPI() {
      try {
        const response = await fetchData();
        this.products = response
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>

</style>