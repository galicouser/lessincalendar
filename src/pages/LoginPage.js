import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard, StyledTextField, StyledButton } from '../styled/LoginStyles';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Updated from useHistory to useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'demo' && password === 'demo123') {
      onLogin(true);
      navigate('/calendar');  // Updated from history.push to navigate
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField 
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <StyledTextField 
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <StyledButton type="submit" color="primary" variant="contained">
            Login
          </StyledButton>
        </form>
      </CardContent>
    </StyledCard>
  );
};

export default LoginPage;
