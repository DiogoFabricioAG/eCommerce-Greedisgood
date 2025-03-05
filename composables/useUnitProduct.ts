import { ref } from "vue";
import type { ProductItem, CommentsProducts, UnitProductItem } from "~/types/myProducts";
import { fetchComments } from '@/services/apiComments'
import { addProductToCart } from '@/services/apiCartItems'
import { fetchProducts, fetchProductById } from "~/services/apiProducts";

export const useUnitProduct = (id: number) => {
  const recommendedItems = ref<ProductItem[]>([]);
  const listComments = ref<CommentsProducts[]>([])
  const UnitProduct = ref<UnitProductItem>()

  onMounted(async () => {
    UnitProduct.value = await fetchProductById(id)
    listComments.value = await fetchComments()
    recommendedItems.value = await fetchProducts()
    recommendedItems.value = recommendedItems.value.slice(0, 5)
    // recommendedItems.value = recommendedItems.value.filter(product => product.category === UnitProduct.category)
  });

  const pointerImage = ref(0)

  const changeImage = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (pointerImage.value === 0) {
        pointerImage.value = UnitProduct.value?.image ? UnitProduct.value.image.length - 1 : 0
      } else {
        pointerImage.value -= 1
      }
    } else {
      if (pointerImage.value === (UnitProduct.value?.image ? UnitProduct.value.image.length - 1 : 0)) {
        pointerImage.value = 0
      } else {
        pointerImage.value += 1
      }
    }
  }

  const useUser = useMyUserStore()
  const toastStore = useMyToastStore()
  const postItemProduct = async () => {
    console.log(id);
    const response = await addProductToCart({
      username: useUser.username,
      idProducto: id,
    })
    if (response.status === 501) {
      toastStore.showToast(500, response.message, "wrong")
      return
    }
    toastStore.showToast(500, response.message, "check")
    navigateTo("/cart")
  }

  const getAverageRate = () => {
    let sum = 0;
    listComments.value.forEach(comment => {
      sum += comment.rate
    })
    return sum / listComments.value.length
  }

  return {
    UnitProduct,
    recommendedItems,
    listComments,
    pointerImage,
    changeImage,
    postItemProduct,
    getAverageRate
  }
}
