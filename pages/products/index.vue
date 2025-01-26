<script lang="ts" setup>

const precio = ref(0)
const page = ref(1)

const nextPage = () => {
  page.value++
}
const prevPage = () => {
  if (page.value === 1) return
  page.value--
}


type DispatchType = 'both' | 'delivery' | 'pickup';

type ProductItem = {
  image: string,
  category: string,
  price: number,
  old: number,
  productName: string,
  isDiscount: boolean
  dispatch: DispatchType,
  stock : number
} 

const productItems : ProductItem[] = [
  {
    image: "https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg",
    category: "Comestibles",
    price: 20,
    old: 25,
    productName: "Lechugas 500gr",
    isDiscount: true,
    dispatch: 'both',
    stock : 10
  },
  {
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Tecnología",
    price: 20,
    old: 27,
    productName: "Play Station 5",
    isDiscount: true,
    dispatch: 'delivery',
    stock : 10
  },
  {
    image: "https://oechsle.vteximg.com.br/arquivos/ids/16947092-1000-1000/image-8d6df298838a44bf9318eb57eaa3fd19.jpg",
    category: "Juguetes y Juegos",
    price: 20,
    old: 30,
    productName: "Pelota de Futbol",
    isDiscount: true,
    dispatch: 'pickup',
    stock : 10
  },
  {
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Comestibles",
    price: 20,
    old: 50,
    productName: "Producto 1",
    isDiscount: true,
    dispatch: 'pickup',
    stock : 10
  },
  {
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Comestibles",
    price: 20,
    old: 20.5,
    productName: "Producto 1",
    isDiscount: true,
    dispatch: 'delivery',
    stock : 15
  },
  {
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Comestibles",
    price: 20,
    old: 29,
    productName: "Producto 1",
    isDiscount: true,
    dispatch: 'both',
    stock : 24
  }
]
</script> 

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
  <section>
    <!-- ! Main -->
     <div class="flex items-start w-4/5 mx-auto gap-5 mt-5">

      
      <div class="w-[30%]">
        <!-- ! Filter -->
        <form @submit.prevent="1" class="border-2 space-y-4 flex flex-col w-full border-orange-500 p-6 text-center rounded-lg shadow-md bg-gray-100">
          <p class="text-lg font-semibold text-gray-800">Seleccione las características</p>

          <!-- Select para categoría -->
          <div class="flex flex-col space-y-1">
            <label for="cat" class="text-sm font-medium text-gray-600">Categoría</label>
            <select
              name="category"
              id="cat"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
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
            <label for="dis" class="text-sm font-medium  text-gray-600">Despacho</label>
            <select
              name="dispatch"
              id="dis"
              class="p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="Ambos">Ambos</option>
              <option value="Delivery">Delivery</option>
              <option value="Recojo en Tienda">Recojo en Tienda</option>
            </select>
          </div>

          <!-- Input range con valores dinámicos -->
          <div class="flex flex-col space-y-1">
            <label for="precio" class="text-sm font-medium text-gray-600">Rango de Precio</label>
            <input
              type="range"
              id="precio"
              :min="0"
              :max="5000"
              :step="100"
              v-model="precio"
              class="appearance-none w-full  h-2 bg-gray-300 rounded-full accent-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div class="flex justify-between text-sm select-none text-gray-600 mt-1">
              <span>0</span>
              <span>5000</span>
            </div>
            <p class="text-sm font-medium text-gray-800 mt-2">Precio seleccionado: <span class="font-bold text-black">{{ precio }}</span></p>
          </div>

          <!-- Checkbox para descuento -->
          <div class="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              name="discount"
              id="discount"
              class="w-4 h-4 text-black bg-gray-200 border-gray-400 rounded focus:ring-2 focus:ring-gray-800"
            />
            <label for="discount" class="text-sm font-medium text-gray-600">En descuento</label>
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

        <!-- *Productos -->
         <div class="grid grid-cols-3  grid-rows-2 gap-5">
          <ProductComponent v-for="(item, index) in productItems.slice(0,6)" 
          :key="index" 
          :image="item.image" 
          :category="item.category"
          :dispatch="item.dispatch"
          :old="item.old"
          :isDiscount="item.isDiscount"
          :price="item.price"
          :productName="item.productName"
          :stock="item.stock"/>
         </div>
      </div>
     </div>
  </section>
  <section>
    <FooterComponent />
  </section>
</template>

