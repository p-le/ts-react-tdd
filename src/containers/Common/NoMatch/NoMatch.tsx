import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const NoMatch: React.SFC<RouteComponentProps<any>> = ({ location }) => (
    <div>NoMatch for <b>{ location.pathname }</b></div>
);
