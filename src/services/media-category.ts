import { CancelToken } from 'axios';
import { AxiosFactory } from '../utils/axios';

export const getMediaCategoryList = (cancelToken: CancelToken) => {
    return AxiosFactory
        .createAuthInstance()
        .get('/media-category', {
          cancelToken,
        });
};
