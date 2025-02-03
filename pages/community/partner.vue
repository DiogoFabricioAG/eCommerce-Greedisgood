<script lang="ts" setup>
const {
  clientsData,
  page,
  nextPage,
  prevPage,
  fullName,
  valorationFilter,
  transformDate,
  distanceFilter,
  articlesFilter,
  searchFilter,
} = useClients();
</script>

<template>
  <section>
    <HeaderComponent />
    <RouteComponent
      :text-routes="['Inicio', 'Comunidad', 'Socios']"
      :link-routes="['/', '/community', '/community/partner']"
    />
  </section>
  <section>
    <div class="flex flex-col gap-2 font-monserrat items-center justify-center">
      <h1 class="text-4xl font-bold text-center">Lista de Socios</h1>
      <p class="text-center text-sm">
        Encuentra a tu socio ideal para los negocios
      </p>
    </div>
  </section>
  <section>
    <!-- ! Main -->
    <div class="flex items-start w-4/5 mx-auto gap-5 my-5">
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
              >Distancia</label
            >
            <select
              name="distance"
              id="cat"
              v-model.number="distanceFilter"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="0">Escoge una de estas</option>
              <option value="5">Menos de 5km</option>
              <option value="20">Menos de 20km</option>
              <option value="-1">Cualquier Distancia</option>
            </select>
          </div>

          <!-- Select para despacho -->
          <div class="flex flex-col space-y-1">
            <label for="dis" class="text-sm font-medium text-gray-600"
              >Cantidad de Productos Vendidos</label
            >
            <select
              name="products sell"
              id="dis"
              v-model.number="articlesFilter"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="0">Escoge una de estas</option>
              <option value="2">Menos de 2</option>
              <option value="5">Menos de 5</option>
              <option value="10">Menos de 10</option>
              <option value="-1">Restantes</option>
            </select>
          </div>

          <!-- Input range con valores dinámicos -->
          <div class="flex flex-col space-y-1">
            <label for="Calificacion" class="text-sm font-medium text-gray-600"
              >Rango de Calificación</label
            >
            <input
              type="range"
              id="Calificacion"
              :min="0"
              :max="5"
              :step="1"
              v-model="valorationFilter"
              class="appearance-none w-full h-2 bg-gray-300 rounded-full accent-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div
              class="flex justify-between text-sm select-none text-gray-600 mt-1"
            >
              <span>0</span>
              <span>5</span>
            </div>
            <p class="text-sm font-medium text-gray-800 mt-2">
              Calificacion seleccionado:
              <span class="font-bold text-black">{{ valorationFilter }}</span>
            </p>
          </div>
        </form>
        <!-- ! Paginator -->
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
              v-model="searchFilter"
              class="px-8 py-1 shadow w-full text-gray-800 rounded-md"
              type="text"
              placeholder="Buscar Personas"
            />
            <span
              class="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-500"
            >
              <Icon name="mdi-light:magnify" size="1.25rem" />
            </span>
          </div>
        </form>
        <div class="flex flex-col gap-3">
          <PartnerRouteComponent
            v-for="(item, index) in clientsData"
            :key="index"
            :image="item.image"
            :fullname="fullName(item.firstname, item.lastname)"
            :description="item.description"
            :distance="item.distance"
            :valoration="item.valoration"
            :join-at="transformDate(item.joinAt)"
            :n-articles="item.nArticles"
          />
        </div>
      </div>
    </div>
  </section>
  <section>
    <FooterComponent />
  </section>
</template>
