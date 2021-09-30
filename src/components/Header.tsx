import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../styles/colors';
import lightLogo from '../assets/light-logo.svg';
import darkLogo from '../assets/dark-logo.svg';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6.5rem;
`;

const StyledLink = styled(Link)<{ $filledLink?: boolean }>`
    padding: 1.5rem;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 1.8rem;
    ${(props) =>
        props.$filledLink &&
        `color:white;
        border-radius:3rem;
        background-color:${colors.primary}`}
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={lightLogo} alt='Shiny logo' />
            <nav>
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/freelances'>Profils</StyledLink>
                <StyledLink to='/survey/1' $filledLink>
                    Faire le test
                </StyledLink>
            </nav>
        </StyledHeader>
    );
};

export default Header;
