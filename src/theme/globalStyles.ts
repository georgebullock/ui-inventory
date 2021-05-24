import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1.25rem;
	box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: geometricPrecision;
  }

  button {
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
