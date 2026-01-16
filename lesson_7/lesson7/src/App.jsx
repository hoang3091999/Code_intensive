import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <LoginForm onSwitchToSignUp={() => setIsLogin(false)} />
      ) : (
        <SignUpForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;
