import defaultPicture from '../assets/profile.png';
import Card from '../components/Card';
import styled from 'styled-components';
import { colors } from '../styles';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'DevOps',
        picture: defaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur Frontend',
        picture: defaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeur Fullstack',
        picture: defaultPicture,
    },
];

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

const Freelances = () => {
    return (
        <Main>
            <h1>Trouvez votre prestataire</h1>
            <h2>
                Chez Shiny, nous réunissons les meilleurs profils pour vous.
            </h2>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={index}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </Main>
    );
};

export default Freelances;
