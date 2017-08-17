import * as React from 'react';
import styled, { mergeProps } from '../../../utils/styled-components';

type IGetter = (datum: any) => string;

interface ICheckboxProps {
  label: string;
  labelGetter?: IGetter;
  name: string;
  nameGetter?: IGetter;
  className?: string;
  isChecked?: boolean;
  onChange?: (selectItem?: any) => any;
}

interface ICheckboxState {
  isChecked: boolean;
}

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 2rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  user-select: none;
  cursor: pointer;
  color: ${props => props.theme.mainColor};

  &:before {
    content: '';
    position: absolute;
    top: ${props => props.checked ?  '0.1rem' : 0 };
    left: ${props => props.checked ? '0.15rem' : 0 };
    width: ${props => props.checked ? '0.8rem' : '1.5rem' };
    height: ${props => props.checked ? '1.3rem' : '1.5rem' };
    line-height: 1.5rem;
    border-radius: .15rem;
    z-index: 0;
    transition: .3s;
    ${props => {
      if (props.checked) {
        return `
          border-top: 2px solid transparent;
          border-left: 2px solid transparent;
          border-right: 2px solid ${props.theme.mainColor};
          border-bottom: 2px solid ${props.theme.mainColor};
          transform: rotate(40deg);
          transform-origin: 100% 50%;
        `;
      } else {
        return `border: 2px solid ${props.theme.mainColor}`;
      }
    }}
  }
`;

type IInputProps = React.HTMLProps<HTMLInputElement>;

export class Checkbox extends React.Component<ICheckboxProps & IInputProps, ICheckboxState> {
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

  render() {
    return (
      <div className={this.props.className}>
        <Label
          htmlFor={this.props.name}
          onClick={this.handleOnChange}
          checked={ this.state.isChecked }
        >
          { this.props.label }
        </Label>
        <Input id={this.props.name} />
      </div>
    );
  }
}
