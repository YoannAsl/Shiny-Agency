import styled from 'styled-components';
import { colors } from '../styles';

interface CardProps {
    label: string;
    title: string;
    picture: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background-color: ${colors.backgroundLight};
    border-radius: 3rem;
    width: 35rem;
    transition: 200ms;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
        box-shadow: 0.2rem 0.2rem 1rem #e2e3e9;
    }
`;

const Label = styled.p`
    color: #5843e4;
    font-size: 2.4rem;
    font-weight: bold;
`;

const Image = styled.img`
    height: 14.8rem;
    width: 14.8rem;
    border-radius: 50%;
`;

const Name = styled.p`
    color: black;
    font-size: 2.5rem;
`;

const Card = ({ label, title, picture }: CardProps) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Image src={picture} alt='Freelance' />
            <Name>{title}</Name>
        </Wrapper>
    );
};

export default Card;
