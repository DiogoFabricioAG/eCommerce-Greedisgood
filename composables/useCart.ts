import type { ProductCart } from '@/types/myProductCart';
import { ref } from 'vue';
import ToastComponent from '~/components/utils/ToastComponent.vue';
import { deleteProductCart, fetchCartItems, updateProductCarts } from '~/services/apiCartItems';
import { createPedido } from '~/services/apiPedidos';

export const useCart = () => {
  const cartItems = ref<ProductCart[]>([]);

  const numItems = ref<number[]>()
  const toastStore = useMyToastStore()
  const useUser = useMyUserStore()
  onMounted(async () => {
    const useUser = useMyUserStore()
    cartItems.value = await fetchCartItems(useUser.slug);
  });



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

  const handleCreatePedido = async () => {
    const response = await createPedido(useUser.slug);
    if (response.status === 200) {
      toastStore.showToast(500, response.message, 'check')
    }
    else {
      toastStore.showToast(500, "Ya existe ese carrito", 'wrong')
    }
  }

  const calculateTotal = () => {
    return cartItems.value.reduce((acc, item, index) => {
      return acc + (item.unitPrice * (cartItems.value?.at(index)?.quantity ?? 0))
    }, 0)
  }

  const updateQuantity = async () => {
    const message = await updateProductCarts(cartItems.value, useUser.slug)
    console.log(message.message);
  }


  return {
    cartItems,
    numItems,
    calculateTotal,
    handleQuantity,
    handleRemoveItem,
    handleCreatePedido,
    updateQuantity
  }
}
