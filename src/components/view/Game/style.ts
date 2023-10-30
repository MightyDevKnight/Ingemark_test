import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  justify-content: center;
  gap: 5px;
  margin: 20px auto;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: var(--font-size-medium);
  }
  margin-bottom: 30px;
`

export const GameBtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
