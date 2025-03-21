<script lang="ts" setup>
import ProductPresentationComponent from "~/components/ProductPresentationComponent.vue";
import { ref } from "vue";

type listItems = {
  icon_name: string;
  text: string;
};

type productItems = {
  category: string;
  image: string;
};

const itemsList: listItems[] = [
  {
    icon_name: "mdi-light:shield",
    text: "Selección Exclusiva: Productos únicos y seleccionados para los más exigentes.",
  },
  {
    icon_name: "mdi-light:shape-triangle",
    text: "Experiencia de Compra Superior: Proceso rápido, seguro y enfocado en la satisfacción.",
  },
  {
    icon_name: "mdi-light:lightbulb",
    text: "Innovación y Estilo: Lo último en tendencias y tecnología.",
  },
];

const productItems = ref<productItems[]>([
  {
    category: "Toys & Fun",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/14820959_1/w=800,h=800,fit=pad",
  },
  {
    category: "Toys & Fun",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/14820959_1/w=800,h=800,fit=pad",
  },
  {
    category: "Toys & Fun",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/14820959_1/w=800,h=800,fit=pad",
  },
  {
    category: "Shirts",
    image:
      "https://isto.pt/cdn/shop/files/Heavyweight_Black_ef459afb-ff7a-4f9a-b278-9e9621335444.webp?v=1710414950",
  },
  {
    category: "Shirts",
    image:
      "https://isto.pt/cdn/shop/files/Heavyweight_Black_ef459afb-ff7a-4f9a-b278-9e9621335444.webp?v=1710414950",
  },
]);

const handleMouvement = (direction: string) => {
  if (direction === "left") {
    const lastItem = productItems.value.pop();
    if (lastItem) {
      productItems.value = [lastItem, ...productItems.value];
    }
  } else {
    const firstItem = productItems.value.shift();
    if (firstItem) {
      productItems.value = [...productItems.value, firstItem];
    }
  }
};
</script>

<template>
  <section>
    <HeaderComponent />
  </section>
  <section>
    <div
      class="flex items-center min-w-[50%] h-[80vh] w-4/5 mt-7 mb-12 mx-auto gap-10 justify-center"
    >
      <img
        class="size-[475px]"
        src="https://comprarmaquinariahosteleria.com/blog/wp-content/uploads/2023/02/como-montar-tienda-alimentacion.jpg"
        alt="asdadsasdasd"
      />
      <div class="flex flex-col gap-4 justify-between">
        <h1 class="text-5xl text-orange-500 font-monserrat font-bold">
          Descubre los Productos que Transformarán tu Vida
        </h1>
        <p class="text-lg font-notoSans">
          En GreedisGood, transformamos la ambición en estilo. Ofrecemos una
          selección exclusiva de productos únicos, diseñados para quienes buscan
          lo mejor. Disfruta de una experiencia de compra superior con un
          proceso rápido y seguro, mientras te mantienes a la vanguardia de la
          innovación y el estilo.
        </p>
        <strong class="text-orange-500 text-lg">Nuestras Distinciones</strong>
        <ul class="space-y-2">
          <ListComponent
            v-for="(item, index) in itemsList"
            :key="index"
            :icon_name="item.icon_name"
          >
            {{ item.text }}
          </ListComponent>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <div
      class="flex justify-center text-white bg-black py-8 my-5 items-center w-full gap-5"
    >
      <div>
        <h2 class="font-monserrat text-4xl">Ofertas Actuales</h2>
        <div class="font-notoSans space-y-2">
          <p>Nuestras mejores ofertas para nuestros clientes</p>
          <p
            class="text-sm underline hover:text-orange-500 duration-150 cursor-pointer"
          >
            Revisar todas las ofertas
          </p>
        </div>
      </div>
      <div class="w-[30%]">
        <OfferComponent />
        <OfferComponent />
        <OfferComponent />
      </div>
    </div>
  </section>
  <section>
    <div class="text-center my-10">
      <h2 class="font-bold text-3xl font-monserrat text-orange-500">
        Nuestro Catalogo de Productos
      </h2>
    </div>
    <div class="flex justify-center items-center gap-5 mx-auto mt-5">
      <button @click="handleMouvement('left')">
        <Icon
          name="mdi-light:chevron-left"
          class="hover:text-orange-500 duration-100"
          size="4rem"
        />
      </button>

      <ProductPresentationComponent
        v-for="(item, index) in productItems.slice(0, 3)"
        :key="index"
        :category="item.category"
        :image="item.image"
      />
      <button @click="handleMouvement('right')">
        <Icon
          name="mdi-light:chevron-right"
          class="hover:text-orange-500 duration-100"
          size="4rem"
        />
      </button>
    </div>
  </section>
  <section>
    <div
      class="my-10 w-4/5 mx-auto rounded shadow-lg items-center bg-gradient-to-r from-orange-500 to-white text-white flex justify-between p-5"
    >
      <div>
        <h2 class="text-3xl font-ubuntu">
          ¿Recibir las novedades antes que todos?
        </h2>
        <p class="font-notoSans">Suscríbete a nuestro newsletter :)</p>
      </div>
      <form
        @submit.prevent="1"
        action="."
        class="flex flex-col justify-center items-end gap-3 font-sans"
      >
        <input
          type="email"
          class="p-2 text-black rounded-md border border-gray-300 focus:outline-none"
          placeholder="Ingresa tu correo"
        />
        <button
          class="shadow-md bg-white text-orange-500 hover:text-orange-700 font-bold p-2 duration-100 text-sm border-black focus:scale-90"
          type="submit"
        >
          Suscribirme
        </button>
      </form>
    </div>
  </section>
  <section>
    <FooterComponent />
  </section>
</template>
