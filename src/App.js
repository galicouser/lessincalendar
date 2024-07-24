import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <CalendarPage />
      )}
    </div>
  );
};

export default App;
