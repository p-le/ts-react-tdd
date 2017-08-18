import * as React from 'react';
import { Checkbox, ICheckboxOption } from './Checkbox';
import { Wrapper } from '../Wrapper';
import styled from '../../../utils/styled-components';

interface ICheckboxGroupProps {
  options: ICheckboxOption[];
  onSelect: (option: ICheckboxOption) => void;
  name: string;
}

interface ICheckboxGroupState {
  isCheckedAll: boolean;
}

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

  /* ---------------------------------------------------------
     ハンドラー関数
  ------------------------------------------------------------ */

  handleToggleAll(e: React.SyntheticEvent<any>) {
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

  handleRef(ref: any) {
    this.checkboxRefs.push(ref);
  }
  handleTriggerRef(ref: any) {
    this.triggerRef = ref;
  }
  /* ---------------------------------------------------------
      ユーティリティ関数
  ------------------------------------------------------------ */

  isCheckedAll() {
    return this.checkedItems.length === this.list.length;
  }

  /* ---------------------------------------------------------
      コンポーネント描画する
  ------------------------------------------------------------ */

  render() {
    const { options: data } = this.props;

    const checkboxes: JSX.Element[] = data.map(datum => (
      <Checkbox
        label={datum.value}
        name={`${datum.key}-${this.props.name}`}
        key={datum.key}
        ref={this.handleRef}
        onChange={this.handleCheck.bind(this, datum)}
      />
    ));

    return (
      <Wrapper>
        <Checkbox label='All' name='all' onChange={this.handleToggleAll} ref={this.handleTriggerRef} />
        { checkboxes }
      </Wrapper>
    );
  }
}
