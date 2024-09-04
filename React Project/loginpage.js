import React, { useState } from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TextField, Typography, Container, Box, Link, FormControlLabel, Checkbox } from '@mui/material';
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

function LoginPage({ onSwitchToSignUp, onSwitchToHome }) {
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
    onSwitchToHome();
  }

  return (
    <StyledContainer>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Log In
      </Typography>
      <FormContainer>
        <Typography variant="h6" component="h2">
          Email Address
        </Typography>
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
        <Typography variant="h6" component="h2">
          Password
        </Typography>
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
                I accept the{' '}
                <Link href="#" underline="hover" color="primary">
                  Terms and Conditions
                </Link>
              </Typography>
            }
          />
          <Typography variant="body2" align="right">
            <Link href="#" underline="hover" color="primary">
              Forgot Password?
            </Link>
          </Typography>
        </TermsContainer>
        <StyledButton
          variant="contained"
          onClick={handleLogin} 
          disabled={!acceptedTerms} 
        >
          Log In
        </StyledButton>
      </FormContainer>
      <br />
      <IconContainer>
        <OutlinedGoogleButton variant="outlined" startIcon={<GoogleIcon />} onClick={onSwitchToHome}>
          Log in with Google
        </OutlinedGoogleButton>
        <OutlinedFacebookButton variant="outlined" startIcon={<FacebookIcon />} onClick={onSwitchToHome}>
          Log in with Facebook
        </OutlinedFacebookButton>
      </IconContainer>
      <br />
      <Typography variant="body2" align="center" paragraph>
        Don't have an account?{' '}
        <Link href="#" underline="hover" color="primary" onClick={onSwitchToSignUp}>
          Sign up
        </Link>
        .
      </Typography>
    </StyledContainer>
  );
}

export default LoginPage;
