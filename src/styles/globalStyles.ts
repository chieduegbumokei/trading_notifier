import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Montserrat" !important;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
