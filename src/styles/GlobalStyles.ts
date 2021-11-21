import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;800&display=swap');
  body {
    --colors-success: 212, 237, 218;
    --colors-error: 248, 215, 218;
    --colors-warning: 255, 243, 205;
    --colors-info: 209, 236, 241;
    --colors-white: #fcfcfc;
    --colors-grays-4: #c4c4c4;
    font-family: Sora;
  }

  body[data-theme='light'] {
    --colors-primary: 6, 123, 194;
    --colors-secondary: 132, 188, 218;
    --colors-tertiary: 236, 195, 11;
    --colors-text-base: 26, 9, 13;
    --colors-text-reverse: 252, 252, 252;
    --colors-background: 252, 252, 252;
  }

  body[data-theme='dark'] {
    --colors-primary: #b62b5b;
    --colors-secondary: #023c8d;
    --colors-tertiary: #772c67;
    --colors-text-base: #fcfcfc;
    --colors-text-reverse: #1a090d;
    --colors-background: #1a090d;
  }
`}`;
