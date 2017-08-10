import styled from '../../../utils/styled-components';

export const TextInput = styled.input.attrs({
  type: props => props.type,
})`
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid palevioletred;
  padding: .6rem .2rem;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  width: 100%;
  outline: none;
  transition: .2s;
`;
