<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import Header from "../Header.vue";
import Footer from "../Footer.vue";

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const Nombre = ref('')
const Precio = ref('')
const Descripción = ref('')

async function crearInterprete() {
  await http
    .post(ENDPOINT, { Nombre: Nombre.value, Precio: Precio.value, Descripción: Descripción.value })
    .then(() => router.push('/interpretes'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <Header />
  <br>
 <h2 class="intro-y text-lg font-medium">Crear Producto</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button class="btn btn-primary" @click="goBack">Volver</button>
            <div class="hidden md:block mx-auto text-slate-500">
            </div>
            <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
                  <li class="breadcrumb-item active" aria-current="page">Producto</li>
                </ol>
              </nav>
            </div>
            
        </div>
    </div>
    <form @submit.prevent="crearInterprete">
  <div class="form-floating mb-3">
    <input type="text" class="form-control" v-model="Nombre" placeholder="Nombre" required />
    <label for="nombre">Nombre</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" v-model="Precio" placeholder="Precio" required />
    <label for="precio">Precio</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" v-model="Descripción" placeholder="Descripción" required />
    <label for="descripcion">Descripción</label>
  </div>
  <div class="text-center mt-3">
    <button type="submit" class="btn btn-success btn-lg">Crear</button>
  </div>
</form>

  <Footer />
</template>

<style></style>
