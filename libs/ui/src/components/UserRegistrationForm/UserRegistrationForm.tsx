import { useState } from 'react';
import { StatusDisplay } from '../StatusDisplay/StatusDisplay';
import { registerUser } from '@repo/authorization';

export const UserRegistrationForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setStatus('loading');

    const result = await registerUser(name);
    setStatus(result === 'Success!' ? 'success' : 'error');
  };

  return (
    <form data-a-test='register-form'>
      <label htmlFor='name-input'>Enter your name:</label>

      <input value={name} onChange={(e) => setName(e.target.value)} id='name-input' placeholder='John' />
      <button onClick={handleSubmit}>Register</button>

      <StatusDisplay status={status} aTest='registration-status' />
    </form>
  );
};
