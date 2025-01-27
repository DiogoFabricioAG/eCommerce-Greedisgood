<template>
  <div class="w-[80%] mx-[15%] pl-[60px] border-2 font-monserrat relative group cursor-pointer bg-slate-50 rounded-r-lg hover:border-black border-transparent shadow-md pt-2 h-[100px]">
    <div class="rounded-full absolute left-[-50px] shadow bg-white top-[-2px] border-2 border-transparent group-hover:border-black duration-150 size-[100px]">
      <img src="https://images.unsplash.com/profile-1441298803695-accd94000cac" alt="" class="object-cover rounded-full">
    </div>
    <div class="text-start flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center gap-2">
          <h1 class="font-bold">Nombre del cliente</h1>
          <span class="text-xs text-gray-500">⭐⭐⭐⭐⭐</span>
        </div>
        <p class="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
      <div class="flex justify-between text-xs text-gray-600 mr-2 items-center mb-2">
        <span>Se unió hace 2 meses</span>
        <span>Ha vendido 5 articulos</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>