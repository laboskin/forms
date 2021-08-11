import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  body {
    background-color: #ecf0f3;
    color: #a0a5a8;
    font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', -apple-system, sans-serif;
  }
`;