import * as React from 'react';
import { Checkbox } from './checkbox';
import styled from '../../../utils/styled-components';

interface ICheckboxGroupState {
  isCheckedAll: boolean;
}

const StyledCheckbox = styled(Checkbox)`
  margin: 0.3rem;
`;

export class CheckboxGroup extends React.Component<{}, ICheckboxGroupState> {
  list: any[];

  checkboxRefs: Checkbox[];
  triggerRef: Checkbox;

  checkedItems: any[];
  checkboxes: JSX.Element[];

  constructor() {
    super();
    this.list = [{
      label: 'A',
      name: 'a',
    }, {
      label: 'B',
      name: 'b',
    }, {
      label: 'C',
      name: 'c',
    }, {
      label: 'D',
      name: 'd',
    }];

    this.state = {
      isCheckedAll: false,
    };
    this.checkboxRefs = [];
    this.checkedItems = [];

    this.handleToggleAll = this.handleToggleAll.bind(this);
    this.handleRef = this.handleRef.bind(this);
    this.handleTriggerRef = this.handleTriggerRef.bind(this);
    this.checkboxes = this.list.map(item =>
      (
        <StyledCheckbox
          label={item.label}
          name={item.name}
          key={item.name}
          innerRef={this.handleRef}
          onChange={this.handleCheck.bind(this, item)}
        />
      )
    );
  }

  handleToggleAll(e: Event) {
    this.setState({
      isCheckedAll: !this.state.isCheckedAll,
    }, () => {
      this.state.isCheckedAll ?
        this.checkboxRefs.forEach(checkbox => checkbox.handleOn()) :
        this.checkboxRefs.forEach(checkbox => checkbox.handleOff());
    });
  }

  isCheckedAll() {
    return this.checkedItems.length === this.list.length;
  }

  handleCheck(item: any) {
    const index = this.checkedItems.indexOf(item);
    if (index > -1) {
      this.checkedItems.splice(index, 1);
    } else {
      this.checkedItems.push(item);
    }

    if (!this.state.isCheckedAll && this.isCheckedAll()) {
      this.triggerRef.handleOn();
      this.setState({
        isCheckedAll: true,
      });
    }

    if (this.state.isCheckedAll && !this.isCheckedAll()) {
      this.triggerRef.handleOff();
      this.setState({
        isCheckedAll: false,
      });
    }
  }

  handleRef(ref: Checkbox) {
    this.checkboxRefs.push(ref);
  }
  handleTriggerRef(ref: Checkbox) {
    this.triggerRef = ref;
  }

  render() {
    return (
      <div>
        <StyledCheckbox
          label='All'
          name='all'
          onChange={this.handleToggleAll}
          innerRef={this.handleTriggerRef}
        />
        { this.checkboxes }
      </div>
    );
  }
}
