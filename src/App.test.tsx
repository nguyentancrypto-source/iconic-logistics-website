import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders navigation and Home page', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Giải pháp Logistics/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  });
});
