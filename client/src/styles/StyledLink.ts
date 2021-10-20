import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './index';

const StyledLink = styled(Link)<{ $filledLink?: boolean; theme?: string }>`
    padding: 1rem 1.5rem;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 1.8rem;
    color: ${({ theme }) => (theme === 'light' ? '#8186a0' : 'white')};
    ${({ $filledLink }) =>
        $filledLink &&
        `color: white; 
    border-radius: 3rem; 
    background-color: ${colors.primary};`}
`;

export default StyledLink;
