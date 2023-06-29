<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import Header from "../Header.vue"
import Footer from "../Footer.vue"

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const precio = ref('')
const descripcion = ref('')
const estado = ref('')
const imagen = ref('')
const min = ref('')
const max = ref('')
const stock = ref('')
const catproducto = ref('')

async function crearProducto() {
  await http
    .post(ENDPOINT, {
      nombre: nombre.value,
      precio: precio.value,
      descripcion: descripcion.value,
      estado: estado.value,
      imagen: imagen.value,
      min: min.value,
      max: max.value,
      stock: stock.value,
      catproducto: catproducto.value
    })
    .then(() => router.push('/producto'))
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
    <!-- ... -->
  </div>
  <form @submit.prevent="crearProducto">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
      <label for="nombre">Nombre</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" v-model="precio" placeholder="Precio" required />
      <label for="precio">Precio</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="descripcion" placeholder="Descripción" required />
      <label for="descripcion">Descripción</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="imagen" placeholder="Imagen" required />
      <label for="imagen">Imagen</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="min" placeholder="Mínimo" required />
      <label for="min">Mínimo</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="max" placeholder="Máximo" required />
      <label for="max">Máximo</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="stock" placeholder="Stock" required />
      <label for="stock">Stock</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="catproducto" placeholder="Stock" required />
      <label for="catproducto">Stock</label>
    </div>
    <div class="text-center mt-3">
    <button type="submit" class="btn btn-success btn-lg">Crear</button>
  </div>>
  </form>
  <Footer />
</template>

<style></style>
