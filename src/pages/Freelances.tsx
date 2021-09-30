import defaultPicture from '../assets/profile.png';
import Card from './../components/Card';
import styled from 'styled-components';

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

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

const Freelances = () => {
    return (
        <main>
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
        </main>
    );
};

export default Freelances;
