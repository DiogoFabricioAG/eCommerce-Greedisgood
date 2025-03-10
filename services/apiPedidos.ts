import axios from 'axios';

export const createPedido = async (pedidoRequest): Promise<any> => {
    return await axios.post(`http://localhost:8080/api/pedidos/`, pedidoRequest)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}