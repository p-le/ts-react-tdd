import * as React from 'react';
import { TextareaLabel } from './TextareaLabel';
import { TextareaInput } from './TextareaInput';
import { Wrapper } from '../Wrapper';
import styled, { mergeProps } from '../../../utils/styled-components';

type IHTMLTextareaProps = React.HTMLProps<HTMLTextAreaElement>;

interface ITextareaProps extends IHTMLTextareaProps {
  callbackFn?: () => any;
  fullWidth?: boolean;
}

interface ITextareaState {
  isFocus: boolean;
  isValueExist: boolean;
}

export class Textarea extends React.Component<ITextareaProps, ITextareaState> {
  constructor(props: ITextareaProps) {
    super(props);
    this.state = {
      isFocus: false,
      isValueExist: false,
    };
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnFocus() {
    this.setState({
      isFocus: true,
    });
  }

  handleOnBlur(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    this.setState({
      isFocus: false,
      isValueExist: (event.currentTarget.value) ? true : false,
    });
  }

  render() {
    const { isFocus, isValueExist } = this.state;
    return (
      <Wrapper>
        <TextareaLabel isFocus={isFocus} isValueExist={isValueExist}>{this.props.label}</TextareaLabel>
        <TextareaInput
          name={this.props.name}
          value={this.props.value}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={this.props.onChange}
        />
      </Wrapper>
    );
  }
}
