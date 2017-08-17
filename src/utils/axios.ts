import axios, { AxiosInstance } from 'axios';
import * as Cookies from 'js-cookie';
import { config } from '../config';

export class AxiosFactory {
    static createPublicInstance(): AxiosInstance {
        return axios.create({
            baseURL: config.backend,
            withCredentials: true,
        });
    }

    static createAuthInstance(): AxiosInstance {
        const token = Cookies.get('token');
        const instance = axios.create({
            baseURL: config.backend,
            withCredentials: true,
        });
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
        return instance;
    }

    static createCancelToken() {
        return axios.CancelToken;
    }
}
