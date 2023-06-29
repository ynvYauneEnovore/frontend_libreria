<script setup lang="ts">
import type { Producto } from '@/models/producto'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import Header from "../Header.vue";
import Footer from "../Footer.vue";

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var productos = ref<Producto[]>([])

async function getProducto() {
  productos.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/producto/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Intérprete?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProducto())
  }
}

onMounted(() => {
  getProducto()
})
</script>

<template>
    <Header />

    <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-4" v-for="(producto, index) in productos" :key="producto.id">
  <div class="box bg-info p-5 cursor-pointer zoom-in">
    <div class="font-medium text-base">{{ producto.nombre }}</div>
    <div class="text-slate-500">{{ producto.precio }}</div>
  </div>
</div>

             

    <Footer />

</template>

<style scoped></style>

