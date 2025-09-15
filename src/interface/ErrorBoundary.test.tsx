import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe content</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });
  it('renders fallback UI on error', () => {
    // Simulate error by throwing in child
    const Problem = () => {
      throw new Error('Test error');
    };
    render(
      <ErrorBoundary>
        <Problem />
      </ErrorBoundary>,
    );
    expect(screen.getByText(/đã xảy ra lỗi/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tải lại/i })).toBeInTheDocument();
  });
});
