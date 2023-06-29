
<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
</script>
<template>
       <Header />
          <br><br><br><br>
 <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Productos en Venta</h2>
        <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
            <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#new-order-modal" class="btn btn-primary shadow-md mr-2">New Order</a>
            <div class="pos-dropdown dropdown ml-auto sm:ml-0">
                <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                    <span class="w-5 h-5 flex items-center justify-center">
                        <i class="w-4 h-4" data-lucide="chevron-down"></i>
                    </span>
                </button>
                <div class="pos-dropdown__dropdown-menu dropdown-menu">
                    <ul class="dropdown-content">
                        <li>
                            <a href="" class="dropdown-item">
                                <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                                <span class="truncate">INV-0206020 - </span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">
                                <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                                <span class="truncate">INV-0206022 - </span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">
                                <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                                <span class="truncate">INV-0206021 - </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <!-- BEGIN: Item List -->
            <div class="grid grid-cols-12 gap-5 mt-5">
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Soup</div>
                    <div class="text-slate-500">5 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base text-white">Pancake & Toast</div>
                    <div class="text-white text-opacity-80 dark:text-slate-500">8 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Pasta</div>
                    <div class="text-slate-500">4 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Waffle</div>
                    <div class="text-slate-500">3 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Snacks</div>
                    <div class="text-slate-500">8 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Deserts</div>
                    <div class="text-slate-500">8 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Beverage</div>
                    <div class="text-slate-500">9 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Beverage</div>
                    <div class="text-slate-500">9 Items</div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-info p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Beverage</div>
                    <div class="text-slate-500">9 Items</div>
                </div>
        <!-- END: Item List -->
     
    </div>

    <Footer />

</template>

<style>

</style>
