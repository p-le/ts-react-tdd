import * as React from 'react';

import { TextLabel } from './TextLabel';
import { TextInput } from './TextInput';
import { Wrapper } from '../Wrapper';
import styled from '../../../utils/styled-components';

interface ITextProps {
  type?: string;
  label: string;
  name: string;
  value?: string;
  onChange?: (...args: any[]) => void;
}

interface ITextState {
  isFocus: boolean;
  isValueExist: boolean;
}

export class Text extends React.Component<ITextProps, ITextState> {

  static defaultProps: Partial<ITextProps> = {
    type: 'text',
  };

  inputRef: HTMLInputElement;

  constructor(props: ITextProps) {
    super(props);
    this.state = {
      isFocus: false,
      isValueExist: false,
    };
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleInputRef = this.handleInputRef.bind(this);
  }

  handleOnFocus() {
    this.setState({
      isFocus: true,
    });
  }

  handleOnBlur() {
    this.setState({
      isFocus: false,
      isValueExist: this.inputRef.value !== '',
    });
  }

  handleInputRef(ref: HTMLInputElement) {
    this.inputRef = ref;
  }

  render() {
    return (
      <Wrapper>
        <TextLabel htmlFor={this.props.name} isFocus={this.state.isFocus} isValueExist={this.state.isValueExist} >
          {this.props.label}
        </TextLabel>
        <TextInput
          autoCapitalize='false'
          autoCorrect='false'
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          onChange={this.props.onChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          innerRef={this.handleInputRef}
          value={this.props.value}
        />
      </Wrapper>
    );
  }
}
