import * as React from 'react';
import styled, { mergeProps } from '../../../utils/styled-components';

interface ITextareaProps {
  callbackFn?: () => any;
  fullWidth?: boolean;
}

const StyledTextArea = mergeProps<ITextareaProps, HTMLTextAreaElement>(styled.textarea)`
  outline: none;
  height: 12rem;
  appearance: none;
  margin: 0;
  padding: .6rem .2rem;
  min-height: 8rem;
  max-height: 24rem;
  resize: vertical;
  line-height: 1.3;
  width: 100%;
  border: 2px solid ${props => props.theme.mainColor};
  transition: border .3s ease;
`;

export class Textarea extends React.Component<ITextareaProps, {}> {
  render() {
    return (
      <StyledTextArea {...this.props} />
    );
  }
}
