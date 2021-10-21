import Footer from '../components/Footer';
import { fireEvent, render, screen } from '@testing-library/react';
import ThemeProvider from '../context/themeContext';

it('Changes theme', () => {
    render(
        <ThemeProvider>
            <Footer />
        </ThemeProvider>
    );
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Changer de mode : ☀️');
    fireEvent.click(button);
    expect(button.textContent).toBe('Changer de mode : 🌙');
});
