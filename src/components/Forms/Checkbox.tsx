import * as React from 'react';
import styled, { mergeProps } from '../../utils/styled-components';

interface ICheckboxProps {
  label: string;
  name?: string;
  isChecked?: boolean;
  onChange?: () => any;
  id: string;
}

interface ICheckboxState {
  isChecked: boolean;
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  user-select: none;
`;

const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: 1.5rem;
  margin-right: 0;

  &:after, &:before {
    content: '';
    position: absolute;
  }

  &:after {
    background-color: rgba(255,82,82,0.87);
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
  }

  &:before {
    transition: all .5s ease;
  }
`;

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
`;

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  static defaultProps: Partial<ICheckboxProps> = {
    isChecked: false,
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

  render() {
    return (
      <Wrapper>
        <StyledLabel
          htmlFor={this.props.id}
          onClick={this.props.onChange}
        >
          {this.props.label}
        </StyledLabel>
        <StyledCheckbox
          id={this.props.id}
          checked={this.state.isChecked}
          onChange={this.handleOnChange}
        />
      </Wrapper>
    );
  }
}
