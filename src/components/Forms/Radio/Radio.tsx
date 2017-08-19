import * as React from 'react';
import styled from '../../../utils/styled-components';
import { RadioText } from './RadioText';
import { RadioWrapper } from './RadioWrapper';
import { Wrapper } from '../Wrapper';

export interface IRadioOption {
  text: string;
  value: string | number;
}

interface IRadioProps {
  name: string;
  label?: string;
  vertical?: boolean;
  options: IRadioOption[];
  currentValue: string | number;
  onClick: (option: IRadioOption) => void;
}

export class Radio extends React.Component<IRadioProps, {}> {
  static defaultProps: Partial<IRadioProps> = {
    vertical: true,
  };

  render() {
    const { options: data, currentValue } = this.props;
    const radios = data.map((datum, index) => (
      <RadioWrapper vertical={this.props.vertical} key={`${index}-${this.props.name}`}>
        <RadioText
          isChecked={currentValue === datum.value}
          onClick={this.props.onClick.bind(this, datum)}
        >
          { datum.text }
        </RadioText>
      </RadioWrapper>
    ));

    return(
      <Wrapper>
        { this.props.label && <label>{ this.props.label } </label>}
        { radios }
      </Wrapper>
    );
  }
}
