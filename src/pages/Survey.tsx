import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';

interface ParamTypes {
    questionNumber: string;
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    h1 {
        border-bottom: 0.2rem solid ${colors.primary};
        font-size: 2.5rem;
    }
`;

const Question = styled.p`
    font-size: 2rem;
`;

const Button = styled.button`
    background-color: ${colors.backgroundLight};
    padding: 3rem 8rem;
    border-radius: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 2rem;
    border: 0.2rem solid transparent;
    &:hover {
        border: 0.2rem solid ${colors.primary};
        font-weight: bold;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-top: 3rem;
`;

const StyledLink = styled(Link)`
    font-size: 1.8rem;
`;

const DisabledLink = styled.p`
    margin: 0;
    font-size: 1.8rem;
    cursor: default;
    color: rgb(192, 202, 207);
`;

const Survey = () => {
    const { questionNumber } = useParams<ParamTypes>();
    return (
        <Main>
            <h1>Question {questionNumber}</h1>
            <Question>question</Question>
            <div>
                <Button>Oui</Button>
                <Button>Non</Button>
            </div>
            <LinksContainer>
                {+questionNumber === 1 ? (
                    <DisabledLink>Précédente</DisabledLink>
                ) : (
                    <StyledLink to={`/survey/${+questionNumber - 1}`}>
                        Précédente
                    </StyledLink>
                )}
                {+questionNumber === 10 ? (
                    <StyledLink to='/results'>Résultat</StyledLink>
                ) : (
                    <StyledLink to={`/survey/${+questionNumber + 1}`}>
                        Suivante
                    </StyledLink>
                )}
            </LinksContainer>
        </Main>
    );
};

export default Survey;
