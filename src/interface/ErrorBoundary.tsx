import React from 'react';

type ErrorBoundaryProps = { children: React.ReactNode };
type ErrorBoundaryState = { hasError: boolean; error: Error | null };
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Optionally log error or send to monitoring
    void error;
    void info;
    // console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] p-8">
          <span className="text-5xl mb-4">🚨</span>
          <h2 className="text-xl font-bold text-red-600 mb-2">Đã xảy ra lỗi không mong muốn</h2>
          <div className="text-neutral-700 mb-4">
            {this.state.error?.message || 'Có lỗi xảy ra, vui lòng thử lại sau.'}
          </div>
          <button
            className="px-4 py-2 bg-primary text-white rounded"
            onClick={() => window.location.reload()}
          >
            Tải lại trang
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
