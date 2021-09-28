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
        jobTitle: 'Frontend Developer',
        picture: defaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Fullstack Developer',
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
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
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
        </div>
    );
};

export default Freelances;
