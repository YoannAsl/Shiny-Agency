import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';

interface CardProps {
    label: string;
    name: string;
    picture: string;
}

function Card({ label, name, picture }: CardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const themeContext = useContext(ThemeContext);

    return (
        <Wrapper
            onClick={() => setIsFavorite(!isFavorite)}
            theme={themeContext?.theme}
        >
            <Label theme={themeContext?.theme}>{label}</Label>
            <Image src={picture} alt='Freelance' />
            <Name theme={themeContext?.theme}>
                {isFavorite ? `⭐️ ${name} ⭐️` : name}
            </Name>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 3rem;
    width: 35rem;
    transition: 200ms;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
        box-shadow: ${({ theme }) =>
            theme === 'light'
                ? '0.2rem 0.2rem 1rem #e2e3e9'
                : `0.2rem 0.2rem 1rem #565470`};
    }
`;

const Label = styled.p`
    color: ${({ theme }) => (theme === 'light' ? '#5843e4' : 'white')};
    font-size: 2.4rem;
    font-weight: bold;
`;

const Image = styled.img`
    height: 14.8rem;
    width: 14.8rem;
    border-radius: 50%;
`;

const Name = styled.p`
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
    font-size: 2.5rem;
`;
export default Card;
