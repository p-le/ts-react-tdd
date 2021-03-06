import styled from '../../../utils/styled-components';
import { Text, ITextProps } from './Text';

export class Password extends Text {
  static defaultProps: Partial<ITextProps> = {
    type: 'password',
  };
}
