<template>
  <div>
    <p v-if="old" class="line-through text-sm text-gray-500">S/ {{ price }}</p>
    <p v-else class="text-lg font-bold">S/ {{ price }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  old: Boolean,
  price: Number,
});
</script>
