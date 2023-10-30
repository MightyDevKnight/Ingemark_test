import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.83);
  border-radius: 5px;
  &.hint {
    border: 2px solid red;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
