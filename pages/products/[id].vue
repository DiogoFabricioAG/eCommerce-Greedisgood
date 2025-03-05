<script lang="ts" setup>
import HeaderComponent from "~/components/HeaderComponent.vue";
import RouteComponent from "~/components/RouteComponent.vue";
import ToastComponent from "~/components/utils/ToastComponent.vue";

// Router -> Redirect
// Route -> Link Data

const router = useRoute();
const { id } = router.params;
const productId = Array.isArray(id) ? id[0] : id;

const dialogOption = ref(0);

const {
  UnitProduct,
  changeImage,
  getAverageRate,
  pointerImage,
  postItemProduct,
  recommendedItems,
} = useUnitProduct(Number(productId));

const useToast = useMyToastStore();

const showToast = (type: "check" | "alert" | "wrong", message: string) => {
  useToast.showToast(500, message, type);
};

watchEffect(() => {
  if (dialogOption.value !== 0) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = ""; // Restaura el scroll
  }
});

const comments = ref([
  {
    user: "Juan Pérez",
    rating: 5,
    text: "¡Excelente producto! Muy recomendado.",
  },
  {
    user: "Ana López",
    rating: 4,
    text: "Buena calidad, pero el envío tardó un poco.",
  },
]);

const newComment = ref("");
const newRating = ref(5);

const addComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({
      user: "Usuario Anónimo", // Aquí podrías integrar con el usuario autenticado
      rating: newRating.value,
      text: newComment.value.trim(),
    });
    newComment.value = "";
    newRating.value = 5;
  }
};
</script>

