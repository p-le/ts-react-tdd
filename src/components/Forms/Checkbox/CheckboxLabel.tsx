import styled, { mergeProps } from '../../../utils/styled-components';

export const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 2rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: .7rem;
  user-select: none;
  cursor: pointer;
  color: ${props => props.theme.mainColor};

  &:before {
    content: '';
    position: absolute;
    top: ${props => props.checked ?  '0.1rem' : 0 };
    left: ${props => props.checked ? '0.15rem' : 0 };
    width: ${props => props.checked ? '0.8rem' : '1.5rem' };
    height: ${props => props.checked ? '1.3rem' : '1.5rem' };
    line-height: 1.5rem;
    border-radius: .15rem;
    z-index: 0;
    transition: .3s;
    ${props => {
      if (props.checked) {
        return `
          border-top: 2px solid transparent;
          border-left: 2px solid transparent;
          border-right: 2px solid ${props.theme.mainColor};
          border-bottom: 2px solid ${props.theme.mainColor};
          transform: rotate(40deg);
          transform-origin: 100% 50%;
        `;
      } else {
        return `border: 2px solid ${props.theme.mainColor}`;
      }
    }}
  }
`;