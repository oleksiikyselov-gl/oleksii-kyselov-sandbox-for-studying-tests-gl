import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input Component', () => {
  it('updates value on change', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input label='Name' value='' onChange={handleChange} />);

    const input = screen.getByTestId('custom-input');
    await user.type(input, 'Hello');

    expect(handleChange).toHaveBeenCalled();
  });
});
