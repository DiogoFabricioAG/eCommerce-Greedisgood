<template>
  <div
    :class="[
      'p-2 border-2 bg-gray-100 space-x-2 duration-150 flex items-center rounded w-full border-orange-500',
      { 'opacity-0': wasRemoved },
    ]"
  >
    <img class="size-[100px]" :src="imageSource" alt="" />
    <div class="flex justify-between w-full items-center">
      <div class="flex flex-col gap-2 justify-between">
        <p class="text-xl font-bold">{{ productName }}</p>
        <div class="flex duration-150 gap-2">
          <button
            @click="handleRemoveItem"
            class="border border-black flex items-center h-full hover:bg-orange-500 hover:text-white duration-150"
          >
            <Icon name="mdi-light:delete" size="2rem" class="" />
          </button>
          <div
            :class="[
              'flex gap-2 items-center border border-black duration-150',
              { 'border-orange-500 text-orange-500': wasUpdated },
            ]"
          >
            <button
              @click="handleQuantity('minus')"
              :class="[
                'border-r flex items-center h-full hover:bg-orange-500 hover:text-white duration-150 border-black',
                { 'border-orange-500': wasUpdated },
              ]"
            >
              <Icon name="mdi-light:minus" size="2rem" class="" />
            </button>
            <p class="font-bold duration-150">
              {{ quantityProp }}
            </p>
            <button
              @click="handleQuantity('plus')"
              :class="[
                'border-l flex items-center hover:bg-orange-500 hover:text-white duration-150 h-full border-black',
                { 'border-orange-500': wasUpdated },
              ]"
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
const wasRemoved = ref(false);
const wasUpdated = ref(false);
const handleRemoveItem = () => {
  emit("removeItem");
  wasRemoved.value = true;
  setTimeout(() => {
    wasRemoved.value = false;
  }, 500);
};

const handleQuantity = (type: string) => {
  emit("handleQuantity", type);
  if (type === "plus") {
    wasUpdated.value = true;
    setTimeout(() => {
      wasUpdated.value = false;
    }, 500);
  }
};
</script>
