<script lang="ts" setup>
const calification = ref(0)
const page = ref(1)

const nextPage = () => {
  page.value++
}
const prevPage = () => {
  if (page.value === 1) return
  page.value--
}

</script>


<template>
  <section>
    <HeaderComponent />
    <RouteComponent :text-routes="['Inicio', 'Comunidad', 'Socios']" :link-routes="['/','/community', '/community/partner']"/>
  </section>
  <section>
    <div class="flex flex-col gap-2 font-monserrat items-center justify-center">
      <h1 class="text-4xl font-bold text-center">Lista de Socios</h1>
      <p class="text-center text-sm ">Encuentra a tu socio ideal para los negocios</p>
    </div>
  </section>
  <section>
    <div class="flex items-start w-4/5 mx-auto gap-5 mt-5">
      <div class="w-[30%]">
        <!-- ! Filter -->
        <form @submit.prevent="1" class="border-2 space-y-4 flex flex-col w-full border-orange-500 p-6 text-center rounded-lg shadow-md bg-gray-100">
          <p class="text-lg font-semibold text-gray-800">Seleccione las características</p>

          <!-- Select para categoría -->
          <div class="flex flex-col space-y-1">
            <label for="cat" class="text-sm font-medium text-gray-600">Distancia</label>
            <select
              name="distance"
              id="cat"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="menos 5km">Menos de 5km</option>
              <option value="menos 20km">Menos de 20km</option>
              <option value="Útiles">Cualquier Distancia</option>
            </select>
          </div>

          <!-- Select para despacho -->
          <div class="flex flex-col space-y-1">
            <label for="dis" class="text-sm font-medium  text-gray-600">Cantidad de Productos Vendidos</label>
            <select
              name="products sell"
              id="dis"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="menos 2">Menos de 2</option>
              <option value="menos 5">Menos de 5</option>
              <option value="menos 10">Menos de 10</option>
              <option value="restantes">Restantes</option>
            </select>
          </div>

          <!-- Input range con valores dinámicos -->
          <div class="flex flex-col space-y-1">
            <label for="precio" class="text-sm font-medium text-gray-600">Rango de Calificación</label>
            <input
              type="range"
              id="precio"
              :min="0"
              :max="5"
              :step="1"
              v-model="calification"
              class="appearance-none w-full  h-2 bg-gray-300 rounded-full accent-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div class="flex justify-between text-sm select-none text-gray-600 mt-1">
              <span>0</span>
              <span>5</span>
            </div>
            <p class="text-sm font-medium text-gray-800 mt-2">Precio seleccionado: <span class="font-bold text-black">{{ calification }}</span></p>
          </div>
        </form>
        <!-- ! Paginator -->
        <div class="border-2 space-y-4 flex flex-col mt-5 border-orange-500 p-6 w-full text-center rounded-lg shadow-md bg-gray-100">
          <p class="text-lg font-semibold text-gray-800">Paginador</p>
          <div class="flex justify-center items-center gap-2">
            <button class="flex items-center group" @click="prevPage">
              <Icon class="group-hover:text-orange-500 duration-150" name="mdi-light:chevron-left" size="1.25rem" />
            </button>
            <button class="text-white px-2 py-1 rounded w-10 hover:bg-orange-600 duration-150 bg-orange-500">{{ page }}</button>
            <button class="text-white px-2 py-1 rounded w-10 hover:bg-orange-600 duration-150 bg-orange-500">{{ page + 1 }}</button>
            <button class="text-white px-2 py-1 rounded w-10 hover:bg-orange-600 duration-150 bg-orange-500">{{ page + 2 }}</button>
            <button class="text-white px-2 py-1 rounded w-10 hover:bg-orange-600 duration-150 bg-orange-500">{{ page + 3 }}</button>
            <button class="text-white px-2 py-1 rounded w-10 hover:bg-orange-600 duration-150 bg-orange-500">{{ page + 4 }}</button>
            <button class="flex items-center group" @click="nextPage">
              <Icon class="group-hover:text-orange-500 duration-150" name="mdi-light:chevron-right" size="1.25rem" />
            </button>
          </div>
        </div>
      </div>

       <!-- !Search and Products -->
       <div class="border-2 space-y-4 flex flex-col mb-10 border-orange-500 p-6 w-[70%] text-center rounded-lg shadow-md bg-gray-100">
        <form @submit.prevent="1" action="." class="space-x-2 font-ubuntu flex items-center justify-between">
          <div class="relative w-[80%]">
            <!-- Icono dentro del input -->
            <input
              class="px-8 py-1 shadow w-full text-gray-800 rounded-md"
              type="text"
              placeholder="Buscar productos"
            />
            <span class="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-500">
              <Icon name="mdi-light:magnify" size="1.25rem" />
            </span>
          </div>
          <button class="text-white px-2 py-1 rounded w-[15%] hover:bg-orange-600 duration-150 bg-orange-500">Buscar</button>
        </form>
        <div class="flex flex-col gap-3">
          <PartnerRouteComponent/>
          <PartnerRouteComponent/>
          <PartnerRouteComponent/>
          <PartnerRouteComponent/>
        </div>
       </div>
    </div>
  </section>
  <section>
    <FooterComponent />
  </section>
</template>

