import ReactDOM from 'react-dom/client';
import { UserRegistrationForm } from '@repo/ui';
import styles from './App.module.css';
import './index.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <UserRegistrationForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
