<template>

<div class="container-fluid">
    <div v-if="user" class="card" style="width: 18rem;">
  <img :src="user.photo" class="rounded" style="height: 200px;">
  <div class="card-body">
    <h3> {{ user.name }}</h3>
    <h2> {{ user.city }}</h2>
    <p class="card-text">{{ user.bio }}</p>
  </div>
    </div>
</div>


</template>
    
    <script>
    import { fetchData } from '../services/data-reseña-usuario.js';
    
    export default {
      data() {
        return {
          user: null // Datos obtenidos de la API
        };
      },
      mounted() {
        this.fetchDataFromAPI();
      },
      methods: {
        async fetchDataFromAPI() {
          try {
            const response = await fetchData();
            this.user = response.user
          } catch (error) {
            console.error(error);
          }
        },
      },
    };
    </script>
    
    <style>
    
    </style>