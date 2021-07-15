import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: rgb(234, 237, 237);
  }

  :root {
    --clr-white: #FFFFFF;
    --clr-dark-gray: #131921;
    --clr-dark-orange: #cd9042;
    --clr-orange: #f0c14b;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
