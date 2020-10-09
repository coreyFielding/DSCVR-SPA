import { createGlobalStyle } from "styled-components";
import { LightTheme, DarkTheme } from "./Themes";
export const GlobalStyles = createGlobalStyle<{
  theme: LightTheme | DarkTheme;
}>`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear
}
`;
