import { CancelToken } from 'axios';
import { AxiosFactory } from '../utils/axios';

export const getAdvertiserList = (cancelToken: CancelToken) => {
    return AxiosFactory
        .createAuthInstance()
        .get('/advertiser', {
          cancelToken,
        });
};
