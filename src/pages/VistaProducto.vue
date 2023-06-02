<template>
    <div>
<CardProducto/>
<UsuarioPerfil/>
<ReseñaProducto/>

    </div>
</template>

<script>
import UsuarioPerfil from '../components/usuario-perfil.vue';
import CardProducto from '../components/card-producto.vue';
import ReseñaProducto from '../components/reseña-producto.vue';

    export default {
    components: { CardProducto, UsuarioPerfil, ReseñaProducto }
}
</script>

<style>

</style>