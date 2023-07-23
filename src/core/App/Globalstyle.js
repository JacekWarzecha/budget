import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}

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
  background: ${({ theme }) => theme.colors.site.background};
  color: ${({ theme }) => theme.colors.site.text};
  min-height: 100vh;
  word-break:break-word;
}
`;
