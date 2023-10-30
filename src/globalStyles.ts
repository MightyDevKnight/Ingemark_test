import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-blue: #2d2e4d;
    --color-bodybg: #2d2e4d;
    --color-white: #FFFFFF;
    --font-size-default: 1.5rem;
    --font-size-small: 14px;
    --font-size-medium: 28px;
    --font-size-large: 36px;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    font-size: var(--font-size-default);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-bodybg);
    margin: 0;
  }
  
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

`

