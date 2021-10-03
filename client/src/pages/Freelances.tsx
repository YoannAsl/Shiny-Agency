import { useEffect, useState } from 'react';
// import defaultPicture from '../assets/profile.png';
import Card from '../components/Card';
import styled from 'styled-components';
import { colors, Loader } from '../styles';

interface ProfileTypes {
    id: number;
    name: string;
    job: string;
    picture: string;
}

// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'DevOps',
//         picture: defaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Développeur Frontend',
//         picture: defaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeur Fullstack',
//         picture: defaultPicture,
//     },
// ];

const Freelances = () => {
    const [profiles, setProfiles] = useState<ProfileTypes[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        async function getData() {
            setIsDataLoading(true);
            try {
                const res = await fetch('http://localhost:8000/freelances');
                const { freelancersList } = await res.json();
                setProfiles(freelancersList);
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
            <h1>Trouvez votre prestataire</h1>
            <h2>
                Chez Shiny, nous réunissons les meilleurs profils pour vous.
            </h2>
            {error ? (
                'Oups, il y a eu un problème.'
            ) : isDataLoading ? (
                <Loader />
            ) : (
                <CardsContainer>
                    {profiles.map((profile) => (
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
};

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
