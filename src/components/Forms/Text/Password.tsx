import styled from '../../../utils/styled-components';
import { Text } from './Text';

interface ITextProps {
  type?: string;
  label: string;
  name: string;
  cb?: () => any;
}

export class Password extends Text {
  static defaultProps: Partial<ITextProps> = {
    type: 'password',
  };
}
