import { Link } from 'react-router-dom';
import styled from 'styled-components';
import lightLogo from '../assets/light-logo.svg';
import darkLogo from '../assets/dark-logo.svg';
import { StyledLink } from '../styles';

function Header() {
    return (
        <StyledHeader>
            <Link to='/'>
                <img src={lightLogo} alt='Shiny logo' />
            </Link>
            <Nav>
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/freelances'>Profils</StyledLink>
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
