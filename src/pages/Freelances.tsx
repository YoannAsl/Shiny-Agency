import defaultPicture from '../assets/profile.png';
import Card from './../components/Card';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: defaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Frontend developer',
        picture: defaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Fullstack developer',
        picture: defaultPicture,
    },
];

const Freelances = () => {
    return (
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={index}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    );
};

export default Freelances;
