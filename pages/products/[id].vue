<script lang="ts" setup>
import HeaderComponent from '~/components/HeaderComponent.vue';
import RouteComponent from '~/components/RouteComponent.vue';

const router = useRoute()
const { id } = router.params

type dispatchType = 'both' | 'delivery' | 'pickup';

type product = {
  id: number,
  image: string,
  category: string,
  description: string,
  price: number,
  old: number,
  productName: string,
  isDiscount: boolean
  dispatch: dispatchType,
  stock : number
}

type commentsProducts = {
  name: string,
  comment: string,
  date: string,
  rate: number
}

const productItem : product = {
  id: 1,
  image: "https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi. Nullam nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi. Nullam nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi.",
  category: "Comestibles",
  price: 20,
  old: 25,
  productName: "Lechugas 500gr",
  isDiscount: true,
  dispatch: 'both',
  stock : 10
}

const listComments : commentsProducts[] = [
  {
    name: 'Juan Perez',
    comment: 'Excelente producto, lo recomiendo',
    date: '2021-10-10',
    rate: 4
  },
  {
    name: 'Maria Perez',
    comment: 'Excelente producto, lo recomiendo',
    date: '2021-10-10',
    rate: 3
  },
  {
    name: 'Jose Perez',
    comment: 'Excelente producto, lo recomiendo',
    date: '2021-10-10',
    rate: 1
  },
  {
    name: 'Juan Perez',
    comment: 'Excelente producto, lo recomiendo',
    date: '2021-10-10',
    rate: 5
  },
  {
    name: 'Maria Perez',
    comment: 'Excelente producto, lo recomiendo',
    date: '2021-10-10',
    rate: 5
  },
  {
    name: 'Jose Perez',
    comment: 'Excelente producto, lo recomiendo',
    date: '2021-10-10',
    rate: 5
  }
]

const relatedProducts = ref<product[]>([
  {
    id: 1,
    image: "https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg",
    category: "Comestibles",
    description: "",
    price: 20,
    old: 25,
    productName: "Lechugas 500gr",
    isDiscount: true,
    dispatch: 'both',
    stock : 10
  },
  {
    id: 2,
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Tecnología",
    description: "",
    price: 20,
    old: 27,
    productName: "Play Station 5",
    isDiscount: true,
    dispatch: 'delivery',
    stock : 10
  },
  {
    id: 3,
    image: "https://oechsle.vteximg.com.br/arquivos/ids/16947092-1000-1000/image-8d6df298838a44bf9318eb57eaa3fd19.jpg",
    category: "Juguetes y Juegos",
    description: "",

    price: 20,
    old: 30,
    productName: "Pelota de Futbol",
    isDiscount: true,
    dispatch: 'pickup',
    stock : 10
  },
  {
    id: 4,
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Comestibles",
    description: "",

    price: 20,
    old: 50,
    productName: "Producto 1",
    isDiscount: true,
    dispatch: 'pickup',
    stock : 10
  },
  {
    id: 5,
    image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
    category: "Comestibles",
    description: "",

    price: 20,
    old: 20.5,
    productName: "Producto 1",
    isDiscount: true,
    dispatch: 'delivery',
    stock : 15
  }
])

const ListImages = ref([
  "https://static.libertyprim.com/files/familles/romaine-large.jpg?1569271844", 
  "https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg", 
  "https://verdepuro.pe/wp-content/uploads/2020/06/mix-lechugas-bb-bolsa-verde-puro.jpg.webp", 
  "https://wongfood.vtexassets.com/arquivos/ids/722140/LECHUGA-SEDA-EN-TAPER-X-UN-ECOLOGIC-1-351676779.jpg?v=638605713824230000", 
  "https://perulabecologic.com.pe/wp-content/uploads/2020/04/Mix-lechugas-gourmet.png"])

const pointerImage = ref(0)

