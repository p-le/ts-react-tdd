import * as React from 'react';
import styled from '../../utils/styled-components';

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
      background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;

export const Hr: React.StatelessComponent<{}> = () => (
  <StyledHr />
);
