import * as React from 'react';
import styled, { mergeProps } from '../../../utils/styled-components';
import { Wrapper } from '../Wrapper';
import { CheckboxLabel } from './CheckboxLabel';

type IGetter = (datum: any) => string;

export interface ICheckboxOption {
  key: number | string;
  value: string;
  checked: boolean;
}

interface ICheckboxProps {
  label: string;
  name: string;
  single?: boolean;
  checked?: boolean;
  className?: string;
  isChecked?: boolean;
  onChange?: (selectItem?: any) => any;
}

interface ICheckboxState {
  isChecked: boolean;
}

const Div = styled.div`
  margin: 0.3rem;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

type IInputProps = React.HTMLProps<HTMLInputElement>;

export class Checkbox extends React.Component<ICheckboxProps & IInputProps, ICheckboxState> {
  static defaultProps: Partial<ICheckboxProps> = {
    isChecked: false,
    single: false,
    onChange: () => {},
  };

  constructor(props: ICheckboxProps) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      isChecked: false,
    };
  }

  handleOnChange() {
    this.props.onChange();
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  handleOn() {
    if (!this.state.isChecked) {
      this.setState({
        isChecked: true,
      });
    }
  }

  handleOff() {
    if (this.state.isChecked) {
      this.setState({
        isChecked: false,
      });
    }
  }

  renderCheckbox(): JSX.Element {
    return (
      <Div>
        <CheckboxLabel
          htmlFor={this.props.name}
          onClick={this.handleOnChange}
          checked={this.props.checked}
        >
          { this.props.label }
        </CheckboxLabel>
        <Input id={this.props.name} />
      </Div>
    );
  }

  renderCheckboxWithWrapper(): JSX.Element {
    return (
      <Wrapper>
        { this.renderCheckbox() }
      </Wrapper>
    );
  }

  render() {
    if (this.props.single) {
      return this.renderCheckboxWithWrapper();
    } else {
      return this.renderCheckbox();
    }
  }
}
