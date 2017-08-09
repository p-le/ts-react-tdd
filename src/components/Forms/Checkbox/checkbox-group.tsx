import * as React from 'react';
import { Checkbox } from './checkbox';
import styled from '../../../utils/styled-components';

interface ICheckboxGroupState {
  isCheckedAll: boolean;
  checkedItems: any[];
}

const StyledCheckbox = styled(Checkbox)`
  margin: 0.3rem;
`;

export class CheckboxGroup extends React.Component<{}, ICheckboxGroupState> {
  list: any[];

  constructor() {
    super();
    this.list = [
      {
        label: 'A',
        name: 'a',
      },
      {
        label: 'B',
        name: 'b',
      },
      {
        label: 'C',
        name: 'c',
      },
      {
        label: 'D',
        name: 'd',
      },
    ];
    this.state = {
      isCheckedAll: false,
      checkedItems: [],
    };
    this.handleToggleAll = this.handleToggleAll.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleToggleAll(e: Event) {
    this.setState({
      isCheckedAll: !this.state.isCheckedAll,
    });
    console.log(e);
  }

  handleCheck(item: any) {
    this.setState({
      checkedItems:  this.state.checkedItems.concat(item),
    });
  }

  render() {
    const checkboxes = this.list.map(item =>
      <StyledCheckbox label={item.label} name={item.name} key={item.name} onChange={this.handleCheck} />)
    ;
    return (
      <div>
        <StyledCheckbox label='All' name='all' onChange={this.handleToggleAll} />
        { checkboxes }
      </div>
    );
  }
}
