import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #010235;
    /* font-family: 'Saira', sans-serif; */
    font-family: 'Bai Jamjuree', sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`;
