import type { ProductItem } from '@/types/myProducts';
import { fetchProducts }  from '@/services/apiProducts'; 

export function useProduct (){
  const allProductItems = ref<ProductItem[]>([]);

  onMounted(async () => {
    allProductItems.value = await fetchProducts();
  
  });
  const { searchFilter, 
          isDiscountFilter, 
          priceFilter, 
          categoryFilter, 
          dispatchFilter} = useFilters()
  
  const productItems = computed(() => {
    return allProductItems.value.filter((product) => {
      // Filtro de búsqueda
      const searchPass = searchFilter.value !== ''
        ? product.productName.toLowerCase().includes(searchFilter.value.toLowerCase())
        : true;
      // Filtro de descuento
      const isDiscountPass = isDiscountFilter.value !== false
        ? product.isDiscount === isDiscountFilter.value
        : true;
      // Filtro de precio
      const pricePass = priceFilter.value !== 0
        ? product.price <= priceFilter.value
        : true;
      // Filtro de categoría
      const categoryPass = categoryFilter.value !== ''
        ? product.category === categoryFilter.value
        : true;
      // Filtro de envío
      const dispatchPass = dispatchFilter.value !== ''
        ? product.dispatch === dispatchFilter.value
        : true;
      return searchPass && isDiscountPass && pricePass && categoryPass && dispatchPass;
    })
  })

  const {page,nextPage,prevPage} = usePage() 
  const itemsPerPage = 6;
  const paginatedItems = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return productItems.value.slice(start, start + itemsPerPage);
  }
  )

  return { productItems : paginatedItems , 
          page, 
          nextPage, 
          prevPage,
          searchFilter, 
          isDiscountFilter, 
          priceFilter, 
          categoryFilter, 
          dispatchFilter }
}
