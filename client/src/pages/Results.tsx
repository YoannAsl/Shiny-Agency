import styled from 'styled-components';
import { colors, Loader } from '../styles';
import { useContext } from 'react';
import { SurveyContext } from '../context/surveyContext';
import { ThemeContext } from '../context/themeContext';
import { useQuery } from 'react-query';

interface ResultType {
    title: string;
    description: string;
}

function formatFetchParams(answers: { [key: string]: boolean }) {
    const answerNumbers = Object.keys(answers);

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0;
        const separator = isFirstParam ? '' : '&';

        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
    }, '');
}

const fetchResults = async (fetchParams: string) => {
    const res = await fetch(`http://localhost:8000/results?${fetchParams}`);
    return res.json();
};

function Results() {
    const themeContext = useContext(ThemeContext);
    const surveyContext = useContext(SurveyContext);
    const fetchParams = formatFetchParams(surveyContext!.answers);

    const { data, isLoading, error } = useQuery('results', () =>
        fetchResults(fetchParams)
    );

    if (error) return <span>Il y a un problème</span>;
    if (isLoading) return <Loader />;
    return (
        <Main theme={themeContext?.theme}>
            <ResultsTitle theme={themeContext!.theme}>
                Les compétences dont vous avez besoin :{' '}
                {data.resultsData.map((result: ResultType, idx: number) => (
                    <JobTitle
                        theme={themeContext!.theme}
                        key={`result-title-${idx}`}
                    >
                        {result.title}
                        {idx === data.length - 1 ? '' : ', '}
                    </JobTitle>
                ))}
            </ResultsTitle>
            {data.resultsData.map((result: ResultType, idx: number) => (
                <JobDescription
                    theme={themeContext!.theme}
                    key={`result-detail-${idx}`}
                >
                    <p>{result.title}</p>
                    <p>{result.description}</p>
                </JobDescription>
            ))}
        </Main>
    );
}

const Main = styled.main`
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 10rem 5rem;
    border-radius: 1.5rem;
`;

const ResultsTitle = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
    font-weight: bold;
    font-size: 2.8rem;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 1rem;
    }
`;

const JobTitle = styled.span`
    color: ${({ theme }) =>
        theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`;

const JobDescription = styled.div`
    font-size: 1.8rem;
    & > p {
        color: ${({ theme }) =>
            theme === 'light' ? colors.secondary : 'white'};
        margin-block-start: 0.5rem;
    }
    & > span {
        font-size: 2rem;
    }
`;

export default Results;
