import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,TextField, Typography, Container, Box, Link, FormControlLabel, Checkbox } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'; // Adjust the import based on the actual icon name
import FacebookIcon from '@mui/icons-material/Facebook'; // Adjust the import based on the actual icon name
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '600px',
  height: '620px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const StyledButton = styled(Button)({
  width: '100%',
  marginTop: '0.5rem',
  borderRadius: '5px',
  alignSelf: 'center',
  background: '#7b1fa2',
  color: '#fff',
  border: 'none',
  '&:hover': {
    background: '#9c27b0',
  },
});

const IconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '1rem',
});

const OutlinedGoogleButton = styled(Button)({
  width: '100%',
  borderColor: '#db4437',
  color: '#db4437',
  borderRadius: '5px',
  '&:hover': {
    borderColor: '#c1351d',
    color: '#c1351d',
  },
});

const OutlinedFacebookButton = styled(Button)({
  width: '100%',
  borderColor: '#3b5998',
  color: '#3b5998',
  borderRadius: '5px',
  '&:hover': {
    borderColor: '#2d4373',
    color: '#2d4373',
  },
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const TermsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleTermsChange(event) {
    setAcceptedTerms(event.target.checked);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleLogin() {
    if (!validateEmail(email)) {
      setEmailValid(false);
      alert('Please enter a valid email address.');
      return;
    }
    navigate('/'); // Navigate to the home page
  }
  function handlehome()
  {
    navigate('/');
  }

  return (
    <StyledContainer>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Log In
      </Typography>
      <FormContainer>
        <TextField
          id="EmailAddress"
          label="Email Address"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          error={!emailValid}
          helperText={!emailValid ? 'Invalid email address' : ''}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
        <TermsContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={acceptedTerms}
                onChange={handleTermsChange}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I accept the terms and conditions.
              </Typography>
            }
          />
          <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
            <Typography variant="body2">Forgot password?</Typography>
          </Link>
        </TermsContainer>
        <StyledButton variant="contained" onClick={handleLogin}>
          Log In
        </StyledButton>
        <br />
      <IconContainer>
        <OutlinedGoogleButton variant="outlined" startIcon={<GoogleIcon />} onClick={handlehome}>
          Log in with Google
        </OutlinedGoogleButton>
        <OutlinedFacebookButton variant="outlined" startIcon={<FacebookIcon />} onClick={handlehome}>
          Log in with Facebook
        </OutlinedFacebookButton>
      </IconContainer>
      <br />
      </FormContainer>
      <Typography variant="body2" align="center" marginTop={2}>
        Don't have an account?{' '}
        <Link to="/signup" style={{ textDecoration: 'none' }} onClick={()=>navigate('/signup')}>
          Sign Up
        </Link>
      </Typography>
    </StyledContainer>
  );
}

export default LoginPage;


