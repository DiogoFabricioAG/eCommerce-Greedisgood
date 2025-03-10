import { fetchPedidos, fetchProductsfromPedido } from "~/services/apiPedidos"
import type { PedidoItem } from "~/types/myPedidos"
import type { ProductCart } from "~/types/myProductCart"

export const useOrder = () => {
  const userStore = useMyUserStore()

  const pedidos = ref<PedidoItem[]>([])
  const products = ref<ProductCart[]>([])
  onMounted(async () => {
    pedidos.value = await fetchPedidos(userStore.slug)
  })
  const { dialog, closeDialog, openDialog, options } = useDialog();

  const getProducts = async (idPedido: number) => {
    if (options.value !== idPedido) {
      products.value = await fetchProductsfromPedido(idPedido)
    }
    openDialog(idPedido)
  }

  return {
    pedidos,
    getProducts,
    dialog,
    closeDialog,
    products
  }

}
