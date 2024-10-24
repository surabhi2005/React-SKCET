import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import icon from '../assets/icon.jpg'; // Use your icon path

// Importing product images
import jacketImage from '../assets/jacket.jpg';
import casualSneakersImage from '../assets/casual-sneakers.jpg';
import classicalChinoesImage from '../assets/classical-chinos.jpg';
import slimFitJeansImage from '../assets/slim-fit-jeans.jpg';
import leatherBootsImage from '../assets/leather-boots.jpg';
import tshirtImage from '../assets/t-shirt.webp';

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
  textAlign: 'left',
}));

const ProductImage = styled(CardMedia)(() => ({
  height: '200px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
}));

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  padding: '0 2rem',
  width: '100%',
  position: 'fixed',
  top: 0,
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

// Image mapping function
const productImageMap = {
  jacket: jacketImage,
  sneakers: casualSneakersImage,
  chinoes: classicalChinoesImage,
  jeans: slimFitJeansImage,
  boots: leatherBootsImage,
  tshirt: tshirtImage,
};

const getProductImage = (productName) => {
  if (productName.toLowerCase().includes('jacket')) return productImageMap.jacket;
  if (productName.toLowerCase().includes('sneakers')) return productImageMap.sneakers;
  if (productName.toLowerCase().includes('chino')) return productImageMap.chinoes;
  if (productName.toLowerCase().includes('jeans')) return productImageMap.jeans;
  if (productName.toLowerCase().includes('boots')) return productImageMap.boots;
  if (productName.toLowerCase().includes('t-shirt')) return productImageMap.tshirt;
  return jacketImage; // Fallback image
};

// Main Catalog Component
const Catalog = ({ cartItems, setCartItems }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/men');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching product data. Please try again.');
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
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <NavBarTitle>ShopPulse</NavBarTitle>
          <Box ml="auto" display="flex">
            <Link to="/" style={{ textDecoration: 'none' }}><NavButton>Home</NavButton></Link>
            <Link to="/women" style={{ textDecoration: 'none', marginLeft: '10px' }}><NavButton>Women</NavButton></Link>
            <Link to="/kids" style={{ textDecoration: 'none', marginLeft: '10px' }}><NavButton>Kids</NavButton></Link>
            <Link to="/beauty" style={{ textDecoration: 'none', marginLeft: '10px' }}><NavButton>Beauty</NavButton></Link>
            <Link to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}><NavButton>Login</NavButton></Link>
            <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px' }}><NavButton>Signup</NavButton></Link>
            <Link to="/cart" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton><ShoppingCart style={{ marginRight: '5px' }} /></NavButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>

      <CatalogContainer container spacing={3}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
              <ProductCard>
                <ProductImage image={getProductImage(product.name)} title={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.description}</Typography>
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
                    <IconButton onClick={() => handleQuantityChange(product.id, -1)}><Remove /></IconButton>
                    <TextField
                      value={productQuantities[product.id] || 1}
                      inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                      variant="outlined"
                      size="small"
                      style={{ width: '50px', margin: '0 10px' }}
                    />
                    <IconButton onClick={() => handleQuantityChange(product.id, 1)}><Add /></IconButton>
                  </Box>
                </CardContent>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                  disabled={!selectedSizes[product.id]}
                >
                  Add to Cart
                </Button>
              </ProductCard>
            </Grid>
          ))
        )}
      </CatalogContainer>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} message="Item added to cart!" />
    </PageContainer>
  );
};

export default Catalog;