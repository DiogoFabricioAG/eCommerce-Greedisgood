<template>
  <NuxtLink
    :to="toLink"
    :class="isBold ? 'font-bold' : ''"
    class="text-white font-ubuntu text-sm hover:shadow-sm hover:bg-orange-600 duration-150 bg-orange-500 px-2 py-1 rounded-full"
  >
    <span class="select-none">
      {{ tagTitle }}
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  tagTitle: String,
  toLink: {
    type: String,
    require: true,
  },
  isBold: {
    type: Boolean,
    default: false,
  },
});
</script>
