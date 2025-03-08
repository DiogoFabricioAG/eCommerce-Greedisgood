import axios from 'axios';
import type { CommentsProductsRequest, CommentsProductResponse } from '../types/myComments';

export const fetchComments = async (productId: number): Promise<CommentsProductResponse[]> => {
    const { data } = await axios.get(`http://localhost:8080/api/productos/comments/${productId}`);
    return data;
}

export const postComment = async (comment: CommentsProductsRequest): Promise<void> => {
    await axios.post('http://localhost:8080/api/productos/comentary', comment)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}