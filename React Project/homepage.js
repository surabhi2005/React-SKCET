import React, { useState } from 'react';
import { Typography, Box, Button, AppBar, Toolbar, Link, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginPage from './loginpage'; 
import SignUpPage from './signuppage'; 

import heroImage from '../assets/home.png';
import icon from '../assets/icon.jpg'; 

const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: '#f5f5f5',
  position: 'relative',
});

const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2', 
  boxShadow: 'none',
  padding: '0 2rem',
  transition: 'opacity 0.3s ease-in-out', 
});

const NavBarTitleWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
});

const NavBarTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff', 
  marginLeft: '0.5rem',
});

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '680px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const ContentContainer = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

const Overlay = styled('div')({
  height:'800px',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
});

const StyledButton = styled(Button)({
  color: '#fff',
  marginLeft: '1rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  borderColor: '#d1c4e9', 
  '&:hover': {
    backgroundColor: '#d1c4e9', 
    borderColor: '#6a1b9a', 
  },
});

const SearchBar = styled(TextField)({
  backgroundColor: '#e0e0e0',
  borderRadius: '50px', 
  marginRight: '1rem',
  width: '300px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px', 
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px 20px', 
  },
});

const IconImage = styled('img')({
  width: '50px', 
  height: '50px', 
});

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleOpenSignUp = () => {
    setShowSignUp(true);
  };

  const handleSwitchToHome = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <PageWrapper>
      {!showLogin && !showSignUp && (
        <NavBar position="static">
          <Toolbar>
            <NavBarTitleWrapper>
              <IconImage src={icon} alt="ShopPulse Icon" /> {/* Add the icon image */}
              <NavBarTitle>ShopPulse</NavBarTitle>
            </NavBarTitleWrapper>
            <SearchBar
              variant="outlined"
              placeholder="Search"
            />
            <Box>
              <StyledButton component={Link} href="#">
                Catalog
              </StyledButton>
              <StyledButton component={Link} href="#">
                Fashion
              </StyledButton>
              <StyledButton component={Link} href="#">
                Favorites
              </StyledButton>
              <StyledButton variant="outlined" onClick={handleOpenLogin}>
                Login
              </StyledButton>
              <StyledButton variant="outlined" onClick={handleOpenSignUp}>
                Sign Up
              </StyledButton>
            </Box>
          </Toolbar>
        </NavBar>
      )}
      <ContentContainer>
        <HeroImage src={heroImage} alt="ShopPulse Hero" />
        {showLogin && (
          <Overlay>
            <LoginPage 
              onSwitchToSignUp={() => {
                setShowLogin(false);
                setShowSignUp(true);
              }} 
              onSwitchToHome={handleSwitchToHome} 
            />
          </Overlay>
        )}
        {showSignUp && (
          <Overlay>
            <SignUpPage 
              onSwitchToLogin={() => {
                setShowSignUp(false);
                setShowLogin(true);
              }} 
              onSwitchToHome={handleSwitchToHome} 
            />
          </Overlay>
        )}
      </ContentContainer>
    </PageWrapper>
  );
}

export default HomePage;
