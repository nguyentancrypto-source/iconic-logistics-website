import { render, screen } from '@testing-library/react';
import { Card } from './ui';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
  it('applies custom className', () => {
    render(<Card className="test-class">Test</Card>);
    expect(screen.getByText('Test')).toHaveClass('test-class');
  });
});
