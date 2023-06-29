import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BienvenidoView.vue'
import LoginView from "@/views/LoginView.vue";
import { useAuthStore } from '@/stores';
import { getTokenFromLocalStorage } from '@/helpers';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: "/login", name: "login", component: LoginView  },
    {
      path: '/catproducto',
      name: 'catproducto',
      component: () => import('../views/CatProductoView.vue'),
      children: [
      { path: '', component: () => import('../components/catproducto/CatProductoList.vue') },
      { path: 'crear', component: () => import('../components/catproducto/CatProductoCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/catproducto/CatProductoEdit.vue')
      }
      ]
    },
    
    {
      path: '/producto',
      name: 'producto',
      component: () => import('../views/ProductoView.vue'),
      children: [
      { path: '', component: () => import('../components/producto/ProductoList.vue') },
      { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/producto/ProductoEdit.vue')
      }
      ]
    },

    {
      path: '/venta',
      name: 'venta',
      component: () => import('../views/ProductoVentaView.vue'),
      children: [
      { path: '', component: () => import('../components/ventas/VentaList.vue') },
      { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/producto/ProductoEdit.vue')
      }
      ]
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async to => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout();
    authStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router
