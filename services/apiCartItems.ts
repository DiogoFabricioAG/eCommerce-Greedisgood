import type { cartItemType, ProductCart } from '@/types/myProductCart';
import axios from 'axios';

export const fetchCartItems = async (slug: string): Promise<ProductCart[]> => {
  return await axios.get(`http://localhost:8080/api/carrito/get-items/${slug}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      return error;
    })
}


export const addProductToCart = async (cartItem: cartItemType) => {
  return await axios.post("http://localhost:8080/api/carrito/", cartItem)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    })
}