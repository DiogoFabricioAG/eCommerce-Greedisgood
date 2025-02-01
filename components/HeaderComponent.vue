<template>
  <div>
    <div v-if="!topOfPage" class="sm:h-[30vh] md:h-[20vh] lg:h-[15vh] xl:h-[10vh]"></div>

    <nav :class="{'bg-white sticky py-10': topOfPage, 'bg-gray-200 text-sm opacity-95 fixed py-5': !topOfPage}" class="font-notoSans w-full top-0 z-50 h-[10vh] shadow-lg pl-2 text-orange-500 pr-5 flex items-center justify-between transition-all ease-in-out duration-150">
      <div class="flex gap-3 items-center">
        <img class="h-[10vh]" src="../assets/images/Logo.png" alt="asdasd">
        <h1 class="font-bold text-xl">GreedisGood</h1>
      </div>
      <div class=" flex gap-10">
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
import { ref, onMounted, onUnmounted } from 'vue';
import { NuxtLink } from '#components';

const topOfPage = ref(true);

const handleScroll = () => {
  topOfPage.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>