import type { ProductItem } from '@/types/myProducts';

export function useProduct (){
  const allProductItems : ProductItem[] = [
    {
      id: 1,
      image: "https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg",
      category: "Comestibles",
      price: 20,
      old: 25,
      productName: "Lechugas 500gr",
      isDiscount: true,
      dispatch: 'both',
      stock : 10
    },
    {
      id: 2,
      image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
      category: "Tecnología",
      price: 20,
      old: 27,
      productName: "Play Station 5",
      isDiscount: true,
      dispatch: 'delivery',
      stock : 10
    },
    {
      id: 3,
      image: "https://oechsle.vteximg.com.br/arquivos/ids/16947092-1000-1000/image-8d6df298838a44bf9318eb57eaa3fd19.jpg",
      category: "Juguetes y Juegos",
      price: 20,
      old: 30,
      productName: "Pelota de Futbol",
      isDiscount: true,
      dispatch: 'pickup',
      stock : 10
    },
    {
      id: 4,
      image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
      category: "Comestibles",
      price: 20,
      old: 50,
      productName: "Producto 1",
      isDiscount: true,
      dispatch: 'pickup',
      stock : 10
    },
    {
      id: 5,
      image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
      category: "Comestibles",
      price: 20,
      old: 20.5,
      productName: "Producto 1",
      isDiscount: true,
      dispatch: 'delivery',
      stock : 15
    },
    {
      id: 6,
      image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
      category: "Comestibles",
      price: 20,
      old: 29,
      productName: "Producto 1",
      isDiscount: false,
      dispatch: 'both',
      stock : 24
    },
    {
      id: 7,
      image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
      category: "Comestibles",
      price: 20,
      old: 25,
      productName: "Producto 1",
      isDiscount: true,
      dispatch: 'both',
      stock : 10
    },
    {
      id: 8,
      image: "https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg",
      category: "Comestibles",
      price: 20,
      old: 25,
      productName: "Producto 1",
      isDiscount: true,
      dispatch: 'both',
      stock : 10
    },

  ]
  const { searchFilter, 
          isDiscountFilter, 
          priceFilter, 
          categoryFilter, 
          dispatchFilter} = useFilters()
  
  const productItems = computed(() => {
    return allProductItems.filter((product) => {
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
