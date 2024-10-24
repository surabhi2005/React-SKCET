import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Snackbar,
  CircularProgress,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import icon from '../assets/icon.jpg';

// Import product images
import floralDressImage from '../assets/floral-dress.jpg';
import highWaistedJeansImage from '../assets/High-Waisted-Jeans.jpg';
import leatherJacketImage from '../assets/Leather-Jacket.jpg';
import stylishBlouseImage from '../assets/Stylish-Blouse.jpg';
import denimSkirtImage from '../assets/Denim-Skirt.jpg';
import leggingImage from '../assets/legging.jpg';

// Styled Components
const PageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}));

const CatalogContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  overflowY: 'auto',
  marginTop: '64px',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)(() => ({
  height: '200px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
}));

const NavBar = styled(AppBar)(() => ({
  backgroundColor: '#7b1fa2',
  padding: '0 2rem',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
}));

const NavBarTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
}));

const NavButton = styled(Button)(() => ({
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

// Image Mapping Logic
const productImageMap = {
  floral: floralDressImage,
  jeans: highWaistedJeansImage,
  jacket: leatherJacketImage,
  blouse: stylishBlouseImage,
  skirt: denimSkirtImage,
  legging: leggingImage,
};

const getProductImage = (productName) => {
  if (productName.toLowerCase().includes('floral')) return productImageMap.floral;
  if (productName.toLowerCase().includes('jeans')) return productImageMap.jeans;
  if (productName.toLowerCase().includes('jacket')) return productImageMap.jacket;
  if (productName.toLowerCase().includes('blouse')) return productImageMap.blouse;
  if (productName.toLowerCase().includes('skirt')) return productImageMap.skirt;
  if (productName.toLowerCase().includes('legging')) return productImageMap.legging;
  return floralDressImage; // Default fallback image
};

// Main WomenCatalog Component
const WomenCatalog = ({ cartItems, setCartItems }) => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/women');
        setWomenProducts(response.data);
      } catch (error) {
        setError('Error fetching women products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuantityChange = (productId, delta) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) + delta, 1),
    }));
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    const quantity = productQuantities[product.id] || 1;

    if (!size) {
      alert('Please select a size.');
      return;
    }

    const item = { ...product, size, quantity };
    setCartItems((prev) => [...prev, item]);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <PageContainer>
      <NavBar position="static">
        <Toolbar>
          <img
            src={icon}
            alt="ShopPulse Icon"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <NavBarTitle>ShopPulse</NavBarTitle>
          <Box ml="auto" display="flex">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <NavButton>Home</NavButton>
            </Link>
            <Link to="/catalog" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Men</NavButton>
            </Link>
            <Link to="/kids" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Kids</NavButton>
            </Link>
            <Link to="/beauty" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Beauty</NavButton>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Login</NavButton>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Signup</NavButton>
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>
                <ShoppingCart style={{ marginRight: '5px' }} />
              </NavButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>

      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">Explore Our Women’s Fashion Collection</Typography>
          <Typography variant="body1" color="textSecondary">
            Discover the latest trends in women's fashion.
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : womenProducts.length > 0 ? (
          womenProducts.map((product) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
              <ProductCard>
                <ProductImage image={getProductImage(product.name)} title={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>

                  <FormControl fullWidth margin="normal">
                    <InputLabel>Size</InputLabel>
                    <Select
                      value={selectedSizes[product.id] || ''}
                      onChange={(e) => handleSizeChange(product.id, e.target.value)}
                    >
                      {product.sizes.map((size) => (
                        <MenuItem key={size.name} value={size.name} disabled={size.quantity === 0}>
                          {`${size.name} (${size.quantity} available)`}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                    <IconButton onClick={() => handleQuantityChange(product.id, -1)}>
                      <Remove />
                    </IconButton>
                    <TextField
                      value={productQuantities[product.id] || 1}
                      inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                      variant="outlined"
                      size="small"
                      style={{ width: '50px', margin: '0 10px' }}
                    />
                    <IconButton onClick={() => handleQuantityChange(product.id, 1)}>
                      <Add />
                    </IconButton>
                  </Box>
                </CardContent>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={!selectedSizes[product.id]}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </ProductCard>
            </Grid>
          ))
        ) : (
          <Box textAlign="center" width="100%">
            <Typography variant="h6">No products available.</Typography>
          </Box>
        )}
      </CatalogContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Item added to cart!"
      />
    </PageContainer>
  );
};

export default WomenCatalog;

