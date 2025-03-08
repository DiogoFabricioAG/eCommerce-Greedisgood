import type { cartItemType, ProductCart } from '@/types/myProductCart';
import axios from 'axios';

export const fetchCartItems = async (slug: string) => {
  return await axios.get(`http://localhost:8080/api/carrito/get-items/${slug}`)
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

export const updateProductCarts = async (cartItems: cartItemType[], slug: string) => {
  return await axios.patch(`http://localhost:8080/api/carrito/${slug}`, cartItems)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    })
}

export const deleteProductCart = async (slug: string, productName: string) => {
  return await axios.delete(`http://localhost:8080/api/carrito/${slug}/${productName}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    })
}