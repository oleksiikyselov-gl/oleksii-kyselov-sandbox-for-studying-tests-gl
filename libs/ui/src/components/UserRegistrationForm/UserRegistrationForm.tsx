import { useState } from 'react';
import { StatusDisplay } from '../StatusDisplay/StatusDisplay';
import { registerUser } from '@repo/authorization';
import styles from './UserRegistrationForm.module.css';

export const UserRegistrationForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const isNameEmpty = name.length === 0;
  const isNameTooShort = name.length > 0 && name.length < 3;
  const isInvalid = isNameEmpty || isNameTooShort;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isInvalid) {
      setIsButtonClicked(true);
      return;
    }

    setStatus('loading');

    const result = await registerUser(name);
    setStatus(result === 'Success!' ? 'success' : 'error');
  };

  return (
    <form className={styles.form} data-a-test='register-form'>
      <label className={styles.label} htmlFor='name-input'>
        Enter your name:
      </label>

      <input
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        id='name-input'
        placeholder='John'
      />

      {isInvalid && isButtonClicked && (
        <p className={styles.error}>{isNameEmpty ? 'Name is required.' : 'Name must be at least 3 characters.'}</p>
      )}

      <button className={styles.button} onClick={handleSubmit}>
        Register
      </button>

      {status !== 'idle' && <StatusDisplay status={status} aTest='registration-status' />}
    </form>
  );
};
