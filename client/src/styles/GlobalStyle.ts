import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Comfortaa', cursive,'Trebuchet MS', Helvetica, sans-serif;
        color: #2f2e41;
    }

    html {
        font-size:62.5%
    }

    body {
        padding: 0;
        margin: 0;
        padding: 3rem;
        max-width: 1440px;
        margin: auto;
    }

    button {
        border:none;
    }
`;

export default GlobalStyle;
