import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

#root {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 28px;
  margin: 0 auto;
  background: #343;
  color: white;
  min-height: 100vh;
  word-break:break-word;
}
`;
