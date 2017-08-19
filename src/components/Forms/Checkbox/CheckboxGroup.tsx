import * as React from 'react';
import { Checkbox, ICheckboxOption } from './Checkbox';
import { Wrapper } from '../Wrapper';
import styled from '../../../utils/styled-components';

interface ICheckboxGroupProps {
  name: string;
  options: ICheckboxOption[];
  currentValue: Array<string | number>;
  onSelect: (option: ICheckboxOption) => void;
  onSelectAll: () => void;
}

interface ICheckboxGroupState {
  isCheckedAll: boolean;
}

export class CheckboxGroup extends React.Component<ICheckboxGroupProps, ICheckboxGroupState> {

  /* ---------------------------------------------------------
      コンポーネント描画する
  ------------------------------------------------------------ */

  render() {
    const { options, name, currentValue } = this.props;
    const allCheckboxOption: ICheckboxOption = {
      text: '全選択',
      value: '',
    };

    const checkboxes: JSX.Element[] = options.map((option, index) => (
      <Checkbox
        option={option}
        name={`${index}-${name}`}
        key={option.value}
        checked={currentValue.indexOf(option.value) > -1}
        onSelect={this.props.onSelect.bind(this, option)}
      />
    ));
    const checkAllCheckbox = (
      <Checkbox
        option={allCheckboxOption}
        name={`all-${name}`}
        checked={currentValue.length === options.length}
        onSelect={this.props.onSelectAll}
      />
    );
    return (
      <Wrapper>
        { options.length > 0 && checkAllCheckbox }
        { checkboxes }
      </Wrapper>
    );
  }
}
