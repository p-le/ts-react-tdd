import * as React from 'react';

import styled from '../../../utils/styled-components';
import { SelectList, SelectListItem } from './select-list';
import { SelectTrigger, SelectTriggerIcon } from './select-trigger';
import { SelectLabel } from './select-label';
import { Wrapper } from '../Wrapper';

interface IOption {
  key: string;
  value: any;
}

export interface ISelectProps {
  label: string;
  showLabel?: boolean;
  options: IOption[];
  defaultValue: string;
  onSelectFn?: (option?: IOption) => void;
}

interface ISelectState {
  isOpen: boolean;
  selectedValue: any;
}

export class Select extends React.Component<ISelectProps, ISelectState> {
  static defaultProps: Partial<ISelectProps> = {
    showLabel: true,
  };

  selectItemRefs: HTMLElement[];
  selectItems: JSX.Element[];

  constructor(props: ISelectProps) {
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

  handleSelect(option: IOption) {
    const { onSelectFn } = this.props;
    if (typeof onSelectFn === 'function') {
      onSelectFn(option);
    }
    this.setState({
      selectedValue: option.value,
    });
    this.toggleSelectList();
  }

  render() {
    const { label, showLabel, options, defaultValue } = this.props;

    if (this.selectItems.length === 0 && options.length > 0) {
      this.selectItems = options.map(option => (
        <SelectListItem
          innerRef={this.handleItemRef}
          key={option.key}
          onClick={this.handleSelect.bind(this, option)}
        >
          {option.value}
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
