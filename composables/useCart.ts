import type { ProductCart } from '@/types/myProductCart';
import type { CuponResponse } from '@/types/myCupon';
import { ref } from 'vue';
import ToastComponent from '~/components/utils/ToastComponent.vue';
import { deleteProductCart, fetchCartItems, updateProductCarts } from '~/services/apiCartItems';
import { createPedido } from '~/services/apiPedidos';
import { getCupon } from '~/services/apiCupon';

export const useCart = () => {
  const cartItems = ref<ProductCart[]>([]);
  const errorPage = ref<boolean>(false)
  const numItems = ref<number[]>()
  const cuponRef = ref<CuponResponse>()
  const toastStore = useMyToastStore()
  const useUser = useMyUserStore()
  onMounted(async () => {
    const useUser = useMyUserStore()

    await fetchCartItems(useUser.slug).then((response) => {
      cartItems.value = response.data
      console.log(cartItems.value);
    }).catch(() => {
      errorPage.value = true
    });

  });
  const { activateMyCupon, cuponCodeText, closeCupon } = useCupon()

  const handleCupon = async () => {

    const response = await getCupon(cuponCodeText.value)
    if (response.status === 500) {
      toastStore.showToast(500, 'Codigo Erroneo', 'wrong')
    }
    else {
      closeCupon()
      toastStore.showToast(500, 'Codigo Correcto', 'check')
      cuponRef.value = response
    }
  }

  const handleRemoveItem = async (index: number) => {
    setTimeout(() => {
      cartItems.value.splice(index, 1)
    }, 500)
    const response = await deleteProductCart(useUser.slug, cartItems.value[index].productName);
    toastStore.showToast(500, response.message, 'check')

  }

  const handleQuantity = (index: number, type: string) => {
    if (cartItems.value) {
      if (type === 'plus') {
        cartItems.value[index].quantity += 1
      } else {
        if (cartItems.value[index].quantity > 1) {
          cartItems.value[index].quantity -= 1
        }
        else {
          handleRemoveItem(index)
        }
      }
    }
  }

  const updateQuantity = async () => {
    try {
      const message = await updateProductCarts(cartItems.value, useUser.slug)
      toastStore.showToast(500, message.message, 'check')
    }
    catch (message) {
      console.log("123");
      errorPage.value = true
    }
  }

  const handleCreatePedido = async () => {
    await updateQuantity()

    const PedidoRequest = cuponRef.value ? {
      slug: useUser.slug,
      idCupon: cuponRef.value.idCupon
    } : {
      slug: useUser.slug,
      idCupon: null
    }
    console.log(PedidoRequest);
    const response = await createPedido(PedidoRequest);
    if (response.status === 200) {
      toastStore.showToast(500, response.message, 'check')
      navigateTo('/products')
    }
    else {
      toastStore.showToast(500, "Ocurrio un error", 'wrong')
    }
  }

  const calculateTotal = () => {
    return cartItems.value.reduce((acc, item, index) => {
      return acc + (item.unitPrice * (cartItems.value?.at(index)?.quantity ?? 0))
    }, 0)
  }




  return {
    cartItems,
    numItems,
    calculateTotal,
    handleQuantity,
    handleCupon,
    cuponCodeText,
    errorPage,
    activateMyCupon,
    handleRemoveItem,
    handleCreatePedido,
    updateQuantity
  }
}