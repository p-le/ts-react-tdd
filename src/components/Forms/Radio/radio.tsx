import * as React from 'react';
import styled from '../../../utils/styled-components';
import { RadioLabel } from './radio-label';
import { RadioInput } from './radio-input';

const Wrapper = styled.span`
`;

export class Radio extends React.Component<{}, {}> {
  render() {
    return(
      <Wrapper>
        <RadioLabel>AAA</RadioLabel>
        <RadioInput />
      </Wrapper>
    );
  }
}
