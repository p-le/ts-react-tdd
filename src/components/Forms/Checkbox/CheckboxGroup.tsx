import * as React from 'react';
import { Checkbox } from './Checkbox';
import { Wrapper } from '../Wrapper';
import styled from '../../../utils/styled-components';

export interface ICheckbox {
  key: number | string;
  value: string;
}

interface ICheckboxGroupProps {
  options?: ICheckbox[];
  name: string;
}

interface ICheckboxGroupState {
  isCheckedAll: boolean;
}

const StyledCheckbox = styled(Checkbox)`
  margin: 0.3rem;
`;

export class CheckboxGroup extends React.Component<ICheckboxGroupProps, ICheckboxGroupState> {
  list: any[];

  checkboxRefs: Checkbox[];
  triggerRef: Checkbox;

  checkedItems: any[];

  constructor() {
    super();

    this.state = {
      isCheckedAll: false,
    };
    this.checkboxRefs = [];
    this.checkedItems = [];

    this.handleToggleAll = this.handleToggleAll.bind(this);
    this.handleRef = this.handleRef.bind(this);
    this.handleTriggerRef = this.handleTriggerRef.bind(this);
  }

  handleToggleAll(e: Event) {
    this.setState({
      isCheckedAll: !this.state.isCheckedAll,
    }, () => {
      if (this.state.isCheckedAll) {
        this.checkboxRefs.forEach(checkbox => checkbox.handleOn());
        this.checkedItems = [].concat(this.list);
      } else {
        this.checkboxRefs.forEach(checkbox => checkbox.handleOff());
        this.checkedItems = [];
      }
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
    const checkboxes: JSX.Element[] = this.props.options.map(option => (
      <StyledCheckbox
        label={option.value}
        name={`${option.key}-${this.props.name}`}
        key={option.key}
        innerRef={this.handleRef}
        onChange={this.handleCheck.bind(this, option)}
      />
    ));
    return (
      <Wrapper>
        <StyledCheckbox label='All' name='all' onChange={this.handleToggleAll} innerRef={this.handleTriggerRef} />
        { checkboxes }
      </Wrapper>
    );
  }
}