<template>
  <section>
    <HeaderComponent />
    <RouteComponent
      :text-routes="['Inicio', 'Productos', `${UnitProduct?.productName}`]"
      :link-routes="['/', '/products', `/products/${id}`]"
    />
  </section>
  <section>
    <div class="flex w-[80%] gap-10 mx-auto mt-20 mb-28">
      <div class="w-[40%] flex items-center">
        <button @click="changeImage('left')" class="group">
          <Icon
            name="mdi-light:chevron-left"
            size="2rem"
            class="text-4xl group-hover:text-orange-500 duration-150 cursor-pointer"
          />
        </button>
        <img
          :src="UnitProduct?.image[pointerImage]"
          alt="product"
          class="object-cover size-[400px]"
        />
        <button @click="changeImage('right')" class="group">
          <Icon
            name="mdi-light:chevron-right"
            size="2rem"
            class="text-4xl group-hover:text-orange-500 duration-150 cursor-pointer"
          />
        </button>
      </div>
      <div
        class="w-[60%] font-notoSans space-y-2 flex flex-col justify-center gap-2"
      >
        <h1 class="text-5xl font-bold">{{ UnitProduct?.productName }}</h1>
        <p class="text-gray-500">{{ UnitProduct?.description }}</p>
        <p class="">
          Precio:
          <span class="text-xl font-bold">S/ {{ UnitProduct?.price }}</span>
        </p>
        <p>
          Reservas: <span class="text-lg">{{ UnitProduct?.stock }}</span>
        </p>
        <p>
          Rating:
          <span class="text-lg">{{ getAverageRate().toPrecision(2) }}</span>
        </p>

        <div class="flex gap-2 mt-4">
          <TagComponent
            :is-bold="true"
            tagTitle="Oferta"
            toLink="/products?offer=true"
          />
          <TagComponent
            tagTitle="Categoria 1"
            toLink="/products?category=Categoria%201"
          />
          <TagComponent
            tagTitle="Categoria 2"
            toLink="/products?category=Categoria%202"
          />
        </div>

        <div class="flex gap-2 mt-10">
          <button
            @click="dialogOption = 1"
            class="text-white flex items-center gap-2 bg-orange-500 px-4 py-3 border border-orange-500 hover:bg-white hover:text-orange-500 duration-150"
          >
            <span>
              <Icon
                name="mdi-light:cart"
                size="1rem"
                class="flex items-center"
              />
            </span>
            Comprar
          </button>
          <button
            @click="dialogOption = 2"
            class="text-white flex items-center gap-2 bg-black border border-black hover:bg-white hover:text-black px-4 py-2 hover:shadow duration-150"
          >
            <span>
              <Icon
                name="mdi-light:email"
                size="1rem"
                class="flex items-center"
              />
            </span>
            Mensajes
          </button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mt-24 font-monserrat w-[80%] mx-auto text-center">
      <h2 class="font-bold text-orange-500 text-4xl">Productos Relacionados</h2>

      <div class="flex gap-2 mt-10 w-full">
        <div class="flex gap-5 mx-auto">
          <ProductComponent
            v-for="(item, index) in recommendedItems.slice(0, 3)"
            :id="item.id"
            :key="index"
            :image="item.image"
            :category="item.category"
            :dispatch="item.dispatch"
            :old="item.old"
            :isDiscount="item.isDiscount"
            :price="item.price"
            :productName="item.productName"
            :stock="item.stock"
          />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div
      class="bg-orange-500 p-6 w-full max-w-lg my-24 mx-auto rounded-lg shadow-lg font-ubuntu flex flex-col items-center"
    >
      <h2 class="text-white text-3xl mb-4">Obtener Cupones</h2>
      <form @submit.prevent="1" action="." class="flex flex-col gap-4 w-full">
        <input
          type="email"
          placeholder="Ingresa tu email"
          class="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          @click="showToast('check', 'Enviado correctamente')"
          class="bg-white text-orange-500 p-3 rounded-md font-bold hover:bg-orange-100 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
  <section>
    <FooterComponent />
  </section>

  <!-- Dialogs  -->
  <!--  Compras  -->
  <section>
    <div
      @click="dialogOption = 0"
      :class="[
        'absolute top-0 h-[100vh] w-full duration-150 bg-black bg-opacity-70 backdrop-blur-sm',
        dialogOption !== 0
          ? 'flex items-center translate-y-10 justify-center'
          : '-translate-y-[120vh]',
      ]"
    >
      <!-- Modal de Comprar -->
      <div
        v-if="dialogOption === 1"
        @click.stop
        class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg shadow-lg"
      >
        <h2 class="text-3xl font-bold">Comprar</h2>
        <p class="text-gray-500">¿Estás seguro de realizar la compra?</p>
        <div class="flex gap-4 mt-4">
          <button
            @click="postItemProduct"
            class="bg-orange-500 text-white p-3 rounded-md hover:bg-orange-400 transition duration-300"
          >
            Comprar
          </button>
          <button
            @click="dialogOption = 0"
            class="bg-black text-white p-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </div>

      <!-- Modal de Comentarios -->
      <div
        v-if="dialogOption === 2"
        @click.stop
        class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg shadow-lg w-3/4"
      >
        <h2 class="text-3xl font-bold mb-4">Comentarios</h2>
        <div class="max-h-[30vh] overflow-y-auto space-y-4">
          <div
            v-for="(comment, index) in comments"
            :key="index"
            class="p-4 border rounded-lg"
          >
            <p class="font-bold">{{ comment.user }}</p>
            <div class="flex">
              <span v-for="n in 5" :key="n" class="text-yellow-400">
                {{ n <= comment.rating ? "★" : "☆" }}
              </span>
            </div>
            <p class="text-gray-700">{{ comment.text }}</p>
          </div>
        </div>

        <div class="mt-6 border-t pt-4">
          <h3 class="text-lg font-semibold">Añadir comentario</h3>
          <div class="flex gap-2 mt-2">
            <span
              v-for="n in 5"
              :key="n"
              @click="newRating = n"
              class="cursor-pointer text-2xl"
              :class="n <= newRating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </span>
          </div>
          <textarea
            v-model="newComment"
            class="w-full border rounded-md p-2 mt-2 focus:ring focus:ring-orange-400"
            placeholder="Escribe tu comentario..."
          ></textarea>
          <button
            @click="addComment"
            class="bg-orange-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-orange-400 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </section>
  <ToastComponent />
</template>
