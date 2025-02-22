<template>
  <div
    class="flex border-2 rounded hover:text-orange-500 duration-100 cursor-pointer border-white hover:border-orange-400 p-2 mx-auto font-ubuntu relative gap-10 mb-4 items-center"
  >
    <div class="absolute top-[-15px] right-[-17px] size-[2rem] bg-black">
      <Icon class="border" name="mdi-light:clock" size="2rem" />
    </div>
    <div class="space-y-2">
      <strong>Pelota de Playa</strong>
      <p class="text-sm">Juguetes</p>
    </div>
    <div class="flex items-center gap-2">
      <PriceTagComponent :old="true" :price="20" />
      <Icon name="mdi-light:arrow-right" size="2rem" />
      <PriceTagComponent :old="false" :price="15" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PriceTagComponent from "./PriceTagComponent.vue";
</script>
