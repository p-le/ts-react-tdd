import styled, { mergeProps } from '../../../utils/styled-components';
import { TextInput } from '../Text/TextInput';
import { Icon } from '../../Shared/Icon';

export const SelectTrigger = styled(TextInput).attrs({
  readOnly: true,
})`
  cursor: pointer;
  font-size: .8rem;
`;

export const SelectTriggerIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  line-height: 1.5;
  z-index: -1;
  color: ${props => props.theme.mainColor};
`;
