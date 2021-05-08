import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1.5rem;
	box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: geometricPrecision;
  }

  button {
    margin: 0;
  }
`;
