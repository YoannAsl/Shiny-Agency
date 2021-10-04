import image from '../assets/404.svg';
import styled from 'styled-components';
import { colors } from '../styles';

function Error() {
    return (
        <Main>
            <h1>Oups ! Cette page n'existe pas.</h1>
            <img src={image} alt='404 illustration' />
        </Main>
    );
}

const Main = styled.main`
    background-color: ${colors.backgroundLight};
    display: flex;
    margin: 0 1rem;
    padding: 10rem;
    border-radius: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export default Error;
