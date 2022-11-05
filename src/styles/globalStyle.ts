import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #1F1F1F;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
}

`