import styled, { mergeProps } from '../../../utils/styled-components';

interface ILabelProps {
  isFocus?: boolean;
  isValueExist?: boolean;
}

const renderFocus = (props: ILabelProps) => {
  if (props.isFocus || props.isValueExist) {
    return `
      transform: translateY(-.9rem) scale(.9);
      transform-origin: 0 0;
    `;
  }
};

export const Label = mergeProps<ILabelProps, HTMLLabelElement>(styled.label)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: ${props => props.theme.mainColor};
  font-size: 1rem;
  padding: 0 .2rem;
  cursor: text;
  font-weight: bold;
  pointer-events: none;
  transform-origin: 0% 100%;
  transition: transform .2s ease-out;
  transform: translateY(.9rem);
  ${renderFocus}
`;
