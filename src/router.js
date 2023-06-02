import { createRouter, createWebHashHistory } from 'vue-router';


import MarketPlace from './pages/MarketPlace';
import PerfilUsuario from './pages/PerfilUsuario';
import VistaProducto from './pages/VistaProducto';

const routes = [

  {
    name: 'marketplace',
    path: '/marketplace',
    component: MarketPlace
  },
  {
    name: 'perfil_usuario',
    path: '/perfil_usuario',
    component: PerfilUsuario
  },
  {
    name: 'vista_producto',
    path: '/vista_producto',
    component: VistaProducto
  }

];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
