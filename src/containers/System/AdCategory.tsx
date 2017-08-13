import * as React from 'react';

import { DataList } from '../../components/DataList';
import { AxiosResponse, AxiosError } from 'axios';
import { AxiosFactory } from '../../utils/axios';
import styled from '../../utils/styled-components';

const Div = styled.div`
    padding: 1rem 1rem;
`;

export class AdCategory extends React.Component {
    componentDidMount() {
        AxiosFactory.createAuthInstance()
            .get('/ad-category')
            .then((res: AxiosResponse) => console.log(res.data))
            .catch((err: AxiosError) => console.log(err));
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <Div>
                <DataList />
            </Div>
        );
    }
}
