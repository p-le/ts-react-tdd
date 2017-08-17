import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { AffiliateCreate} from './AffiliateCreate';
import { AffiliateUpdate} from './AffiliateUpdate';
import { AffiliateList} from './AffiliateList';

import { AxiosResponse, AxiosError } from 'axios';
import { AxiosFactory } from '../../utils/axios';
import styled from '../../utils/styled-components';

const Div = styled.div`
    padding: 1rem 1rem;
`;

export class Affiliate extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <Div>
                <Switch>
                    <Route exact={true} path={`${this.props.match.url}/`} component={AffiliateList} />
                    <Route path={`${this.props.match.url}/create`} component={AffiliateCreate} />
                    <Route path={`${this.props.match.url}/update`} component={AffiliateUpdate} />
                </Switch>
            </Div>
        );
    }
}
