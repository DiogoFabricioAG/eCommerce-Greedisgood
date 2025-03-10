import axios from 'axios';
import type { PedidoItem } from '~/types/myPedidos';
import type { ProductCart } from '~/types/myProductCart';
export const createPedido = async (pedidoRequest): Promise<any> => {
    return await axios.post(`http://localhost:8080/api/pedidos/`, pedidoRequest)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

export const fetchPedidos = async (slug: string): Promise<PedidoItem[]> => {
    return await axios.get(`http://localhost:8080/api/pedidos/all/${slug}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

export const fetchProductsfromPedido = async (idPedido: number): Promise<ProductCart[]> => {
    return await axios.get(`http://localhost:8080/api/pedidos/${idPedido}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}