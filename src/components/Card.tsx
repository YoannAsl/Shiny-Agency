interface CardProps {
    label: string;
    title: string;
    picture: string;
}

const Card = ({ label, title, picture }: CardProps) => {
    return (
        <div>
            <span>{label}</span>
            <img src={picture} alt='freelance' />
            <span>{title}</span>
        </div>
    );
};

export default Card;
