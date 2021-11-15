import { colors } from '.';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`from {transform:rotate(0deg)} to {transform:rotate(360deg)}`;

const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${spin} 1s infinite linear;
    height: 0;
    width: 0;
`;

export default Loader;
