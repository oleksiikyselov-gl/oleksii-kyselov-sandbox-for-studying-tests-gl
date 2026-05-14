import styles from './StatusDisplay.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const StatusDisplay = ({ status, aTest }: { status: Status; aTest?: string }) => {
  const messages = {
    idle: 'Idle',
    loading: 'Loading...',
    success: 'Success!',
    error: 'Error!',
  };

  const className = `${styles.status} ${styles[status]}`;

  return (
    <div className={className} data-a-test={aTest}>
      {messages[status]}
    </div>
  );
};
