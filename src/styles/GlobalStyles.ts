import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;800&display=swap');
  body {
    --colors-success: #d4edda;
    --colors-error: #f8d7da;
    --colors-warning: #fff3cd;
    --colors-info: #d1ecf1;
    font-family: Sora;
  }

  body[data-theme='light'] {
    --colors-primary: #067bc2;
    --colors-secondary: #84bcda;
    --colors-tertiary: #ecc30b;
    --colors-text-base: #1a090d;
    --colors-text-reverse: #fcfcfc;
    --colors-background: #fcfcfc;
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
