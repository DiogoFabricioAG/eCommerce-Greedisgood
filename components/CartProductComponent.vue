<template>
  <div class="p-2 border-2 bg-gray-100 space-x-2 flex items-center rounded w-full border-orange-500">
    <img class="size-[100px]" src="https://claroperupoc.vtexassets.com/arquivos/ids/2208571/image-66bf85f4eee2407882999bd0c5c13b91.jpg?v=638648903093800000" alt="">
    <div class="flex justify-between w-full items-center">
      <div class="flex flex-col gap-2 justify-between">
        <p class="text-xl font-bold">Auriculares</p>
        <div class="flex gap-2">
          <button class="border border-black flex items-center h-full hover:bg-orange-500 hover:text-white duration-150">
            <Icon name="mdi-light:delete" size="2rem" class=""/>

          </button>
          <div class="flex gap-2 items-center border border-black">
            <button class="border-r flex items-center h-full hover:bg-orange-500 hover:text-white duration-150 border-black">
              <Icon name="mdi-light:minus" size="2rem" class=""/>
            </button>
            <p class="font-bold">1</p>
            <button class="border-l flex items-center hover:bg-orange-500 hover:text-white duration-150 h-full border-black">
              <Icon name="mdi-light:plus" size="2rem" class=""/>
            </button>
          </div>
          
        </div>
      </div>
      <div>
        <p class="text-xs">Precio unitario</p>
        <p class="text-lg font-bold">S/ 100.00</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>

</script>

<style>

</style>