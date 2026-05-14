import { registerUser } from './user-registration';

describe('UserRegistrationService', () => {
  it('should resolve success', async () => {
    const result = await registerUser('Alex');
    expect(result).toBe('Success!');
  });
});
