<template>
  <li class="flex font-ubuntu gap-4 items-center">
    <Icon :name="icon_name" size="2rem" />
    <p><slot></slot></p>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  icon_name: {
    type: String,
    required: true,
  },
});
</script>
