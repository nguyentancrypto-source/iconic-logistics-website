import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './ui';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  it('handles click', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalled();
  });
  it('shows loading spinner', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });
  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
