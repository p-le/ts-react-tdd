import { AxiosFactory } from '../utils/axios';

export const login = (email: string, password: string) => {
    return AxiosFactory
        .createPublicInstance()
        .post(`/auth/login`, {
            email,
            password,
        });
};

export const checkToken = async () => {
    let isValid = true;
    try {
        await AxiosFactory.createAuthInstance().post(`/auth/token`, {});
    } catch (error) {
        isValid = false;
    }

    return isValid;
};
