import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { AdCategoryCreate} from './AdCategoryCreate';
import { AdCategoryUpdate} from './AdCategoryUpdate';
import { AdCategoryList} from './AdCategoryList';

import { AxiosResponse, AxiosError } from 'axios';
import { AxiosFactory } from '../../../utils/axios';
import styled from '../../../utils/styled-components';

const Div = styled.div`
    padding: 1rem 1rem;
`;

interface IAdCategoryProps extends RouteComponentProps<any> {
    mock?: string;
}

export class AdCategory extends React.Component<IAdCategoryProps, {}> {
    render() {
        return (
            <Div>
                <Switch>
                    <Route exact={true} path={`${this.props.match.url}/`} component={AdCategoryList} />
                    <Route path={`${this.props.match.url}/create`} component={AdCategoryCreate} />
                    <Route path={`${this.props.match.url}/update`} component={AdCategoryUpdate} />
                </Switch>
            </Div>
        );
    }
}
