import * as React from 'react';
import * as Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { checkToken } from '../../services/auth';

export const PrivateRoute: React.SFC<RouteProps> =
    ({ component: Component, ...rest}: { component: React.ComponentClass }) => {
    const renderComponent = (props: any) => ( <Component {...props} />);
    let isAuthenticated = true;

    if (Cookies.get('token')) {
        checkToken().then(result => isAuthenticated = true);
    } else {
        isAuthenticated = false;
    }

    if (isAuthenticated) {
        return <Route {...rest} render={renderComponent} />;
    } else {
        return <Redirect to='/login' />;
    }
};
