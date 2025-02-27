
import type { ProductItem, UnitProductItem } from '@/types/myProducts'
import axios from 'axios';

export async function fetchProducts(): Promise<ProductItem[]> {
  return axios.get('http://localhost:8080/api/productos/')
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}

export async function fetchProductById(id: Number): Promise<UnitProductItem> {
  return axios.get(`http://localhost:8080/api/productos/${id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}