const changeImage = (direction: 'left' | 'right') => {
  if (direction === 'left') {
    if (pointerImage.value === 0) {
      pointerImage.value = ListImages.value.length - 1
    } else {
      pointerImage.value -= 1
    }
  } else {
    if (pointerImage.value === ListImages.value.length - 1) {
      pointerImage.value = 0
    } else {
      pointerImage.value += 1
    }
  }
}
const getAverageRate = () => {
  let sum = 0;
  listComments.forEach(comment => {
    sum += comment.rate
  })
  return sum / listComments.length
}

</script>

<template>
  <section>
    <HeaderComponent />
    <RouteComponent :text-routes="['Inicio', 'Productos', productItem.productName]" :link-routes="['/','/products', `/products/${id}`]"/>
  </section>
  <section>
    <div class="flex w-[80%] gap-10 mx-auto mt-20 mb-28">
      <div class="w-[40%] flex items-center">
        <button @click="changeImage('left')" class="group">
          <Icon name="mdi-light:chevron-left" size="2rem" class="text-4xl group-hover:text-orange-500 duration-150 cursor-pointer"/>
        </button>
        <img :src="ListImages[pointerImage]" alt="product" class="object-cover size-[400px]"/>
        <button @click="changeImage('right')" class="group">
          <Icon name="mdi-light:chevron-right" size="2rem" class="text-4xl group-hover:text-orange-500 duration-150 cursor-pointer"/>
        </button>
      </div>
      <div class="w-[60%] font-notoSans space-y-2 flex flex-col justify-center gap-2">
        <h1 class="text-5xl font-bold">{{ productItem.productName }}</h1>
        <p class="text-gray-500">{{ productItem.description }}</p>
        <p class="">Precio: <span class="text-xl font-bold ">S/ {{ productItem.price }}</span></p>
        <p>Reservas: <span class="text-lg">{{ productItem.stock }}</span></p>
        <p>Rating: <span class="text-lg">{{ getAverageRate().toPrecision(2) }}</span></p>
        
        <div class="flex gap-2 mt-4">
          <TagComponent :is-bold="true" tagTitle="Oferta" toLink="/products?offer=true"/>
          <TagComponent tagTitle="Categoria 1" toLink="/products?category=Categoria%201"/>
          <TagComponent tagTitle="Categoria 2" toLink="/products?category=Categoria%202"/>
        </div>

        <div class="flex gap-2 mt-10">
          <button class="text-white flex items-center gap-2 bg-orange-500 px-4 py-3 border border-orange-500 hover:bg-white hover:text-orange-500 duration-150">
            <span>

              <Icon name="mdi-light:cart" size="1rem" class="flex items-center"/>
            </span>
            Comprar
          </button>
          <button class="text-white flex items-center gap-2 bg-black border border-black hover:bg-white hover:text-black  px-4 py-2 hover:shadow duration-150">
            <span>
              <Icon name="mdi-light:email" size="1rem" class="flex items-center"/>
            </span>
            Mensajes
          </button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mt-24 font-monserrat w-[80%] mx-auto text-center">
      <h2 class="font-bold text-orange-500 text-4xl">
        Productos Relacionados
      </h2>

      <div class="flex gap-2 mt-10 w-full">

        <div class="flex gap-5 mx-auto">
          <ProductComponent v-for="(item, index) in relatedProducts"
            :id = "item.id"
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
    <div class="bg-orange-500 p-6 w-full max-w-lg my-24 mx-auto rounded-lg shadow-lg font-ubuntu flex flex-col items-center">
      <h2 class="text-white text-3xl mb-4">Obtener Cupones</h2>
      <form @submit.prevent="1" action="." class="flex flex-col gap-4 w-full">
        <input type="email" placeholder="Ingresa tu email" class="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <button class="bg-white text-orange-500 p-3 rounded-md font-bold hover:bg-orange-100 transition duration-300">Enviar</button>
      </form>
    </div>
  </section>
  <section>
    <FooterComponent />
  </section>
</template>


