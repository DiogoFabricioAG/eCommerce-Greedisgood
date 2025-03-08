import axios from 'axios';

export const createPedido = async (slug: string): Promise<any> => {
    return await axios.post(`http://localhost:8080/api/pedidos/${slug}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}