import styled from '../../../utils/styled-components';

export const TextInput = styled.input.attrs({
  type: props => props.type,
})`
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid ${props => props.theme.mainColor};
  padding-top: .6rem;
  padding-bottom: .3rem;
  font-size: .8rem;
  width: 100%;
  outline: none;
  transition: .2s;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
      transition-delay: background-color 5000s, color 5000s;
  }
`;
