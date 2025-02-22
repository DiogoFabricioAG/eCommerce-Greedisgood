<template>
  <NuxtLink
    :to="routeText"
    class="m-5 h-auto group font-monserrat relative cursor-pointer block overflow-hidden"
  >
    <div class="relative">
      <img
        v-if="typeImage == 1"
        class="w-full h-full object-cover"
        src="../assets/images/Buy and Sell.png"
        alt="Some image"
      />
      <img
        v-if="typeImage == 2"
        class="w-full h-full object-cover"
        src="../assets/images/Auction.png"
        alt="Some image"
      />
      <img
        v-if="typeImage == 3"
        class="w-full h-full object-cover"
        src="../assets/images/People.png"
        alt="Some image"
      />
      <div
        class="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-150"
      ></div>
    </div>
    <h2 class="text-2xl font-bold mt-2 text-center">{{ title }}</h2>
    <p class="text-gray-600 text-sm text-center">{{ description }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  typeImage: Number,
  title: String,
  description: String,
  routeText: {
    type: String,
    require: true,
  },
});
</script>
