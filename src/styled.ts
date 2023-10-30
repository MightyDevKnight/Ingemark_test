import styled from "styled-components";

export const AppWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 900px;
  min-height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 50px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
`

export const Button = styled.button`
  text-transform: uppercase;
  border: solid 2px #19191c;
  border-radius: 25px;
  background-color: transparent;
  color: #19191c;
  padding: 12px 40px;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`