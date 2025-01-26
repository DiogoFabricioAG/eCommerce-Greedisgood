<template>
  <div class="border border-black relative group duration-150 font-monserrat rounded-md hover:border-orange-500 cursor-pointer text-end">
    <img :src="image" alt="asd" class="w-full h-[200px] p-2 object-cover rounded-t-md" />
    <div class="flex justify-between p-2 font-ubuntu items-center">
      <div class="group-hover:text-orange-500 duration-150]">
        <h1 class="text-lg font-bold">{{productName}}</h1>
        <p class="text-sm text-start">{{ category }}</p>
      </div>
      <div>
        <p class="text-sm duration-150 group-hover:text-orange-500" :class="isDiscount ? 'font-bold text-xl' : ''">${{price}}</p>
        <p v-if="isDiscount" class="line-through text-xs text-gray-500">${{ old }}</p>
      </div>
    </div>
      <p class="text-sm text-gray-600 p-2 duration-150 group-hover:text-orange-500">
        {{stock}} Restantes
      </p>
    <div class="duration-150 group-hover:text-orange-500 bg-slate-100 size-8 absolute bottom-[-15px] left-[-15px] flex items-center justify-center rounded-full">
      <Icon v-if="dispatch == DispatchType.DELIVERY" name="mdi-light:truck" size="2rem" />
      <Icon v-if="dispatch == DispatchType.PICKUP" name="mdi-light:bank" size="2rem" />
      <Icon v-if="dispatch == DispatchType.BOTH" name="mdi-light:sitemap" size="2rem" />
    </div>
  </div>
</template>

<script lang="ts" setup>
enum DispatchType {
  BOTH = 'both',
  DELIVERY = 'delivery',
  PICKUP = 'pickup'
}

defineProps({
  image: String,
  category: String,
  price: Number,
  productName: String,
  old: Number,
  stock: Number,
  isDiscount: {
    type: Boolean,
    default: true
  },
  dispatch: {
    type: String,
    default: DispatchType.BOTH
  }
})
</script>
