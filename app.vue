<script lang="ts" setup>
import ToastComponent from "./components/utils/ToastComponent.vue";

const { x, y } = useMouse();
const userStore = useMyUserStore();
onMounted(() => {
  console.log(userStore.username);
  userStore.refreshUser();
  console.log(userStore.username);
});
</script>

<template>
  <NuxtPage />
  <div
    class="fixed inset-0 -z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
  ></div>
  <div
    class="size-[20px] bg-orange-500 rounded-full pointer-events-none duration-75 opacity-70 shadow-lg absolute top-[500px]"
    :style="{ transform: `translateX(${x}px) translateY(${y - 500}px)` }"
  ></div>
  <ToastComponent />
</template>
