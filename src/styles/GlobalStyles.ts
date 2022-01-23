import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;800&display=swap');
  body {
    --colors-white: #fcfcfc;
    --colors-grays-4: #c4c4c4;
    --colors-red: #ff3939;
    --colors-green: #00ab66;
  }

  body[data-theme='light'] {
    --colors-primary: #067bc2;
    --colors-secondary: #ecc30b;
    --colors-tertiary: #84bcda;
    --colors-text-base: black;
    --colors-text-reverse: #fcfcfc;
    --colors-background: #fcfcfc;
  }

  body[data-theme='dark'] {
    --colors-primary: #b62b5b;
    --colors-secondary: #023c8d;
    --colors-tertiary: #772c67;
    --colors-text-base: #fcfcfc;
    --colors-text-reverse: black;
    --colors-background: black;
  }
`}`;
