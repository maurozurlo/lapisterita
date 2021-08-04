import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

html{
    min-height: 100vh;
    position: relative;
    scroll-behavior: smooth;
  }

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0 !important;
  padding: 0 !important;
  font-family: 'Poppins', Roboto, Helvetica, Arial, sans-serif;
  transition: all 0.25s linear;
}

#root{
    width: 100%;
}

small {
  display: block;
}

button {
  display: block;
}

a {
  color: ${({ theme }) => theme.text};
}

button:focus {outline:0;}
`;