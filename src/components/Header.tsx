import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../styles/colors';

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    /* ${(props) =>
        props.$isFullLink &&
        `color:white;border-radius:30px;background-color:${colors.primary}`} */
`;

const Header = () => {
    return (
        <nav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/survey/42'>Survey</StyledLink>
            <StyledLink to='/freelances'>Freelances</StyledLink>
        </nav>
    );
};

export default Header;
