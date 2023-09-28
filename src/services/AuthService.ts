import $api from "../http";
import {AxiosResponse} from 'axios';

export default class AuthService {
    static async login(username: string, password: string): Promise<boolean> {
        const result = await $api.post<string>('/login', {username, password});
        return result.data === "Login successfully";
    }

    static async registration(username: string, password: string): Promise<AxiosResponse<void>> {
        return $api.post<void>('/registration', {username, password});
    }

    static async checkAuth(): Promise<AxiosResponse<boolean>> {
        return $api.get<boolean>('/check-auth');
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

}

