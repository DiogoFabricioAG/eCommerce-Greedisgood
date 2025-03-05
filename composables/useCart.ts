import type { ProductCart } from '@/types/myProductCart';
import { ref } from 'vue';
import { fetchCartItems } from '~/services/apiCartItems';


export const useCart = () => {
  const cartItems = ref<ProductCart[]>([]);
  const numItems = ref<number[]>()
  onMounted(async () => {
    const useUser = useMyUserStore()
    cartItems.value = await fetchCartItems(useUser.slug);
    numItems.value = cartItems.value.map(() => 1)

  });



  const handleRemoveItem = (index: number) => {
    setTimeout(() => {
      cartItems.value.splice(index, 1)
      if (numItems.value) {
        numItems.value.splice(index, 1)
      }
    }, 500)


  }

  const handleQuantity = (index: number, type: string) => {
    if (numItems.value) {
      if (type === 'plus') {
        numItems.value[index] += 1
      } else {
        if (numItems.value[index] > 1) {
          numItems.value[index] -= 1
        }
        else {
          handleRemoveItem(index)
        }
      }
    }
  }

  const calculateTotal = () => {
    return cartItems.value.reduce((acc, item, index) => {
      return acc + (item.unitPrice * (numItems.value?.at(index) ?? 0))
    }, 0)
  }




  return {
    cartItems,
    numItems,
    calculateTotal,
    handleQuantity,
    handleRemoveItem
  }
}
