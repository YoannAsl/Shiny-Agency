import styled from 'styled-components';
import colors from '../styles/colors';
import homeIllustration from '../assets/home-illustration.svg';
import { Link } from 'react-router-dom';

const Main = styled.main`
    background-color: ${colors.backgroundLight};
    display: flex;
    margin: 0 1rem;
    padding: 10rem 5rem;
`;

const TextContainer = styled.div`
    padding-right: 2rem;
    h1 {
        font-size: 50px;
        line-height: 80px;
    }
`;

const StyledLink = styled(Link)`
    padding: 15px;
    text-decoration: none;
    color: white;
    border-radius: 30px;
    font-size: 18px;
    background-color: ${colors.primary};
`;

function Home() {
    return (
        <Main>
            <TextContainer>
                <h1>
                    Repérez vos besoins, on s’occupe du reste, avec les
                    meilleurs talents
                </h1>
                <StyledLink to='/survey/1'>Faire le test</StyledLink>
            </TextContainer>
            <img src={homeIllustration} alt='illustration' />
        </Main>
    );
}

export default Home;
