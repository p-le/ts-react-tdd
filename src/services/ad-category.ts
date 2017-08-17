import { CancelToken } from 'axios';
import { AxiosFactory } from '../utils/axios';

export const getAdCategoryList = (cancelToken: CancelToken) => {
    return AxiosFactory
        .createAuthInstance()
        .get('/ad-category', {
          cancelToken,
        });
};
