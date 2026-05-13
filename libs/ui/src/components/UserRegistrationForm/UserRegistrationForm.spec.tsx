import { render, screen } from '@testing-library/react';
import { UserRegistrationForm } from './UserRegistrationForm';
import userEvent from '@testing-library/user-event';
import { registerUser } from '@repo/authorization/mocks';

jest.mock('@repo/authorization', () => ({
  registerUser: require('@repo/authorization/mocks').registerUser,
}));

describe('UserRegistrationForm', () => {
  it('should render form with status idle', () => {
    render(<UserRegistrationForm />);

    const form = screen.getByTestId('register-form');
    expect(form).toBeInTheDocument();

    const label = screen.getByLabelText('Enter your name:');
    expect(label).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/register/i);

    const status = screen.getByTestId('registration-status');
    expect(status).toHaveTextContent(/^Idle$/);
  });
  it('should show success status after registration', async () => {
    const user = userEvent.setup();
    render(<UserRegistrationForm />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Alex');

    const button = screen.getByRole('button');
    await user.click(button);

    expect(registerUser).toHaveBeenCalledWith('Alex');

    const success = await screen.findByTestId('registration-status');
    expect(success).toHaveTextContent(/^Success!$/);
  });
});
