<script setup lang="ts">
import { useRoute } from "vue-router";
const location = useRoute();
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();
</script>
<template>
<nav class="navbar navbar-expand-lg fixed-top" style="background-color: rgb(0, 48, 52);">

    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img
              src="@/assets/images/logo_libreria_librarte.png"
              class="about-image img-fluid smaller-image"
            />
      </RouterLink>
      <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-none ms-auto me-4">
        Iniciar Sesión
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
          <li class="nav-item">
  <RouterLink to="/" class="btn btn-primary" style="font-size: 1.4em;">Inicio</RouterLink>
</li>

          &nbsp;&nbsp;
          <li class="nav-item">
            <RouterLink to="/about" class="btn btn-primary" style="font-size: 1.4em;"
              >Catálogos</RouterLink>
            &nbsp;&nbsp;
          </li>
          <li class="nav-item">
  <RouterLink v-if="authStore.token" to="/interpretes" class="btn btn-primary" style="font-size: 1.4em;">Productos</RouterLink>
</li>


     
        </ul>
        <RouterLink v-if="!authStore.token" to="/login" class="btn btn-primary">
          Iniciar Sesión
        </RouterLink>
        <a v-else @click="authStore.logout()" class="btn btn-danger">
          Cerrar Sesión
        </a>
      </div>
    </div>
  </nav>
</template>
<style>
  .smaller-image {
  width: 340px; /* Ajusta el ancho según tus necesidades */
  height: auto; /* Ajusta la altura proporcionalmente */
}


</style>
