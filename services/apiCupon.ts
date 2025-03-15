import axios from "axios"
import type { CuponResponse } from "~/types/myCupon"


export const getCupon = async (cuponCode: string): Promise<CuponResponse> => {
    return await axios.put(`http://localhost:8080/api/cupones/${cuponCode}`)
        .then(response => {
            return response.data
        })
        .catch((error) => {
            return {
                status: 500,
                message: error.response.data.message
            }
        })
}

export const createCuponTest = async (cuponCode: string) => {
    return await axios.post(`http://localhost:8080/api/cupones/${cuponCode}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
}