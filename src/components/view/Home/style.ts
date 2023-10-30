import styled from "styled-components";

export const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const HomeControl = styled.div``;
export const HomeError = styled.p`
  margin-top: 5px;
  color: #ff0000;
  margin-left: 3px;
  font-size: 0.8rem;
`;
export const HomeAction = styled.div``;
export const Input = styled.input`
  height: 35px;
  width: 225px;
  border: solid 2px #19191c;
  border-radius: 25px;
  background-color: transparent;
  color: #19191c;
  padding: 2px 15px;
  font-weight: bold;
  outline: none;

  &:focus {
    box-shadow: 0px 1px 5px 0px #000;
  }
`;
