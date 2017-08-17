import styled from '../../../utils/styled-components';

export const TextareaInput = styled.textarea`
  outline: none;
  appearance: none;
  resize: none;
  margin: 0;
  padding: .8rem 0 1.6rem 0;
  min-height: 5rem;
  line-height: 1.3;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid ${props => props.theme.mainColor};
  box-shadow: none;
`;
