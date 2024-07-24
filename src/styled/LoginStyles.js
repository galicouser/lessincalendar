import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const StyledCard = styled(Card)({
  maxWidth: 400, 
  margin: 'auto', 
  marginTop: '10%',
});

export const StyledTextField = styled(TextField)({
  width: '100%', // Ensures TextField takes the full width
  marginBottom: '20px', // Adds space below each TextField
});

export const StyledButton = styled(Button)({
  width: '100%', // Button takes the full width of its container
});
