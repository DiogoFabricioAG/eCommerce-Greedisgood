<template>
  <section>
    <HeaderComponent />
    <RouteComponent
      :text-routes="['Inicio', 'Carrito', 'Historial']"
      :link-routes="['/', '/cart', '/cart/history']"
    />
  </section>
  <section>
    <div class="text-center space-y-2 mt-3">
      <h2 class="font-monserrat text-4xl font-bold">Historial Carrito</h2>
      <p class="font-notoSans text-sm">Revisa los Pedidos Realizados</p>
    </div>
  </section>
  <section>
    <div
      class="mt-4 border border-orange-500 w-1/2 mx-auto space-y-4 p-6 text-center rounded-lg shadow-md bg-gray-100"
    >
      <form class="flex justify-between items-center">
        <div class="flex flex-col items-start">
          <label for="orderDate" class="font-bold">Fecha de Compra</label>
          <input
            type="date"
            id="orderDate"
            v-model="orderDate"
            class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="status" class="font-bold">Estado</label>
          <select
            id="status"
            v-model="status"
            class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="preparando">Preparando</option>
            <option value="enviando">Enviando</option>
            <option value="entregado">Entregado</option>
          </select>
        </div>
        <div class="flex flex-col items-start">
          <label for="orderPrice" class="font-bold">Precio</label>
          <select
            id="orderPrice"
            v-model="orderPrice"
            class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <button
          @click.prevent="applyFilters"
          class="bg-orange-500 text-white p-3 rounded-md font-bold hover:bg-orange-400 transition duration-300"
        >
          Aplicar Filtros
        </button>
      </form>
    </div>
  </section>
  <section>
    <div class="mt-2">
      <div class="w-3/4 mx-auto border rounded-lg border-orange-500">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="w-full bg-gray-100">
              <th class="py-2 text-start px-4 font-bold">Codigo de Pedido</th>
              <th class="py-2 text-start px-4 font-bold">Fecha de Compra</th>
              <th class="py-2 text-start px-4 font-bold">Estado</th>
              <th class="py-2 text-start px-4 font-bold">Precio</th>
              <th class="py-2 text-start px-4 font-bold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(pedido, index) in pedidos"
              :key="index"
              :class="index % 2 === 0 ? 'bg-gray-200' : 'bg-white'"
            >
              <td class="py-2 px-4">{{ pedido.codigoPedido }}</td>
              <td class="py-2 px-4">
                {{ formatearFechaHora(pedido.fechaPedido) }}
              </td>
              <td class="py-2 px-4">{{ pedido.estadoPedido }}</td>
              <td class="py-2 px-4">S/ {{ pedido.costoPedido }}</td>
              <td class="py-2 px-4">
                <button
                  @click="getProducts(pedido.idPedido)"
                  class="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-400 transition duration-300"
                >
                  Detalles
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section>
    <DialogComponent @close="closeDialog" :dialog="dialog">
      <div
        @click.stop
        class="space-y-2 w-[60%] bg-gray-100 shadow p-8 rounded-lg"
      >
        <h2 class="text-3xl font-monserrat text-center font-bold">
          Detalles del Pedido
        </h2>
        <CartProductComponent
          v-for="(item, index) in products"
          :id="index"
          :key="index"
          :quantity-prop="item.quantity"
          :inUse="false"
          :image-source="item.imageSource"
          :product-name="item.productName"
          :unit-price="item.unitPrice"
        /></div
    ></DialogComponent>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DialogComponent from "~/components/utils/DialogComponent.vue";

const orderDate = ref("");
const status = ref("");
const orderPrice = ref("");
import { formatearFechaHora } from "~/helpers/dateUtils";
const { pedidos, getProducts, closeDialog, dialog, products } = useOrder();

const applyFilters = () => {
  // Lógica para aplicar los filtros
  console.log("Filtros aplicados:", {
    orderDate: orderDate.value,
    status: status.value,
    orderPrice: orderPrice.value,
  });
};
</script>
