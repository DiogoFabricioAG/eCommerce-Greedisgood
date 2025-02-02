import { ref } from "vue";
import type { ProductItem,CommentsProducts, UnitProductItem } from "~/types/myProducts";
import {fetchComments} from '@/services/apiComments'
import { fetchProducts } from "~/services/apiProducts"; 

export const useUnitProduct = () => {
  const recommendedItems = ref<ProductItem[]>([]);
  const listComments = ref<CommentsProducts[]>([])
  const UnitProduct : UnitProductItem = {
    id: 1,
    image: ["https://static.libertyprim.com/files/familles/romaine-large.jpg?1569271844", "https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg", "https://verdepuro.pe/wp-content/uploads/2020/06/mix-lechugas-bb-bolsa-verde-puro.jpg.webp", "https://wongfood.vtexassets.com/arquivos/ids/722140/LECHUGA-SEDA-EN-TAPER-X-UN-ECOLOGIC-1-351676779.jpg?v=638605713824230000", "https://perulabecologic.com.pe/wp-content/uploads/2020/04/Mix-lechugas-gourmet.png"],
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi. Nullam nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi. Nullam nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi.",
    category: "Comestibles",
    price: 20,
    old: 25,
    productName: "Lechugas 500gr",
    isDiscount: true,
    dispatch: 'both',
    stock : 10
  }

  onMounted(async () => {
    listComments.value = await fetchComments()
    recommendedItems.value = await fetchProducts()
    recommendedItems.value = recommendedItems.value.slice(0, 5)
    // recommendedItems.value = recommendedItems.value.filter(product => product.category === UnitProduct.category)
  });
  
  const pointerImage = ref(0)

  const changeImage = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (pointerImage.value === 0) {
        pointerImage.value = UnitProduct.image.length - 1
      } else {
        pointerImage.value -= 1
      }
    } else {
      if (pointerImage.value === UnitProduct.image.length - 1) {
        pointerImage.value = 0
      } else {
        pointerImage.value += 1
      }
    }
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
    getAverageRate
  }
}
