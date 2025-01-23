<template>
  <section>
    <HeaderComponent />
  </section>
  <section>
    <RouteComponent :textRoutes="['Inicio', 'Productos']" :linkRoutes="['/','/products']"/>
    <div class="text-center space-y-2 mt-3">
      <h2 class="font-monserrat text-4xl font-bold">Productos</h2>
      <p class="font-notoSans text-sm">Nuestros productos disponibles</p>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>
