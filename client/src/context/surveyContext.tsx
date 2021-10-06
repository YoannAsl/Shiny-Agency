import { createContext, useState } from 'react';

interface SurveyContextType {
    answers: { [key: string]: boolean };
    saveAnswer: (questionNumber: string, answer: boolean) => void;
}

export const SurveyContext = createContext<SurveyContextType | null>(null);

const SurveyProvider: React.FC = ({ children }) => {
    const [answers, setAnswers] = useState({});
    const saveAnswer = (questionNumber: string, answer: boolean) => {
        setAnswers({ ...answers, [questionNumber]: answer });
    };

    return (
        <SurveyContext.Provider value={{ answers, saveAnswer }}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyProvider;
