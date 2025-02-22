<template>
  <div
    class="p-2 border-2 bg-gray-100 space-x-2 flex items-center rounded w-full border-orange-500"
  >
    <img class="size-[100px]" :src="imageSource" alt="" />
    <div class="flex justify-between w-full items-center">
      <div class="flex flex-col gap-2 justify-between">
        <p class="text-xl font-bold">{{ productName }}</p>
        <div class="flex gap-2">
          <button
            @click="handleRemoveItem"
            class="border border-black flex items-center h-full hover:bg-orange-500 hover:text-white duration-150"
          >
            <Icon name="mdi-light:delete" size="2rem" class="" />
          </button>
          <div class="flex gap-2 items-center border border-black">
            <button
              @click="handleQuantity('minus')"
              class="border-r flex items-center h-full hover:bg-orange-500 hover:text-white duration-150 border-black"
            >
              <Icon name="mdi-light:minus" size="2rem" class="" />
            </button>
            <p class="font-bold">{{ quantityProp }}</p>
            <button
              @click="handleQuantity('plus')"
              class="border-l flex items-center hover:bg-orange-500 hover:text-white duration-150 h-full border-black"
            >
              <Icon name="mdi-light:plus" size="2rem" class="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="text-xs">Precio unitario</p>
        <p class="text-lg font-bold">S/ {{ unitPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSource: String,
  productName: String,
  unitPrice: Number,
  quantityProp: Number,
});

const emit = defineEmits(["removeItem", "handleQuantity"]);

const handleRemoveItem = () => {
  emit("removeItem");
};

const handleQuantity = (type: string) => {
  emit("handleQuantity", type);
};
</script>
