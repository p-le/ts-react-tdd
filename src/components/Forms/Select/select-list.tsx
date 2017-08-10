import styled, { mergeProps } from '../../../utils/styled-components';

interface ISelectListProps {
  isOpen: boolean;
}

export const SelectList = mergeProps<ISelectListProps, HTMLUListElement>(styled.ul)`
  background-color: #fff;
  width: 100%;
  position: absolute;
  list-style-type: none;
  max-height: 20rem;
  z-index: 999;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;

export const SelectListItem = styled.li`
  cursor: pointer;
  color: palevioletred;
  line-height: 3rem;
  height: 3rem;
  padding: 0 .4rem;
  font-weight: bold;

  &:hover {
    background-color: rgba(0, 0, 0, .06);
  }
`;
