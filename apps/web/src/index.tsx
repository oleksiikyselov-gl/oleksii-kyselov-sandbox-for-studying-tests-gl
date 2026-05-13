import { UserRegistrationForm } from '@repo/ui';
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Sandbox App</h1>
      <UserRegistrationForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
