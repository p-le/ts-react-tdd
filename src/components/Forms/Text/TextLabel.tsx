import styled, { mergeProps } from '../../../utils/styled-components';

interface ITextLabelProps {
  isFocus: boolean;
  isValueExist: boolean;
}

const renderFocus = (props: ITextLabelProps) => {
  if (props.isFocus || props.isValueExist) {
    return `
      transform: translateY(-14px);
      transform-origin: 0 0;
    `;
  }
};

export const TextLabel = mergeProps<ITextLabelProps, HTMLLabelElement>(styled.label)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: ${props => props.theme.mainColor};
  font-size: .7rem;
  cursor: text;
  font-weight: bold;
  pointer-events: none;
  transform-origin: 0% 100%;
  transition: transform .2s ease-out;
  transform: translateY(12px);
  ${renderFocus}
`;
