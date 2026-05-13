import { render, screen } from '@testing-library/react';
import { StatusDisplay } from './StatusDisplay';

describe('StatusDisplay', () => {
  it('should render the status Idle when passed status idle', () => {
    render(<StatusDisplay status='idle' aTest='status-div' />);

    const element = screen.getByTestId('status-div');
    expect(element).toHaveTextContent(/^Idle$/);
  });
  it('should render the status Loading when passed status loading', () => {
    render(<StatusDisplay status='loading' aTest='status-div' />);

    const element = screen.getByTestId('status-div');
    expect(element).toHaveTextContent(/^Loading...$/);
  });
  it('should render the status Success when passed status success', () => {
    render(<StatusDisplay status='success' aTest='status-div' />);

    const element = screen.getByTestId('status-div');
    expect(element).toHaveTextContent(/^Success!$/);
  });
  it('should render the status Error when passed status error', () => {
    render(<StatusDisplay status='error' aTest='status-div' />);

    const element = screen.getByTestId('status-div');
    expect(element).toHaveTextContent(/^Error!$/);
  });
  it('should not render the status Error when passed status success', () => {
    render(<StatusDisplay status='success' aTest='status-div' />);

    const element = screen.getByTestId('status-div');
    expect(element).not.toHaveTextContent(/^Error!$/);
  });
});
