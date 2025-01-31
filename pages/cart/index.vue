|<script lang="ts" setup>
import HeaderComponent from '~/components/HeaderComponent.vue';
import type {ProductCart} from '@/types/myProductCart'
const { cuponActivated, activateMyCupon } = useCupon()
const toastStore = useMyToastStore()

const {calculateTotal,cartItems,handleQuantity,handleRemoveItem,numItems} = useCart()


</script>

<template>
  <section>
    <HeaderComponent/>
    <div class="flex justify-between w-full items-end pr-2">
      <RouteComponent :text-routes="['Inicio', 'Carrito']" :link-routes="['/', '/cart']"/>
      <p class="hover:text-orange-500 duration-150 cursor-pointer text-xs font-notoSans">Revisar Historial de Compras</p>
    </div>
  </section>
  <section>
    <div class="text-center space-y-2 mt-3">
      
      <h2 class="font-monserrat text-4xl font-bold">Carrito</h2>
      <p class="font-notoSans text-sm">Aquí ves tus productos deseados</p>
    </div>
  </section>
  <section>
    <div class="flex gap-2 w-4/5 mx-auto mt-5">
      <div class="space-y-2 w-[60%]">
        <CartProductComponent v-for="(item, index) in cartItems" 
          :key="index" 
          :quantity-prop="numItems?.at(index)" 
          @handle-quantity="handleQuantity(index, $event)" 
          @remove-item="handleRemoveItem(index)" 
          :image-source="item.imageSource" 
          :product-name="item.productName" 
          :unit-price="item.unitPrice"
        />
      </div>
      <div class="w-[40%]">
        <div class="border-2 space-y-4 flex flex-col w-full border-orange-500 p-6 text-center rounded-lg shadow-md bg-gray-100">
          <p class="text-lg font-semibold text-gray-800">Codigo del Pedido : P400123</p>
          <button @click="activateMyCupon" class="border bg-orange-500 shadow text-center text-white border-black justify-between p-2 rounded-lg">
            <p>¿Tienes un cupon?</p>
          </button>
          <div id="input-cupon" class="transition-all duration-100 hidden scale-0">
            <input type="text" class="border-2 border-orange-500 mb-2 w-full p-2 rounded-lg" placeholder="Ingresa tu cupon">
            <button @click="toastStore.showToast(500,'Cupon Activado!!!', 'check')" class="bg-orange-500 text-white rounded px-2 py-1">Activar Cupon</button>
          </div>
          <div class="flex justify-between">
            <p class="text-sm font-semibold text-gray-800">Subtotal</p>
            <p class="text-sm font-semibold text-gray-800">S/ {{ calculateTotal() }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm font-semibold text-gray-800">Envío</p>
            <p class="text-sm font-semibold text-gray-800">S/ 10.00</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm font-semibold text-gray-800">Total</p>
            <p class="text-sm font-semibold text-gray-800">S/ 310.00</p>
          </div>
          <button @click="toastStore.showToast(500,'Realizado con exito', 'check')"  class="bg-orange-500 flex justify-center w-[50%] ml-auto  text-white p-2 rounded-lg">Confirmar Pago</button>
        </div>
      </div>
    </div>
  </section>
</template>


