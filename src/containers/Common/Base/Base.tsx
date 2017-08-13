import * as React from 'react';
import { Redirect } from 'react-router-dom';

export const Base: React.SFC = () => (
    <Redirect to='/manage' />
);
