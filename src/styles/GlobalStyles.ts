import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #F0F0F5;
  }
  *, input {
    font-family: 'Roboto', sans-serif;
  }
`;
