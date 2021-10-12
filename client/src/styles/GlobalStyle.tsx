import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';

function GlobalStyle() {
    const theme = useContext(ThemeContext);

    return <StyledGlobalStyle $isDarkMode={theme?.theme === 'dark'} />;
}

const StyledGlobalStyle = createGlobalStyle<{ $isDarkMode: boolean }>`
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
        background-color: ${({ $isDarkMode }) =>
            $isDarkMode ? 'black' : 'white'}
    }

    button {
        border: none;
    }
`;

export default GlobalStyle;
