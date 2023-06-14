<script setup lang="ts">
import "@/assets/js/jquery.min.js";
import "@/assets/js/bootstrap.min.js";
import "@/assets/js/jquery.sticky.js";
import "@/assets/js/click-scroll.js";
import "./assets/js/custom.js";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
  </main>
  <Footer />
</template>

<style>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/bootstrap-icons.css";
@import "@/assets/css/templatemo-festava-live.css";
</style>
