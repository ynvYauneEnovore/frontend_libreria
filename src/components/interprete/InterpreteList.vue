<script setup lang="ts">
import type { Interprete } from '@/models/producto'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import Header from "../Header.vue";


const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var interpretes = ref<Interprete[]>([])

async function getInterpretes() {
  interpretes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/interpretes/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Intérprete?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getInterpretes())
  }
}

onMounted(() => {
  getInterpretes()
})
</script>

<template>
    <Header />
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Intérpretes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Intérpretes</h2>
      <div class="col-12">
        <RouterLink to="/interpretes/crear">Crear Nuevo</RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(interprete, index) in interpretes.values()" :key="interprete.id_producto">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ interprete.Nombre }}</td>
            <td>{{ interprete.Precio }}</td>
            <td>{{ interprete.Descripción }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(interprete.id_producto)">Editar</button>
              <button class="btn btn-link" @click="toDelete(interprete.id_producto)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>

