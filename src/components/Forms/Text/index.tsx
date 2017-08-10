import * as React from 'react';

import { TextLabel } from './text-label';
import { TextInput } from './text-input';
import { Wrapper } from '../Wrapper';
import styled from '../../../utils/styled-components';

interface ITextProps {
  type?: string;
  label: string;
  name: string;
  cb?: () => any;
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
          type={this.props.type}
          id={this.props.name}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          innerRef={this.handleInputRef}
        />
      </Wrapper>
    );
  }
}
