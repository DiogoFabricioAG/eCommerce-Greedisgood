<template>
  <div class="flex  mt-5 ml-5 font-ubuntu text-sm items-center text-gray-500">
    <span class=" flex items-center" v-for="(item, index) in textRoutes" :key="index">
      <NuxtLink :to="linkRoutes.at(index)" class="cursor-pointer duration-100 hover:text-gray-700">{{item}}</NuxtLink>
      <Icon v-if="index !== textRoutes.length -1" name="mdi-light:chevron-right" size="1rem" />
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  textRoutes: Array<string>,
  linkRoutes: Array<string>
}>()
</script>
