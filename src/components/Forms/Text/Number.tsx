import styled from '../../../utils/styled-components';
import { Text, ITextProps } from './Text';

export class Number extends Text {
  static defaultProps: Partial<ITextProps> = {
    type: 'number',
  };
}
