import styled from 'styled-components';
import colors from '../styles/colors';

const Main = styled.main`
    background-color: ${colors.backgroundLight};
    display: flex;
    margin: 0 1rem;
    padding: 10rem 5rem;
    border-radius: 1.5rem;
`;

const Results = () => {
    return (
        <Main>
            <h1>Les compétences dont vous avez besoin : </h1>
        </Main>
    );
};

export default Results;
