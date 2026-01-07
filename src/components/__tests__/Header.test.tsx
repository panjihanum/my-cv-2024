import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import { Header } from '../Header';

// Basic render test to ensure nav labels present
describe('Header', () => {
  test('renders navigation labels', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const labels = ['Home','About Me','Skills','Portfolio','Experience','Education','Contact'];
    for (const label of labels) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });
});
