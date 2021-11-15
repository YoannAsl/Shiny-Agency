import image from '../assets/404.svg';
import styled from 'styled-components';
import { colors } from '../styles';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';

function Error() {
    const themeContext = useContext(ThemeContext);

    return (
        <Main theme={themeContext?.theme}>
            <h1>Oups ! Cette page n'existe pas.</h1>
            <img src={image} alt='404 illustration' />
        </Main>
    );
}

const Main = styled.main`
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    display: flex;
    margin: 0 1rem;
    padding: 10rem;
    border-radius: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    & > h1 {
        color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
    }
`;

export default Error;
