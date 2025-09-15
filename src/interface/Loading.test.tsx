import { render, screen } from '@testing-library/react';
import { Spinner, Skeleton } from './Loading';

describe('Spinner', () => {
  it('renders with correct size', () => {
    render(<Spinner size={40} />);
    const spinner = screen.getByLabelText(/đang tải/i);
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle({ width: '40px', height: '40px' });
  });
});

describe('Skeleton', () => {
  it('renders with custom class', () => {
    render(<Skeleton className="test-skeleton" />);
  expect(screen.getByRole('presentation', { hidden: true })).toHaveClass('test-skeleton');
  });
});
