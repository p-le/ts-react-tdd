import { AxiosFactory } from '../utils/axios';

export const getAdList = () => {
    return AxiosFactory
        .createAuthInstance()
        .get('/ad');
};
