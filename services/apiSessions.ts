import type { AccountType, ResponseType, LoginType, ResponseLoginType } from '@/types/myAccount'
import axios from 'axios'

export const createAccount = async (account: AccountType): Promise<ResponseType> => {
    return axios.post('http://localhost:8080/api/usuario/crear-cuenta', account)
        .then((response) => {
            return response.data;
        }
        ).catch(error => {
            console.log(error);
        });
}

export const loginAccount = async (account: LoginType): Promise<ResponseLoginType> => {
    return axios.post('http://localhost:8080/api/usuario/login', account)
        .then(response => {
            const { email, username, isClient } = response.data;
            const myUserStore = useMyUserStore()
            myUserStore.setUser(username, email, isClient, '');
            return response.data;
        })
        .catch(error => {
            return error;
        })

}