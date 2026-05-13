type Status = 'idle' | 'loading' | 'success' | 'error';

export const StatusDisplay = ({ status = 'idle', aTest }: { status: Status; aTest?: string }) => {
  const messages = {
    idle: 'Idle',
    loading: 'Loading...',
    success: 'Success!',
    error: 'Error!',
  };

  return <div data-a-test={aTest}>{messages[status]}</div>;
};
