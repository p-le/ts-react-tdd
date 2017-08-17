import * as React from 'react';

import styled from '../../../utils/styled-components';
import { SelectList, SelectListItem } from './SelectList';
import { SelectTrigger, SelectTriggerIcon } from './SelectTrigger';
import { SelectLabel } from './SelectLabel';
import { Wrapper } from '../Wrapper';

export interface ISelectProps<T> {
  label: string;
  showLabel?: boolean;
  options: T[];
  defaultValue: string;
  onSelectFn?: (option?: T) => void;
  bindValueKey?: string;
  bindLabelKey?: string;
}

interface ISelectState {
  isOpen: boolean;
  selectedValue: any;
}

export class Select<T> extends React.Component<ISelectProps<T>, ISelectState> {
  static defaultProps: Partial<ISelectProps<any>> = {
    showLabel: true,
    bindLabelKey: 'id',
    bindValueKey: 'name',
  };

  selectItemRefs: HTMLElement[];
  selectItems: JSX.Element[];

  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      selectedValue: props.defaultValue,
    };
    this.selectItemRefs = [];
    this.selectItems = [];
    this.toggleSelectList = this.toggleSelectList.bind(this);
    this.clickOutsideHandler = this.clickOutsideHandler.bind(this);
    this.handleItemRef = this.handleItemRef.bind(this);
  }

  toggleSelectList() {
    this.setState({
      isOpen: !this.state.isOpen,
    }, () => {
      this.state.isOpen ?
        document.addEventListener('mousedown', this.clickOutsideHandler) :
        document.removeEventListener('mousedown', this.clickOutsideHandler);
    });
  }

  clickOutsideHandler(event: Event) {
    if (this.selectItemRefs.indexOf(event.target as HTMLElement) === -1) {
      this.toggleSelectList();
    }
  }

  handleItemRef(item: HTMLElement) {
    this.selectItemRefs.push(item);
  }

  handleSelect(option: any) {
    const { onSelectFn } = this.props;
    if (typeof onSelectFn === 'function') {
      onSelectFn(option);
    }
    this.setState({
      selectedValue: option[this.props.bindValueKey],
    });
    this.toggleSelectList();
  }

  render() {
    const { label, showLabel, options, defaultValue } = this.props;

    if (this.selectItems.length === 0 && options.length > 0) {
      this.selectItems = options.map((option: any) => (
        <SelectListItem
          innerRef={this.handleItemRef}
          key={option[this.props.bindLabelKey]}
          onClick={this.handleSelect.bind(this, option)}
        >
          {option[this.props.bindValueKey]}
        </SelectListItem>
      ));
    }

    return (
      <Wrapper>
        { showLabel && <SelectLabel>{ label }</SelectLabel> }
        <SelectTriggerIcon name='arrow_drop_down' />
        <SelectTrigger value={this.state.selectedValue} onClick={this.toggleSelectList} />
        <SelectList isOpen={this.state.isOpen}>
          { this.selectItems }
        </SelectList>
      </Wrapper>
    );
  }
}
