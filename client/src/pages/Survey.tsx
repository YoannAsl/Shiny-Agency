import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, Loader } from '../styles';

interface ParamTypes {
    questionNumber: string;
}

interface QuestionsType {
    [key: number]: string;
}

const Survey = () => {
    const { questionNumber } = useParams<ParamTypes>();
    const [questions, setQuestions] = useState<QuestionsType>({});
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        async function getData() {
            setIsDataLoading(true);
            try {
                const res = await fetch('http://localhost:8000/survey');
                const { surveyData } = await res.json();
                setQuestions(surveyData);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setIsDataLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <Main>
            <h1>Question {questionNumber}</h1>
            {error ? (
                'Oups, il y a eu un problème.'
            ) : isDataLoading ? (
                <Loader />
            ) : (
                <Question>{questions[+questionNumber]}</Question>
            )}
            <div>
                <Button>Oui</Button>
                <Button>Non</Button>
            </div>
            <LinksContainer>
                {+questionNumber === 1 ? (
                    <DisabledLink>Précédente</DisabledLink>
                ) : (
                    <Link to={`/survey/${+questionNumber - 1}`}>
                        Précédente
                    </Link>
                )}
                {+questionNumber === 6 ? (
                    <Link to='/results'>Résultat</Link>
                ) : (
                    <Link to={`/survey/${+questionNumber + 1}`}>Suivante</Link>
                )}
            </LinksContainer>
        </Main>
    );
};
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
    a {
        font-size: 1.8rem;
    }
`;

const DisabledLink = styled.p`
    margin: 0;
    font-size: 1.8rem;
    cursor: default;
    color: rgb(192, 202, 207);
`;

export default Survey;
