// import defaultPicture from '../assets/profile.png';
import Card from '../components/Card';
import styled from 'styled-components';
import { colors, Loader } from '../styles';
import { useQuery } from 'react-query';

interface ProfileTypes {
    id: number;
    name: string;
    job: string;
    picture: string;
}

const fetchFreelances = async () => {
    const res = await fetch('http://localhost:8000/freelances');
    return res.json();
};

function Freelances() {
    const { data, isLoading, isSuccess, error } = useQuery(
        'freelances',
        fetchFreelances
    );

    return (
        <Main>
            <h1>Trouvez votre prestataire</h1>
            <h2>
                Chez Shiny, nous réunissons les meilleurs profils pour vous.
            </h2>
            {error && 'Oups, il y a eu un problème.'}
            {isLoading && <Loader />}
            {isSuccess && (
                <CardsContainer>
                    {data.freelancersList.map((profile: ProfileTypes) => (
                        <Card
                            key={profile.id}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            )}
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
        color: ${colors.secondary};
    }
`;

const CardsContainer = styled.div`
    display: grid;
    gap: 7rem;
    grid-template-rows: 35rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 7rem;
`;

export default Freelances;
