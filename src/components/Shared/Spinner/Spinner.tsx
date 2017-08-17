import * as React from 'react';
import styled, { keyframes } from '../../../utils/styled-components';

const ring = keyframes`
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
`;
const Div = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
`;

const Span = styled.span`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: .3rem solid ${props => props.theme.mainColor};
  border-color: ${props => props.theme.mainColor} transparent transparent transparent;
  animation: ${ring} 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

const Span2 = Span.extend`
  animation-delay: .195s;
`;

const Span3 = Span.extend`
  animation-delay: .39s;
`;

const Span4 = Span.extend`
  animation-delay: .585s;
`;

export const Spinner: React.SFC = () => (
  <Div>
    <Span />
    <Span2 />
    <Span3 />
    <Span4 />
  </Div>
);
