import * as React from 'react';
import styled, { mergeProps } from '../../utils/styled-components';

interface IFormProps {
  onSubmit?: () => any;
}

const StyledForm = mergeProps<IFormProps, HTMLFormElement>(styled.form)`

`;

export class Form extends React.Component<IFormProps, {}> {
  render() {
    return (
      <StyledForm>
        { this.props.children }
      </StyledForm>
    );
  }
}
