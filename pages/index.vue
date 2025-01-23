<script lang="ts" setup>

type listItems = {
  icon_name: string;
  text: string;
}

const itemsList : listItems[] = [
  {
    icon_name: "uil:github",
    text: "Selección Exclusiva: Productos únicos y seleccionados para los más exigentes."
  },
  {
    icon_name: "uil:github",
    text: "Experiencia de Compra Superior: Proceso rápido, seguro y enfocado en la satisfacción."
  },
  {
    icon_name: "uil:github",
    text: "Innovación y Estilo: Lo último en tendencias y tecnología."
  }
]

</script>

<template>
  <HeaderComponent />
  <section>
    <div class="flex items-center h-[80vh] w-4/5 mt-3 mb-16 mx-auto gap-10 justify-center">
      <img class="size-[475px]" src="https://comprarmaquinariahosteleria.com/blog/wp-content/uploads/2023/02/como-montar-tienda-alimentacion.jpg" alt="asdadsasdasd">
      <div class="flex flex-col gap-4 justify-between">
        <h1 class="text-5xl text-orange-500 font-monserrat font-bold">Descubre los Productos que Transformarán tu Vida</h1>
        <p class="text-lg font-notoSans">En GreedisGood, transformamos la ambición en estilo. Ofrecemos una selección exclusiva de productos únicos, diseñados para quienes buscan lo mejor. Disfruta de una experiencia de compra superior con un proceso rápido y seguro, mientras te mantienes a la vanguardia de la innovación y el estilo.</p>
        <strong class="text-orange-500 text-lg">Nuestras Distinciones</strong>
        <ul class="space-y-2">
          <ListComponent v-for="(item, index) in itemsList" :key="index" :icon_name="item.icon_name">
            {{ item.text }}
          </ListComponent>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <div class="flex justify-center items-center w-full gap-5">
      <div>
        <h2 class="font-monserrat text-2xl">Ofertas Actuales</h2>
        <div class="font-notoSans text-sm">
          <p>Nuestras mejores ofertas para nuestros clientes</p>
          <p class="text-xs underline">Revisar todas las ofertas</p>
        </div>
        
      </div>
      <div class="w-[30%]">
        <OfferComponent/>
        <OfferComponent/>
        <OfferComponent/>
      </div>  
    </div>
  </section>
  <section>
    <div class="text-center mt-5">
      <h2 class="font-bold text-3xl font-monserrat">Nuestro Catalogo de Productos</h2>
    </div>
    <div>
      
    </div>
  </section>
  
</template>

