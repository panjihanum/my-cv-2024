import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../context/ThemeContext';
import { DarkLightButton } from '../DarkLightButton';

describe('DarkLightButton', () => {
  test('toggles theme and updates localStorage', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <DarkLightButton />
      </ThemeProvider>
    );

    // Button appears after mount effect
    const btn = await screen.findByRole('button');
    // initial localStorage should become "0" after first toggle
    await user.click(btn);
    expect(localStorage.getItem('useDarkTheme')).toBe('0');
  });
});
