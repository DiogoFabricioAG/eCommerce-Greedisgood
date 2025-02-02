<script lang="ts" setup>
  const store = useMyToastStore()
</script>


<template>
  <div 
  class="transition ease-in-out select-none duration-500 bg-white font-notoSans font-light text-sm p-4 rounded-lg shadow-lg fixed bottom-5 right-5 z-50" 
  
  :class="store.show ? 'opacity-100': 'opacity-0'">
    <div class="flex items-center gap-2">
      <Icon v-if="store.type === 'check'" name="mdi-light:check-circle" size="2rem" class="text-green-500"/>
      <Icon v-if="store.type === 'alert'" name="mdi-light:alert-circle" size="2rem" class="text-orange-500"/>
      <Icon v-if="store.type === 'wrong'" name="mdi-light:cancel" size="2rem" class="text-red-500"/>
      <p class="text-gray-800">{{ store.message }}</p>
    </div>
  </div>
</template>
