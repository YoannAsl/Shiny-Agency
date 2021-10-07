import styled from 'styled-components';
import { colors, Loader } from '../styles';
import { useContext, useEffect, useState } from 'react';
import { SurveyContext } from './../context/surveyContext';

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

function Results() {
    const surveyContext = useContext(SurveyContext);
    const fetchParams = formatFetchParams(surveyContext!.answers);
    const [data, setData] = useState<ResultType[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        async function getData() {
            setIsDataLoading(true);
            try {
                const res = await fetch(
                    `http://localhost:8000/results?${fetchParams}`
                );
                const { resultsData } = await res.json();
                setData(resultsData);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setIsDataLoading(false);
            }
        }
        getData();
    }, []);
    console.log(data);

    if (error) return <span>Il y a un problème</span>;

    return isDataLoading ? (
        <Loader />
    ) : (
        <Main>
            <h1>Les compétences dont vous avez besoin : </h1>
            {data &&
                data.map((result, idx) => (
                    <p key={idx}>
                        {result.title}
                        {idx === data.length - 1 ? '' : ','}
                    </p>
                ))}
            {data &&
                data.map((result, idx) => (
                    <div>
                        <p key={idx}>{result.title}</p>
                        <p key={idx}>{result.description}</p>
                    </div>
                ))}
        </Main>
    );
}

const Main = styled.main`
    background-color: ${colors.backgroundLight};
    display: flex;
    margin: 0 1rem;
    padding: 10rem 5rem;
    border-radius: 1.5rem;
`;

export default Results;
