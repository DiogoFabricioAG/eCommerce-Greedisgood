<template>
  <section>
    <HeaderComponent />
    <RouteComponent
      :textRoutes="['Inicio', 'Comunidad']"
      :linkRoutes="['/', '/community']"
    />
  </section>
  <section>
    <div class="flex flex-col gap-2 font-monserrat items-center justify-center">
      <h1 class="text-4xl font-bold text-center">Comunidad</h1>
      <p class="text-center text-sm">
        Interactúa con la Comunidad de
        <strong class="text-orange-500 font-bold">GreedisGood</strong>
      </p>
    </div>
    <div class="grid grid-cols-3 gap-10 w-4/5 mx-auto mt-10">
      <BoxRouteComponent
        v-for="(item, index) in BoxRouteList"
        :key="index"
        :title="item.title"
        :type-image="index + 1"
        :description="item.description"
        :route-text="item.routeText"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
type BoxRouteItems = {
  title: string;
  description: string;
  routeText: string;
};

const BoxRouteList: BoxRouteItems[] = [
  {
    title: "Compra y Venta",
    description:
      "Interactúa con la comunidad de la forma tradicional, vende artículos que tengas por tu hogar y dales una segunda vida.",
    routeText: "/community/partner",
  },
  {
    title: "Subastas",
    description:
      "Realiza subastas con los artículos que tengas por tu hogar, genera expectativas en las personas.",
    routeText: "/community/auction",
  },
  {
    title: "Comunicate",
    description: "Ingresa a la Comunidad de Clientes y Compradores :)",
    routeText: "/community/partner",
  },
];
</script>
