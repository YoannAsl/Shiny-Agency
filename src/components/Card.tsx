import styled from 'styled-components';
import colors from './../styles/colors';

interface CardProps {
    label: string;
    title: string;
    picture: string;
}

const Label = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

const Card = ({ label, title, picture }: CardProps) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Image src={picture} alt='Freelance' />
            <span>{title}</span>
        </Wrapper>
    );
};

export default Card;
