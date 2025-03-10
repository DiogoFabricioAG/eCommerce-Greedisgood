|
<script lang="ts" setup>
import HeaderComponent from "~/components/HeaderComponent.vue";
import DialogComponent from "~/components/utils/DialogComponent.vue";
import type { ProductCart } from "@/types/myProductCart";
const toastStore = useMyToastStore();

const {
  calculateTotal,
  cartItems,
  handleQuantity,
  updateQuantity,
  errorPage,
  cuponCodeText,
  activateMyCupon,
  handleCupon,
  handleRemoveItem,
  handleCreatePedido,
} = useCart();

const { closeDialog, dialog, openDialog, options } = useDialog();

onBeforeUnmount(() => {
  updateQuantity();
});
</script>

<template>
  <section>
    <HeaderComponent />
    <div class="flex justify-between w-full items-end pr-2">
      <RouteComponent
        :text-routes="['Inicio', 'Carrito']"
        :link-routes="['/', '/cart']"
      />
      <p
        class="hover:text-orange-500 duration-150 cursor-pointer text-xs font-notoSans"
      >
        Revisar Historial de Compras
      </p>
    </div>
  </section>
  <section>
    <div class="text-center space-y-2 mt-3">
      <h2 class="font-monserrat text-4xl font-bold">Carrito</h2>
      <p class="font-notoSans text-sm">Aquí ves tus productos deseados</p>
    </div>
  </section>
  <section v-if="!errorPage && cartItems.length > 0">
    <div class="flex gap-2 w-4/5 mx-auto mt-5">
      <div class="space-y-2 w-[60%]">
        <CartProductComponent
          v-for="(item, index) in cartItems"
          :id="index"
          :key="index"
          :quantity-prop="cartItems?.at(index)?.quantity"
          @handle-quantity="handleQuantity(index, $event)"
          @remove-item="handleRemoveItem(index)"
          :image-source="item.imageSource"
          :product-name="item.productName"
          :unit-price="item.unitPrice"
        />
      </div>
      <div class="w-[40%]">
        <div
          class="border-2 space-y-4 flex flex-col w-full border-orange-500 p-6 text-center rounded-lg shadow-md bg-gray-100"
        >
          <button
            @click="activateMyCupon"
            class="border bg-orange-500 shadow text-center text-white border-black justify-between p-2 rounded-lg"
          >
            <p>¿Tienes un cupon?</p>
          </button>
          <div
            id="input-cupon"
            class="transition-all duration-100 hidden scale-0"
          >
            <input
              v-model="cuponCodeText"
              type="text"
              class="border-2 border-orange-500 mb-2 w-full p-2 rounded-lg"
              placeholder="Ingresa tu cupon"
            />
            <button
              @click="handleCupon"
              class="bg-orange-500 text-white rounded px-2 py-1"
            >
              Activar Cupon
            </button>
          </div>
          <div class="flex justify-between">
            <p class="text-sm font-semibold text-gray-800">Subtotal</p>
            <p class="text-sm font-semibold text-gray-800">
              S/ {{ calculateTotal() }}
            </p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm font-semibold text-gray-800">Envío</p>
            <p class="text-sm font-semibold text-gray-800">S/ 10.00</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm font-semibold text-gray-800">Total</p>
            <p class="text-sm font-semibold text-gray-800">
              S/ {{ calculateTotal() + 10 }}
            </p>
          </div>
          <button
            @click="openDialog(1)"
            class="bg-orange-500 flex justify-center w-[50%] ml-auto text-white p-2 rounded-lg"
          >
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  </section>

  <section v-else>
    <div class="flex justify-center flex-col items-center h-[50vh]">
      <p class="text-2xl font-monserrat">No hay productos en el carrito</p>
      <NuxtLink to="/products" class="text-orange-500 hover:underline">
        Ir a comprar
      </NuxtLink>
    </div>
  </section>
  <section>
    <DialogComponent @close="closeDialog" :dialog="dialog">
      <div
        @click.stop
        class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg shadow-lg"
      >
        <h2 class="text-3xl font-bold">Comprar</h2>
        <p class="text-gray-500">¿Estás seguro de realizar la compra?</p>
        <div class="flex gap-4 mt-4">
          <button
            @click="handleCreatePedido"
            class="bg-orange-500 text-white p-3 rounded-md hover:bg-orange-400 transition duration-300"
          >
            Comprar
          </button>
          <button
            @click="closeDialog"
            class="bg-black text-white p-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    </DialogComponent>
  </section>
</template>
