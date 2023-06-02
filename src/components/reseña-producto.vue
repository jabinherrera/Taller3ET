<template>
    <div>
        <div v-for="reviewp in reviewsp" :key="reviewp._id" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="reviewp.product.images[0]" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ reviewp.name }}</h5>
        <p class="card-text">{{ reviewp.review }}</p>
       
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
        this.reviewsp = response
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