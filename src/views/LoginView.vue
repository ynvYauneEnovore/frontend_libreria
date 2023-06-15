<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/index";

const usuario = ref("");
const clave = ref("");
const error = ref(false);

function onSubmit() {
  const authStore = useAuthStore();
  authStore.login(usuario.value, clave.value).catch(() => (error.value = true));
}
</script>

<template>
      <div class="container sm:px-10">
            <div class="block xl:grid grid-cols-2 gap-4">
                <!-- BEGIN: Login Info -->
                <div class="hidden xl:flex flex-col min-h-screen">
                    <a href="" class="-intro-x flex items-center pt-5">
                        <img alt="" class="" src="@/assets/images/cerebro_libro.png">
                    </a>
                    <div class="my-auto">
                        <div class="-intro-x text-dark font-medium text-4xl leading-tight mt-10">
                            Abrir un libro es abrir las puertas de la libertad: 
                            <br>
                            ¡descubre el poder de las palabras!
                        </div>
                        <div class="-intro-x mt-5 text-lg text-dark text-opacity-70 dark:text-slate-400">YovanEnovore &copy; 2023</div>
                    </div>
                </div>
                <!-- END: Login Info -->
                <!-- BEGIN: Login Form -->
                <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <form class="form" @submit.prevent="onSubmit">
                    <div class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Acceder
                        </h2>
                        <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">A solo unos clics más para acceder a tu cuenta. Gestiona todas tus cuentas de la librería en un solo lugar.</div>
                        <div class="intro-x mt-8">
                            <input type="text" class="intro-x login__input form-control py-3 px-4 block" placeholder="Nombre de Usuario" v-model="usuario" autofocus>
                            <input type="password" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Contraceña" v-model="clave">
                        </div>
                        <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                            <a class="text-dark" href="">Olvidaste tu contraceña?</a> 
                            <p v-if="error" class="text-danger">Usuario y/o contraseña incorrectos</p>
                        </div>
                        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Ingresar</button>
                        </div>

                        <div class="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">Al registrarte, aceptas nuestros <a class="text-primary dark:text-slate-200" href="">Términos y condiciones</a> y nuestra <a class="text-primary dark:text-slate-200" href="">Política de privacidad</a></div>                    </div>
                </form>
                </div>
                <!-- END: Login Form -->
            </div>
        </div>
</template>



<style>

</style>
