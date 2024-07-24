import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage'; // Make sure this import is correct

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/calendar" /> : <LoginPage onLogin={setIsLoggedIn} />} />
      <Route path="/calendar" element={isLoggedIn ? <CalendarPage /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
