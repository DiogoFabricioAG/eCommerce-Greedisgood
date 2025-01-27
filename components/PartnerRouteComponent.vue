<script lang="ts" setup>
defineProps({
  fullname: String,
  valoration: Number,
  distance: Number,
  description: String,
  image: String,
  joinAt: String,
  nArticles: {
    type: Number,
    default: 0
  }

})
</script>

<template>
  <div class="w-[80%] mx-[15%] pl-[60px] border-2 font-monserrat relative group cursor-pointer bg-slate-50 rounded-r-lg hover:border-black border-transparent shadow-md pt-2 h-[100px]">
    <div class="rounded-full absolute left-[-50px] shadow bg-white top-[-2px] border-2 border-transparent group-hover:border-black duration-150 size-[100px]">
      <img :src="image" alt="" class="object-cover rounded-full">
    </div>
    <div class="text-start flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <h1 class="font-bold">{{ fullname }}</h1>
            <span class="text-xs" v-for="(item, index) in valoration" :key="index">⭐</span>
          </div>
          <div class="mr-2">
            <span v-if="distance !== 0" class="text-xs">{{distance}} KM</span>
            <span v-else class="text-xs">Muy cerca a tu locación</span>
          </div>

        </div>
        <p class="text-xs text-gray-500">{{ description }}</p>
      </div>
      <div class="flex justify-between text-xs text-gray-600 mr-2 items-center mb-2">
        <span>{{ joinAt }}</span>
        <span v-if="nArticles != 0">Ha vendido {{ nArticles }} {{ nArticles > 1 ? 'Articulos' : 'Articulo' }}</span>
        <span v-else>No ha vendido algun Articulo</span>
      </div>
    </div>
  </div>
</template>
