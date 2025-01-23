<template>
  <div class="m-5 h-auto group relative cursor-pointer">
    <img class="size-[250px]" :src="image" alt="Some image">
    <div class="absolute flex justify-center items-center top-[-12.5px] left-[-12.5px] p-5 rounded w-[275px] h-[275px] bg-orange-500 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500">
      <p class="text-white duration-500 group-hover:opacity-100 opacity-0 text-2xl font-bold absolute">{{ category }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: String,
  category: String
})
</script>
