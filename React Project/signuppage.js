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
  height: '750px',
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

function SignUpPage({ onSwitchToLogin, onSwitchToHome }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleTermsChange(event) {
    setAcceptedTerms(event.target.checked);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSignUp() {
    const isEmailValid = validateEmail(email);
    const doPasswordsMatch = password === confirmPassword;

    setEmailValid(isEmailValid);
    setPasswordsMatch(doPasswordsMatch);

    if (!isEmailValid) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!doPasswordsMatch) {
      alert('Passwords do not match.');
      return;
    }

    if (acceptedTerms) {
      onSwitchToHome();
    } else {
      alert('You must accept the terms and conditions to sign up.');
    }
  }

  return (
    <StyledContainer>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Sign Up
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
        <Typography variant="h6" component="h2">
          Confirm Password
        </Typography>
        <TextField
          id="ConfirmPassword"
          label="Confirm Password"
          variant="outlined"
          type="password"
          margin="normal"
          fullWidth
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={!passwordsMatch}
          helperText={!passwordsMatch ? 'Passwords do not match' : ''}
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
                .
              </Typography>
            }
          />
        </TermsContainer>
        <StyledButton
          variant="contained"
          onClick={handleSignUp}
          disabled={!acceptedTerms} 
        >
          Sign Up
        </StyledButton>
      </FormContainer>
      <br />
      <IconContainer>
        <OutlinedGoogleButton variant="outlined" startIcon={<GoogleIcon />} onClick={onSwitchToHome}>
          Sign up with Google
        </OutlinedGoogleButton>
        <OutlinedFacebookButton variant="outlined" startIcon={<FacebookIcon />} onClick={onSwitchToHome}>
          Sign up with Facebook
        </OutlinedFacebookButton>
      </IconContainer>
      <Typography variant="body2" align="center" paragraph>
        Already have an account?{' '}
        <Link href="#" underline="hover" color="primary" onClick={onSwitchToLogin}>
          Sign in
        </Link>
        .
      </Typography>
    </StyledContainer>
  );
}

export default SignUpPage;



