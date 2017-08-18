import { CancelToken } from 'axios';
import { AxiosFactory } from '../utils/axios';

export const getOsList = (cancelToken: CancelToken) => {
    return AxiosFactory
        .createAuthInstance()
        .get('/os', {
          cancelToken,
        });
};
