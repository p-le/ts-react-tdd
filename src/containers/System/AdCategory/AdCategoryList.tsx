import * as React from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { AxiosFactory } from '../../../utils/axios';
import { DataList } from '../../../components/DataList';

export class AdCategoryList extends React.Component<{}, {}> {
    componentDidMount() {
        AxiosFactory.createAuthInstance()
            .get('/ad-category')
            .then((res: AxiosResponse) => console.log(res.data))
            .catch((err: AxiosError) => console.log(err));
    }

    render() {
        return (
            <DataList />
        );
    }
}
