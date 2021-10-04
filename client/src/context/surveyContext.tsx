import { createContext, useState } from 'react';

interface SurveyContextType {
    answers: {};
    saveAnswers: ({}) => void;
}

export const SurveyContext = createContext<SurveyContextType | null>(null);

const SurveyProvider: React.FC = ({ children }) => {
    const [answers, setAnswers] = useState({});
    const saveAnswers = (newAnswers: {}) => {
        setAnswers({ ...answers, ...newAnswers });
    };

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyProvider;
