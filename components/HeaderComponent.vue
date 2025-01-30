<template>
  <div>
    <div class="sm:h-[30vh] md:h-[20vh] lg:h-[15vh] xl:h-[10vh]"></div>
    <nav class="font-notoSans w-full py-10 fixed top-0 z-50 bg-white h-[10vh] shadow-lg pl-2 text-orange-500 pr-5 flex items-center justify-between">
    <div class="flex gap-3 items-center">
      <img class="h-[10vh]" src="../assets/images/Logo.png" alt="asdasd">
      <h1 class="font-bold text-xl">GreedisGood</h1>
    </div>
    <div class="flex gap-10">
      <NuxtLink to="/products" class="group">Productos
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
      </NuxtLink>
      <NuxtLink to="/cart" class="group" href="#">Carrito
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
      </NuxtLink>
      <a class="group" href="#">Creditos
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
      </a>
      <NuxtLink to="/community" class="group">Comunidad
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
      </NuxtLink>
      <a class="group" href="#">Cuenta
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
      </a>
    </div>
  </nav>
  </div>
  
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';


</script>

<style>

</style>