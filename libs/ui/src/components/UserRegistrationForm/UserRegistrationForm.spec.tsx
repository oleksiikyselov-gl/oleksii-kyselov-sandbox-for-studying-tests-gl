import { render, screen } from '@testing-library/react';
import { UserRegistrationForm } from './UserRegistrationForm';
import userEvent from '@testing-library/user-event';
import { registerUser } from '@repo/authorization/mocks';

jest.mock('@repo/authorization', () => ({
  registerUser: require('@repo/authorization/mocks').registerUser,
}));

describe('UserRegistrationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/name must be at least 3 characters/i)).not.toBeInTheDocument();

    const status = screen.queryByTestId('registration-status');
    expect(status).not.toBeInTheDocument();
  });

  it('should show input errors when name is empty', async () => {
    const user = userEvent.setup();
    render(<UserRegistrationForm />);

    const button = screen.getByRole('button', { name: /register/i });
    await user.click(button);

    const errorMessage = screen.getByText(/name is required/i);
    expect(errorMessage).toBeInTheDocument();

    expect(registerUser).not.toHaveBeenCalled();
  });

  it('should show input errors when one letter of the code was entered', async () => {
    const user = userEvent.setup();
    render(<UserRegistrationForm />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'A');

    const button = screen.getByRole('button', { name: /register/i });
    await user.click(button);

    const errorMessage = screen.getByText(/name must be at least 3 characters/i);
    expect(errorMessage).toBeInTheDocument();

    expect(registerUser).not.toHaveBeenCalled();
  });

  it('should show input errors when two letters of the code was entered', async () => {
    const user = userEvent.setup();
    render(<UserRegistrationForm />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Al');

    const button = screen.getByRole('button', { name: /register/i });
    await user.click(button);

    const errorMessage = screen.getByText(/name must be at least 3 characters/i);
    expect(errorMessage).toBeInTheDocument();

    expect(registerUser).not.toHaveBeenCalled();
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

  it('should show error status when server registration fails', async () => {
    const user = userEvent.setup();
    (registerUser as jest.Mock).mockResolvedValue('Error!');

    render(<UserRegistrationForm />);

    await user.type(screen.getByRole('textbox'), 'Alex');
    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(registerUser).toHaveBeenCalledWith('Alex');

    const status = await screen.findByTestId('registration-status');
    expect(status).toHaveTextContent(/^Error!$/);
  });
});
