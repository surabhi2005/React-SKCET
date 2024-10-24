import { Typography, Box, Button, AppBar, Toolbar, TextField, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import heroImage from '../assets/home.png';
import icon from '../assets/icon.jpg';
import brandImage from '../assets/brands.webp'; // Import the brand image
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Styled Components
const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: '#f5f5f5',
});

const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  padding: '0 2rem',
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

const SectionWrapper = styled(Box)({
  height: 'auto',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: '#fff',
});

const HeroImage = styled('img')({
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  borderRadius: '8px',
});

const StyledButton = styled(Button)({
  color: '#fff',
  margin: '0 10px',
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
  width: '300px',
  marginRight: '16px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px 20px',
  },
});

const Footer = styled(Box)({
  padding: '1rem',
  backgroundColor: '#7b1fa2',
  color: '#fff',
  textAlign: 'center',
});

// New Styled Component for Customer Feedback Section
const FeedbackSection = styled(SectionWrapper)({
  backgroundColor: '#f0f4c3',
  borderRadius: '8px',
  padding: '2rem',
});

// Styled component for individual feedback boxes
const FeedbackBox = styled(Paper)({
  padding: '1rem',
  margin: '1rem',
  width: '80%',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
});

const FeedbackText = styled(Typography)({
  fontStyle: 'italic',
  color: '#333',
});

const CustomerName = styled(Typography)({
  fontWeight: 'bold',
  marginTop: '0.5rem',
});

// Sample feedback data
const feedbackData = [
  { id: 1, text: "I had an amazing experience shopping here! The delivery was prompt.", name: "Jane D." },
  { id: 2, text: "Great quality products! I will definitely be back for more.", name: "Mark S." },
  { id: 3, text: "The selection is fantastic, and I love the discounts offered. Highly recommend!", name: "Emily R." },
  { id: 4, text: "Shopping was a breeze, and I appreciate the easy return policy.", name: "Tom L." },
];

// New Styled Component for Contact Section
const ContactSection = styled(SectionWrapper)({
  backgroundColor: '#e1bee7', // Light purple background
  borderRadius: '8px',
  padding: '2rem',
});

// Contact Section Content - similar to the image
const ContactGrid = styled(Grid)({
  width: '100%',
  padding: '1.5rem',
});

const ContactColumn = styled(Grid)({
  textAlign: 'left',
  padding: '0 1rem',
});

const ContactTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#000000',
});

const ContactLink = styled(Link)({
  display: 'block',
  color: '#000000',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  '&:hover': {
    textDecoration: 'underline',
  },
});

// Component starts here
function HomePage() {
  return (
    <PageWrapper>
      {/* Navbar */}
      <NavBar position="static">
        <Toolbar>
          <NavBarTitleWrapper>
            <img src={icon} alt="ShopPulse Icon" width={50} height={50} />
            <NavBarTitle>ShopPulse</NavBarTitle>
          </NavBarTitleWrapper>
          <Box display="flex" alignItems="center">
            <Link to="/catalog">
              <StyledButton>Men</StyledButton>
            </Link>
            <Link to="/women">
              <StyledButton>Women</StyledButton>
            </Link>
            <Link to="/kids">
              <StyledButton>Kids</StyledButton>
            </Link>
            <Link to="/beauty">
              <StyledButton>Beauty</StyledButton>
            </Link>
            <SearchBar variant="outlined" placeholder="Search" />
            <Link to="/login-selection">
              <StyledButton variant="outlined">Login</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton variant="outlined">Sign Up</StyledButton>
            </Link>
            <Link to="/cart">
              <StyledButton variant="outlined">
                <ShoppingCartIcon />
              </StyledButton>
            </Link>
            <Link to="/report">
              <StyledButton variant="outlined">
                <FavoriteIcon />
              </StyledButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>

      {/* Hero Section */}
      <SectionWrapper style={{ backgroundColor: '#e8eaf6' }}>
        <HeroImage src={heroImage} alt="ShopPulse Hero" />
      </SectionWrapper>

      {/* Featured Collections Section */}
      <SectionWrapper style={{ backgroundColor: '#f3e5f5', padding: '1.5rem' }}>
        <Typography variant="h3" gutterBottom>Featured Collections</Typography>
        <Grid container spacing={3} justifyContent="center">
          {['MEN', 'WOMEN', 'KIDS', 'BEAUTY'].map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper style={{ padding: '1rem', textAlign: 'center' }}>
                <Typography variant="h5">{category}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Explore our {category.toLowerCase()} styles.
                </Typography>
                <StyledButton variant="contained" color="secondary" style={{ marginTop: '10px' }}>
                  Shop Now
                </StyledButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Brands Section */}
      <SectionWrapper style={{ backgroundColor: '#f3e5f5', padding: '1.5rem' }}>
        <Typography variant="h3" gutterBottom>Our Brands</Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Paper style={{ padding: '1rem', textAlign: 'center' }}>
              <img 
                src={brandImage} 
                alt="Brand Logo" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '8px' 
                }} 
              />
            </Paper>
          </Grid>
          {/* You can add more brands similarly */}
        </Grid>
      </SectionWrapper>

      {/* Customer Feedback Section */}
      <FeedbackSection>
        <Typography variant="h4" gutterBottom>Customer Reviews</Typography>
        <Grid container spacing={3} justifyContent="center">
          {feedbackData.map(feedback => (
            <Grid item xs={12} sm={6} md={4} key={feedback.id}>
              <FeedbackBox>
                <FeedbackText>"{feedback.text}"</FeedbackText>
                <CustomerName>- {feedback.name}</CustomerName>
              </FeedbackBox>
            </Grid>
          ))}
        </Grid>
      </FeedbackSection>

      {/* Contact Section */}
      <ContactSection>
        <ContactGrid container>
          <ContactColumn item xs={12} sm={4}>
            <ContactTitle variant="h6">ShopPulse</ContactTitle>
            <ContactLink to="#">Who We Are</ContactLink>
            <ContactLink to="#">Join Our Team</ContactLink>
            <ContactLink to="#">Terms & Conditions</ContactLink>
            <ContactLink to="#">Privacy Policy</ContactLink>
          </ContactColumn>
          <ContactColumn item xs={12} sm={4}>
            <ContactTitle variant="h6">Help</ContactTitle>
            <ContactLink to="#">Track Your Order</ContactLink>
            <ContactLink to="#">Frequently Asked Questions</ContactLink>
            <ContactLink to="#">Return and Refunds</ContactLink>
            <ContactLink to="#">Contact Us</ContactLink>
          </ContactColumn>
          <ContactColumn item xs={12} sm={4}>
            <ContactTitle variant="h6">Follow Us</ContactTitle>
            <ContactLink to="#">Instagram</ContactLink>
            <ContactLink to="#">Facebook</ContactLink>
            <ContactLink to="#">Twitter</ContactLink>
            <ContactLink to="#">Pinterest</ContactLink>
          </ContactColumn>
        </ContactGrid>
      </ContactSection>

      {/* Footer */}
      <Footer>
        <Typography variant="body2">
          &copy; 2024 ShopPulse. All Rights Reserved.
        </Typography>
      </Footer>
    </PageWrapper>
  );
}

export default HomePage;

