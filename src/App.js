import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MyCalendar from '../pages/MyCalendar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/calendar" /> : <LoginPage onLogin={setIsLoggedIn} />}
        />
        <Route
          path="/calendar"
          element={isLoggedIn ? <MyCalendar /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
