<template>
    <div>
      <UsuarioPerfil/>
      <ReseñaUsuario/>
    </div>
</template>
      
      <script>
    import ReseñaUsuario from '../components/reseña-usuario.vue';
    import UsuarioPerfil from '../components/usuario-perfil.vue';
      
      export default {
        components: { ReseñaUsuario, UsuarioPerfil }
      
    }
      </script>
      
      <style>
    
      </style>