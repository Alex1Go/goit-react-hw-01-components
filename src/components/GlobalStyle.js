import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

h1,
h2,
h3,
p {
  margin : 0
}
body {
  text-align: center;
  align-items: center;
}
`