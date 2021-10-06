import styled from 'styled-components';
import { colors } from '../styles';
import { useContext } from 'react';
import { SurveyContext } from './../context/surveyContext';

function Results() {
    const surveyContext = useContext(SurveyContext);
    console.log(surveyContext);
    return (
        <Main>
            <h1>Les compétences dont vous avez besoin : </h1>
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
