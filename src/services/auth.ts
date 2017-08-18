import { AxiosFactory } from '../utils/axios';

export const login = (email: string, password: string) => {
    return AxiosFactory
        .createPublicInstance()
        .post(`/auth/login`, {
            email,
            password,
        });
};

export const checkToken = () => {
    return AxiosFactory.createAuthInstance().post(`/auth/token`, {});
};
