<template>
    <div>
        <div v-for="review in reviewsp" :key="review._id" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="review.user.photo" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ review.user.name }}</h5>
        <p class="card-text">{{ review.review }}</p>
        <div><router-link to="/perfil_usuario">Ver perfil</router-link></div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    import { fetchData } from '../services/data-reseña-producto.js';

export default {
  data() {
    return {
      reviewsp: [],
    };
  },
  mounted() {
    this.fetchDataFromAPI();
  },
  methods: {
    async fetchDataFromAPI() {
      try {
        const response = await fetchData();
        this.reviewsp = response.reviews
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>

</style>