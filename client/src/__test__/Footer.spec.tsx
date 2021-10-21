import Footer from '../components/Footer';
import { render, screen } from '@testing-library/react';
import ThemeProvider from '../context/themeContext';

describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        );
        screen.debug();
    });
});
