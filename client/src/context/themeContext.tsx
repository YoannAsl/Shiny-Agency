import { createContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<null | ThemeContextType>(null);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
