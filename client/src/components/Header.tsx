import { Link } from 'react-router-dom';
import styled from 'styled-components';
import lightLogo from '../../assets/light-logo.svg';
import darkLogo from '.../../assets/dark-logo.svg';
import { StyledLink } from '../styles';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

function Header() {
    const themeContext = useContext(ThemeContext);
    return (
        <StyledHeader>
            <Link to='/'>
                {themeContext!.theme === 'light' ? (
                    <img src={lightLogo} alt='Shiny logo' />
                ) : (
                    <img src={darkLogo} alt='Shiny logo' />
                )}
            </Link>
            <Nav>
                <StyledLink to='/' theme={themeContext?.theme}>
                    Accueil
                </StyledLink>
                <StyledLink to='/freelances' theme={themeContext?.theme}>
                    Profils
                </StyledLink>
                <StyledLink to='/survey/1' $filledLink>
                    Faire le test
                </StyledLink>
            </Nav>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6.5rem;
    img {
        height: 7rem;
    }
`;

const Nav = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;
