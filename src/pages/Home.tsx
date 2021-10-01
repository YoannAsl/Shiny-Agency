import styled from 'styled-components';
import colors from '../styles/colors';
import homeIllustration from '../assets/home-illustration.svg';
import { Link } from 'react-router-dom';

const Main = styled.main`
    background-color: ${colors.backgroundLight};
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    padding: 10rem 5rem;
    border-radius: 1.5rem;
`;

const TextContainer = styled.div`
    h1 {
        font-size: 5rem;
        line-height: 9rem;
        margin-bottom: 8rem;
    }
`;

const StyledLink = styled(Link)`
    padding: 1.5rem;
    text-decoration: none;
    color: white;
    border-radius: 3rem;
    font-size: 1.8rem;
    background-color: ${colors.primary};
`;

function Home() {
    return (
        <Main>
            <TextContainer>
                <h1>
                    Repérez vos besoins,
                    <br /> on s’occupe du reste,
                    <br /> avec les meilleurs talents
                </h1>
                <StyledLink to='/survey/1'>Faire le test</StyledLink>
            </TextContainer>
            <img src={homeIllustration} alt='illustration' />
        </Main>
    );
}

export default Home;
