import styled, { mergeProps } from '../../../utils/styled-components';

export const SelectLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  padding: 0 .2rem;
  cursor: text;
  font-weight: bold;
  pointer-events: none;
  transform: translateY(-1.2rem) scale(.7);
  color: ${props => props.theme.mainColor};
  transform-origin: 0 0;
`;
