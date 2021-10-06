import styled from 'styled-components';
import { colors } from '../styles';
import { useContext } from 'react';
import { ThemeContext } from './../context/themeContext';

function Footer() {
    const themeContext = useContext(ThemeContext);
    console.log(themeContext);
    return (
        <Container>
            <NightModeButton onClick={themeContext?.toggleTheme}>
                Changer de mode :{' '}
                {themeContext?.theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`;

export default Footer;
