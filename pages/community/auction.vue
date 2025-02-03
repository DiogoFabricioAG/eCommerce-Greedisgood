<template>
  <section>
    <HeaderComponent />
  </section>
  <section>
    <RouteComponent
      :textRoutes="['Inicio', 'Comunidad', 'Subastas']"
      :linkRoutes="['/', '/community', '/community/auction']"
    />
    <div class="text-center space-y-2 mt-3">
      <h2 class="font-monserrat text-4xl font-bold">Subastas</h2>
      <p class="font-notoSans text-sm">Busca la subasta indicada para tí</p>
    </div>
  </section>
  <section>
    <div class="flex items-start w-4/5 mx-auto gap-5 mt-5">
      <div class="w-[30%]">
        <!-- ! Filter -->
        <form
          @submit.prevent="1"
          class="border-2 space-y-4 flex flex-col w-full border-orange-500 p-6 text-center rounded-lg shadow-md bg-gray-100"
        >
          <p class="text-lg font-semibold text-gray-800">
            Seleccione las características
          </p>

          <!-- Select para categoría -->
          <div class="flex flex-col space-y-1">
            <label for="cat" class="text-sm font-medium text-gray-600"
              >Categoría</label
            >
            <select
              name="category"
              id="cat"
              v-model="categoryFilter"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="">Escoge una opcion</option>
              <option value="Comestibles">Comestibles</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Útiles">Útiles</option>
              <option value="Electrodomésticos">Electrodomésticos</option>
              <option value="Inmuebles">Inmuebles</option>
              <option value="Ropa y Accesorios">Ropa y Accesorios</option>
            </select>
          </div>

          <!-- Select para despacho -->
          <div class="flex flex-col space-y-1">
            <label for="dis" class="text-sm font-medium text-gray-600"
              >Rango de Tiempo</label
            >
            <select
              name="dispatch"
              id="dis"
              v-model.number="timeRange"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="0">Escoge una opcion</option>
              <option value="1">Menos de 5 Horas</option>
              <option value="2">Menos de 12 Horas</option>
              <option value="3">Menos de 1 día</option>
            </select>
          </div>

          <!-- Input range con valores dinámicos -->
          <div class="flex flex-col space-y-1">
            <label for="precio" class="text-sm font-medium text-gray-600"
              >Rango de Precio</label
            >
            <input
              type="range"
              id="precio"
              :min="0"
              :max="100"
              :step="10"
              v-model="priceFilter"
              class="appearance-none w-full h-2 bg-gray-300 rounded-full accent-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div
              class="flex justify-between text-sm select-none text-gray-600 mt-1"
            >
              <span>0</span>
              <span>5000</span>
            </div>
            <p class="text-sm font-medium text-gray-800 mt-2">
              Precio seleccionado:
              <span class="font-bold text-black">{{ priceFilter }}</span>
            </p>
          </div>

          <!-- Checkbox para descuento -->
          <div class="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              name="discount"
              id="discount"
              v-model="hasBidders"
              class="w-4 h-4 text-black bg-gray-200 border-gray-400 rounded focus:ring-2 focus:ring-gray-800"
            />
            <label for="discount" class="text-sm font-medium text-gray-600"
              >Sin pujadores</label
            >
          </div>
        </form>
        <!-- ! Paginator -->
        <!-- TODO Arreglar eso de precioss zzzzz -->
        <div
          class="border-2 space-y-4 flex flex-col mt-5 border-orange-500 p-6 w-full text-center rounded-lg shadow-md bg-gray-100"
        >
          <p class="text-lg font-semibold text-gray-800">Paginador</p>
          <div class="flex justify-center items-center gap-2">
            <button class="flex items-center group" @click="prevPage">
              <Icon
                class="group-hover:text-orange-500 duration-150"
                name="mdi-light:chevron-left"
                size="1.25rem"
              />
            </button>
            <span class="text-xs text-gray-500 font-bold">{{ page }}</span>
            <button class="flex items-center group" @click="nextPage">
              <Icon
                class="group-hover:text-orange-500 duration-150"
                name="mdi-light:chevron-right"
                size="1.25rem"
              />
            </button>
          </div>
        </div>
      </div>
      <!-- !Search and Products -->
      <div
        class="border-2 space-y-4 flex flex-col mb-10 border-orange-500 p-6 w-[70%] text-center rounded-lg shadow-md bg-gray-100"
      >
        <form
          @submit.prevent="1"
          action="."
          class="space-x-2 font-ubuntu flex items-center justify-between"
        >
          <div class="relative w-full">
            <!-- Icono dentro del input -->
            <input
              class="px-8 py-1 shadow w-full text-gray-800 rounded-md"
              type="text"
              placeholder="Buscar productos"
              v-model="searchFilter"
            />
            <span
              class="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-500"
            >
              <Icon name="mdi-light:magnify" size="1.25rem" />
            </span>
          </div>
        </form>

        <!-- *Productos -->
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
          <AuctionComponent
            v-for="(item, index) in paginatedItems"
            :key="index"
            :image="item.image"
            :num-bidders="item.numBidders"
            :hasbidders="item.hasBidders"
            :owner="item.owner"
            :time-left="getTimeFormatted(item.timeLeft)"
            :old-price="item.oldPrice"
            :price="item.price"
            :product-name="item.productName"
          />
        </div>
      </div>
    </div>
  </section>

  <section>
    <FooterComponent />
  </section>
</template>

<script lang="ts" setup>
const {
  categoryFilter,
  getTimeFormatted,
  hasBidders,
  nextPage,
  page,
  paginatedItems,
  prevPage,
  priceFilter,
  searchFilter,
  timeRange,
} = useAuction();
</script>
