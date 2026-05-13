import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly with label', () => {
    render(<Button label='Click me' onClick={jest.fn()} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button label='Click me' onClick={handleClick} />);

    await user.click(screen.getByTestId('submit-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label='Click me' onClick={jest.fn()} disabled />);
    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });
});
