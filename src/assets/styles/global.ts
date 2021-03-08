import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-primary: #80ed99;
    --color-primary-desaturate: #57cc99;
    --color-primary-dark: #38a3a5;
    --color-primary-darker: #22577a;
    --color-white: #fbfbfb;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 100%;

    color: var(--color-primary-darker);
    background-color: var(--color-white);
  }
`
