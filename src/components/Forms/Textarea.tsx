import * as React from 'react';
import styled, { mergeProps } from '../../utils/styled-components';

interface ITextareaProps {
  callbackFn?: () => any;
  fullWidth?: boolean;
}

const StyledTextArea = mergeProps<ITextareaProps, HTMLTextAreaElement>(styled.textarea)`
  outline: none;
  height: 12rem;
  appearance: none;
  margin: 0;
  padding: .8rem 1rem;
  min-height: 8rem;
  max-height: 24rem;
  resize: vertical;
  line-height: 1.3;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  border: 2px solid #AAB2BD;
  transition: border .3s ease;

  &:focus {
    border: 2px solid #4FC1E9;
  }
`;

export class Textarea extends React.Component<ITextareaProps, {}> {
  render() {
    return (
      <StyledTextArea {...this.props} />
    );
  }
}
