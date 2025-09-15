import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders navigation and Home page', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Nâng Tầm/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Về chúng tôi/i })).toBeInTheDocument();
  });
});
