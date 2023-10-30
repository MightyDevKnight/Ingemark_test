import styled from "styled-components";

export const Notification = styled.div`
  z-index: 10;
  position: absolute;
  background-color: #000c;
  inset: 0px;
  transition: all 400ms ease-in-out 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  div {
    display: flex;
    gap: 10px;
  }
  button {
    color: white;
    border-color: white;
  }
`