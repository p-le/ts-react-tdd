import * as React from 'react';
import styled, { keyframes } from '../../../utils/styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Div = styled.div`
    border: .4rem solid #f3f3f3; /* Light grey */
    border-top: .4rem solid palevioletred; /* Blue */
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: ${spin} 2s linear infinite;
`;

export const SimpleSpinner = () => (
  <Div />
);
