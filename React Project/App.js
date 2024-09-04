import React, { useState } from 'react';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const handleSwitchToLogin = () => {
    setCurrentPage('login');
  };

  const handleSwitchToSignUp = () => {
    setCurrentPage('signup');
  };

  const handleSwitchToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div>
      {currentPage === 'home' && (
        <HomePage
          onLoginClick={handleSwitchToLogin}
          onSignUpClick={handleSwitchToSignUp}
        />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onSwitchToSignUp={handleSwitchToSignUp}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'signup' && (
        <SignUpPage
          onSwitchToLogin={handleSwitchToLogin}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
    </div>
  );
}

export default App;
























