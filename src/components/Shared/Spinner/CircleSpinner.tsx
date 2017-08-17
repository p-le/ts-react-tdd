import * as React from 'react';
import styled, { keyframes } from '../../../utils/styled-components';

const THICKNESS = 3.6;
const PI = 3.1416;

const Div = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
`;
const rotate = keyframes`
  0%: {
    transform: rotate(-90deg);
  }
  100%: {
    transform: rotate(270deg),
  }
`;

const scale = keyframes`
  8%: {

  }
`;

const Svg = styled.svg.attrs({
  viewBox: `0 0 4rem 4rem`,
})`
  transform: rotate(-90deg);
`;

const Circle = styled.circle.attrs({

})`
`;

export const CircleSpinner: React.SFC = () => (
    <Div role='progressbar'>
      <Svg>
        <Circle />
      </Svg>
    </Div>
);
