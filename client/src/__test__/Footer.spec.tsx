import Footer from '../components/Footer';
import { render } from '@testing-library/react';
import ThemeProvider from '../context/themeContext';

describe('Footer', () => {
    test('Should render without crashing', () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        );
    });
});
