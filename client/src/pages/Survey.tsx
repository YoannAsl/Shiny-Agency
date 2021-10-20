import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, Loader } from '../styles';
import { SurveyContext } from './../context/surveyContext';
import { ThemeContext } from './../context/themeContext';
import { useQuery } from 'react-query';

interface ParamTypes {
    questionNumber: string;
}

const fetchQuestions = async () => {
    const res = await fetch('http://localhost:8000/survey');
    return res.json();
};

function Survey() {
    const surveyContext = useContext(SurveyContext);
    const themeContext = useContext(ThemeContext);
    const { questionNumber } = useParams<ParamTypes>();
    const { data, isLoading, isSuccess, error } = useQuery(
        'questions',
        fetchQuestions
    );

    function saveAnswer(answer: boolean) {
        surveyContext?.saveAnswer(questionNumber, answer);
    }

    return (
        <Main>
            <Title theme={themeContext!.theme}>Question {questionNumber}</Title>
            {error && 'Oups, il y a eu un problème.'}
            {isLoading && <Loader />}
            {isSuccess && (
                <>
                    <Question theme={themeContext!.theme}>
                        {data.surveyData[+questionNumber]}
                    </Question>
                    <div>
                        <AnswerButton
                            onClick={() => saveAnswer(true)}
                            isSelected={
                                surveyContext?.answers[+questionNumber] === true
                            }
                            theme={themeContext!.theme}
                        >
                            Oui
                        </AnswerButton>
                        <AnswerButton
                            onClick={() => saveAnswer(false)}
                            isSelected={
                                surveyContext?.answers[+questionNumber] ===
                                false
                            }
                            theme={themeContext!.theme}
                        >
                            Non
                        </AnswerButton>
                    </div>
                    <LinksContainer>
                        {+questionNumber === 1 ? (
                            <DisabledLink>Précédente</DisabledLink>
                        ) : (
                            <SurveyLink
                                theme={themeContext!.theme}
                                to={`/survey/${+questionNumber - 1}`}
                            >
                                Précédente
                            </SurveyLink>
                        )}
                        {+questionNumber ===
                        Object.keys(data.surveyData).length ? (
                            <SurveyLink
                                theme={themeContext!.theme}
                                to='/results'
                            >
                                Résultat
                            </SurveyLink>
                        ) : (
                            <SurveyLink
                                theme={themeContext!.theme}
                                to={`/survey/${+questionNumber + 1}`}
                            >
                                Suivante
                            </SurveyLink>
                        )}
                    </LinksContainer>
                </>
            )}
        </Main>
    );
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
const Title = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const Question = styled.p`
    font-size: 2rem;
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const AnswerButton = styled.button<{ isSelected: boolean; theme: string }>`
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    padding: 3rem 8rem;
    border-radius: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 2rem;
    border: 0.2rem solid transparent;
    box-shadow: ${({ isSelected }) =>
        isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
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

const SurveyLink = styled(Link)`
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const DisabledLink = styled.p`
    margin: 0;
    font-size: 1.8rem;
    cursor: default;
    color: rgb(192, 202, 207);
`;

export default Survey;
