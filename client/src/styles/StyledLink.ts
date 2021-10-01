import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './index';

const StyledLink = styled(Link)<{ $filledLink?: boolean }>`
    padding: 1rem 1.5rem;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 1.8rem;
    ${(props) =>
        props.$filledLink &&
        `color:white;
        border-radius:3rem;
        background-color:${colors.primary}`}
`;

export default StyledLink;
