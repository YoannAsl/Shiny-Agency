import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../styles/colors';
import lightLogo from '../assets/light-logo.svg';
import darkLogo from '../assets/dark-logo.svg';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)<{ $filledLink?: boolean }>`
    padding: 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$filledLink &&
        `color:white;border-radius:30px;background-color:${colors.primary}`}
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={lightLogo} alt='Shiny logo' />
            <nav>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/freelances'>Profiles</StyledLink>
                <StyledLink to='/survey/1' $filledLink>
                    Take the test
                </StyledLink>
            </nav>
        </StyledHeader>
    );
};

export default Header;
