<template>
  <div>
    <div
      v-if="!topOfPage"
      class="sm:h-[30vh] md:h-[20vh] lg:h-[15vh] xl:h-[10vh]"
    ></div>

    <nav
      :class="{
        'bg-white sticky py-10 flex-row shadow-lg': topOfPage,
        'bg-transparent text-sm  fixed gap-2 flex-col': !topOfPage,
      }"
      class="font-notoSans w-full top-0 flex z-50 h-[10vh] pl-2 text-orange-500 pr-5 items-center justify-between transition-all ease-in-out duration-150"
    >
      <NuxtLink to="/" class="flex gap-3 items-center">
        <img
          v-if="topOfPage"
          class="h-[10vh]"
          src="../assets/images/Logo.png"
          alt="asdasd"
        />
        <h1 v-if="topOfPage" class="text-xl font-bold">GreedisGood</h1>
      </NuxtLink>
      <div
        class="flex gap-10 bg-white font-ubuntu py-2 px-5 rounded-lg"
        :class="{
          '': topOfPage,
          'text-lg border border-black shadow-sm': !topOfPage,
        }"
      >
        <NuxtLink to="/products" class="group"
          >Productos
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"
          ></span>
        </NuxtLink>
        <NuxtLink to="/cart" class="group" href="#"
          >Carrito
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"
          ></span>
        </NuxtLink>
        <a class="group" href="#"
          >Creditos
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"
          ></span>
        </a>
        <NuxtLink to="/community" class="group"
          >Comunidad
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"
          ></span>
        </NuxtLink>
        <NuxtLink
          v-if="!useUserStore.isLogged"
          to="/session"
          class="group"
          href="#"
          >Cuenta
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"
          ></span>
        </NuxtLink>
        <NuxtLink
          v-else
          :to="`/profile/${useUserStore.slug}`"
          class="group"
          href="#"
        >
          Perfil
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"
          ></span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
const useUserStore = useMyUserStore();
const topOfPage = ref(true);

const handleScroll = () => {
  topOfPage.value = window.scrollY === 0;
};

const logout = () => {
  useUserStore.clearUser();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
