import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders navigation and Home page', () => {
    render(<App />);
  // Ensure there is a main H1 on the homepage (hero title)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Về chúng tôi/i })).toBeInTheDocument();
  });
});
