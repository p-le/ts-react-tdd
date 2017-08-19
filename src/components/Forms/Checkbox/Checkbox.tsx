import * as React from 'react';
import styled, { mergeProps } from '../../../utils/styled-components';
import { Wrapper } from '../Wrapper';
import { CheckboxLabel } from './CheckboxLabel';

type IGetter = (datum: any) => string;

export interface ICheckboxOption {
  text: string;
  value: string | number;
}

interface ICheckboxProps {
  name: string;
  single?: boolean;
  option: ICheckboxOption;
  checked: boolean;
  onSelect: (option?: ICheckboxOption) => void;
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

export class Checkbox extends React.Component<ICheckboxProps, {}> {
  static defaultProps: Partial<ICheckboxProps> = {
    single: false,
  };

  renderCheckbox(): JSX.Element {
    const { name, option, checked } = this.props;
    return (
      <Div>
        <CheckboxLabel
          htmlFor={name}
          checked={checked}
          onClick={this.props.onSelect.bind(this, option)}
        >
          { option.text }
        </CheckboxLabel>
        <Input id={name} name={name} value={option.value} defaultChecked={checked} />
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
