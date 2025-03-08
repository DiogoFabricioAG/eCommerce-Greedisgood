<template>
  <div
    @click="$emit('close')"
    :class="[
      'absolute top-0 h-[100vh] w-full duration-150 bg-black bg-opacity-70 backdrop-blur-sm',
      dialog
        ? 'flex items-center translate-y-10 justify-center'
        : '-translate-y-[120vh]',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  dialog: Boolean,
});
defineEmits(["close"]);

watchEffect(() => {
  if (props.dialog) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = ""; // Restaura el scroll
  }
});
</script>
