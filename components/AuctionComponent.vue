<template>
  <div
    class="border-2 border-black relative group duration-150 font-monserrat rounded-md hover:border-orange-500 cursor-pointer text-end"
  >
    <img
      :src="image"
      alt="asd"
      class="w-full h-[200px] p-2 object-cover rounded-t-md"
    />
    <div class="flex justify-between p-2 font-ubuntu items-center">
      <div class="group-hover:text-orange-500 duration-150 text-start">
        <h1 class="text-lg font-bold">{{ productName }}</h1>
        <p class="text-sm text-start">{{ owner }}</p>
      </div>
      <div>
        <p
          class="text-sm duration-150 group-hover:text-orange-500"
          :class="hasbidders ? 'font-bold text-xl' : ''"
        >
          Actual: ${{ price }}
        </p>
        <p v-if="hasbidders" class="line-through text-xs text-gray-500">
          Inicial: ${{ oldPrice }}
        </p>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <p
        class="text-sm text-gray-600 p-2 duration-150 group-hover:text-orange-500"
      >
        Hay {{ numBidders }} pujas
      </p>
      <p
        class="text-sm text-gray-600 p-2 duration-150 group-hover:text-orange-500"
      >
        {{ timeLeft }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  id: Number,
  image: String,
  owner: String,
  productName: String,
  oldPrice: Number,
  price: Number,
  timeLeft: String,
  numBidders: Number,
  hasbidders: {
    type: Boolean,
    default: true,
  },
});
</script>
