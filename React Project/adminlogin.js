// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, TextField, Typography, Container, Box, Link, FormControlLabel, Checkbox } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const AdminStyledContainer = styled(Container)({
//   backgroundColor: '#ffffff',
//   padding: '2rem',
//   borderRadius: '8px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   width: '600px',
//   height: '520px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// });

// const AdminStyledButton = styled(Button)({
//   width: '100%',
//   marginTop: '0.5rem',
//   borderRadius: '5px',
//   alignSelf: 'center',
//   background: '#d32f2f', // Admin-specific color
//   color: '#fff',
//   border: 'none',
//   '&:hover': {
//     background: '#f44336',
//   },
// });

// const AdminFormContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1rem',
// });

// const AdminTermsContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// });

// function AdminLoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [emailValid, setEmailValid] = useState(true);

//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   function handleTermsChange(event) {
//     setAcceptedTerms(event.target.checked);
//   }

//   function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   function handleLogin() {
//     if (!validateEmail(email)) {
//       setEmailValid(false);
//       alert('Please enter a valid email address.');
//       return;
//     }
//     navigate('/admin-dashboard'); // Navigate to the admin dashboard
//   }

//   return (
//     <AdminStyledContainer>
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Admin Log In
//       </Typography>
//       <AdminFormContainer>
//         <TextField
//           id="adminEmail"
//           label="Admin Email Address"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//           value={email}
//           onChange={handleEmailChange}
//           error={!emailValid}
//           helperText={!emailValid ? 'Invalid email address' : ''}
//         />
//         <TextField
//           id="adminPassword"
//           label="Password"
//           variant="outlined"
//           type="password"
//           margin="normal"
//           fullWidth
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <AdminTermsContainer>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={acceptedTerms}
//                 onChange={handleTermsChange}
//                 color="primary"
//               />
//             }
//             label={
//               <Typography variant="body2">
//                 I accept the terms and conditions.
//               </Typography>
//             }
//           />
//           <Link to="/admin-forgot-password" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2">Forgot password?</Typography>
//           </Link>
//         </AdminTermsContainer>
//         <AdminStyledButton variant="contained" onClick={handleLogin}>
//           Log In
//         </AdminStyledButton>
//       </AdminFormContainer>
//       <Typography variant="body2" align="center" marginTop={2}>
//         Need help?{' '}
//         <Link to="/admin-support" style={{ textDecoration: 'none' }} onClick={()=>navigate('/admin-support')}>
//           Contact Support
//         </Link>
//       </Typography>
//     </AdminStyledContainer>
//   );
// }

// export default AdminLoginPage;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import { Button, TextField, Typography, Container, Box, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const AdminStyledContainer = styled(Container)({
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '600px',
  height: '520px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const AdminStyledButton = styled(Button)({
  width: '100%',
  marginTop: '0.5rem',
  borderRadius: '5px',
  alignSelf: 'center',
  background: '#d32f2f', // Admin-specific color
  color: '#fff',
  border: 'none',
  '&:hover': {
    background: '#f44336',
  },
});

const AdminFormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const AdminTermsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

function AdminLoginPage() {
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

    // Here, you can implement your authentication logic (e.g., checking with an API)
    // Assuming successful login, navigate to the admin dashboard
    navigate('/admin-dashboard'); // Navigate to the admin dashboard
  }

  return (
    <AdminStyledContainer>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Log In
      </Typography>
      <AdminFormContainer>
        <TextField
          id="adminEmail"
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
          id="adminPassword"
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
        <AdminTermsContainer>
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
          <Link to="/admin-forgot-password" style={{ textDecoration: 'none' }}>
            <Typography variant="body2">Forgot password?</Typography>
          </Link>
        </AdminTermsContainer>
        <AdminStyledButton variant="contained" onClick={handleLogin}>
          Log In
        </AdminStyledButton>
      </AdminFormContainer>
      <Typography variant="body2" align="center" marginTop={2}>
        Need help?{' '}
        <Link to="/admin-support" style={{ textDecoration: 'none' }} onClick={() => navigate('/admin-support')}>
          Contact Support
        </Link>
      </Typography>
    </AdminStyledContainer>
  );
}

export default AdminLoginPage;

