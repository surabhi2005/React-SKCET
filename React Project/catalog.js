
/*
import React from 'react';
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
  Typography as MuiTypography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import icon from '../assets/icon.jpg'; // Import the icon

// Extended Product Data
const products = [
  { id: 1, name: 'Stylish Jacket', price: 799.99, description: 'A stylish jacket perfect for the winter season.', image: 'https://example.com/jacket.jpg', sizes: [{ name: 'S', quantity: 5 }, { name: 'M', quantity: 3 }, { name: 'L', quantity: 0 }] },
  { id: 2, name: 'Classic T-Shirt', price: 249.99, description: 'A comfortable and versatile t-shirt for everyday wear.', image: 'https://example.com/tshirt.jpg', sizes: [{ name: 'S', quantity: 10 }, { name: 'M', quantity: 2 }, { name: 'L', quantity: 1 }] },
  { id: 3, name: 'Casual Sneakers', price: 599.99, description: 'Comfortable sneakers for everyday wear.', image: 'https://example.com/sneakers.jpg', sizes: [{ name: '8', quantity: 4 }, { name: '9', quantity: 2 }, { name: '10', quantity: 0 }] },
  { id: 4, name: 'Tailored Chinos', price: 499.99, description: 'Stylish chinos that can be dressed up or down.', image: 'https://example.com/chinos.jpg', sizes: [{ name: 'S', quantity: 7 }, { name: 'M', quantity: 5 }, { name: 'L', quantity: 2 }] },
  { id: 5, name: 'Leather Boots', price: 899.99, description: 'Durable leather boots for a rugged look.', image: 'https://example.com/boots.jpg', sizes: [{ name: '7', quantity: 3 }, { name: '8', quantity: 1 }, { name: '9', quantity: 0 }] },
  { id: 6, name: 'Classic Watch', price: 999.99, description: 'A timeless classic watch to elevate your style.', image: 'https://example.com/watch.jpg', sizes: [{ name: 'One Size', quantity: 10 }] },
];

// Styled Components
const FullPageContainer = styled(Box)({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

const CatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  height: 'calc(100vh - 64px)', // Full height minus navbar
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

const ProductImage = styled(CardMedia)({
  height: '200px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  padding: '0 2rem',
}));

const NavBarTitle = styled(MuiTypography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
});

// Main Catalog Component
const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = React.useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <FullPageContainer>
      <NavBar position="static">
        <Toolbar>
          <img
            src={icon}
            alt="ShopPulse Icon"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <NavBarTitle>ShopPulse</NavBarTitle>
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>
      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">Discover Our Exclusive Fashion Collection</Typography>
        <Typography variant="body1" color="textSecondary">
          Shop the latest trends and styles curated just for you.
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <CatalogContainer container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard>
                <ProductImage image={product.image} title={product.name} />
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
                        <MenuItem
                          key={size.name}
                          value={size.name}
                          disabled={size.quantity === 0}
                        >
                          {`${size.name} (${size.quantity} available)`}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CardContent>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={!selectedSizes[product.id]}
                >
                  Add to Cart
                </Button>
              </ProductCard>
            </Grid>
          ))}
        </CatalogContainer>
      </Container>
    </FullPageContainer>
  );
};

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box, 
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel, Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import icon from '../assets/icon.jpg';
//import productData from '../data/products.json'; // Import the JSON file

// Styled Components (same as before)
const CatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: '450px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)({
  height: '200px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  width: '100%',
  padding: '0 2rem',
}));

const NavBarTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
});

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [products, setProducts] = useState([]);

  // Load JSON data into state
  useEffect(() => {
    setProducts(productData); // Use imported JSON data
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <div>
      <NavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <NavBarTitle>ShopPulse</NavBarTitle>
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>Home</Button>
          </Box>
        </Toolbar>
      </NavBar>

      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">Discover Our Exclusive Fashion Collection</Typography>
        <Typography variant="body1" color="textSecondary">
          Shop the latest trends and styles curated just for you.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <CatalogContainer container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard>
                <ProductImage image={product.image} title={product.name} />
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
                </CardContent>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={!selectedSizes[product.id]}
                >
                  Add to Cart
                </Button>
              </ProductCard>
            </Grid>
          ))}
        </CatalogContainer>
      </Container>
    </div>
  );
};

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel, Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import icon from '../assets/icon.jpg';
import axios from 'axios'; // Import axios for API calls

// Styled Components
const PageContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const CatalogContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1, // Ensures the grid expands to fill available space
  padding: theme.spacing(2),
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%', // Ensure cards fill the grid area
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)({
  height: '200px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  padding: '0 2rem',
  width:'100%',
}));

const NavBarTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
});

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [products, setProducts] = useState([]);

  // Fetch product data from JSON Server
  useEffect(() => {
    axios
      .get('http://localhost:3000/men')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
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
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>

      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">
          Discover Our Exclusive Fashion Collection
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Shop the latest trends and styles curated just for you.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex' }}>
        <CatalogContainer container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard>
                <ProductImage image={product.image} title={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6">
                    Rs.{product.price.toFixed(2)}
                  </Typography>

                  <FormControl fullWidth margin="normal">
                    <InputLabel>Size</InputLabel>
                    <Select
                      value={selectedSizes[product.id] || ''}
                      onChange={(e) => handleSizeChange(product.id, e.target.value)}
                    >
                      {product.sizes.map((size) => (
                        <MenuItem
                          key={size.name}
                          value={size.name}
                          disabled={size.quantity === 0}
                        >
                          {`${size.name} (${size.quantity} available)`}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CardContent>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={!selectedSizes[product.id]}
                >
                  Add to Cart
                </Button>
              </ProductCard>
            </Grid>
          ))}
        </CatalogContainer>
      </Container>
    </PageContainer>
  );
};

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel, Container,
  CircularProgress, Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import icon from '../assets/icon.jpg';
import axios from 'axios'; // Import axios for API calls

// Styled Components
const PageContainer = styled(Box)({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const FullScreenContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const CatalogContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  overflowY: 'auto',
  marginTop: '64px', // Push content below the fixed navbar
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%', // Ensure cards fill the grid area
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  textAlign: 'center', // Center text within cards
}));

const ProductImage = styled(CardMedia)({
  height: '200px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  padding: '0 2rem',
  width: '100%',
  position:'relative',
  top: 0,
}));

const NavBarTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
});

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data from JSON Server
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    // Here, you can implement your cart logic, e.g., adding the item to the cart
    setSnackbarOpen(true);
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
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>
      <FullScreenContainer>
        <Box textAlign="center" mt={4} mb={2}>
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex' }}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularProgress />
            </Box>
          ) : (
            <CatalogContainer container spacing={3}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                  <ProductCard>
                    <ProductImage image={product.image} title={product.name} />
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">
                        Rs.{product.price.toFixed(2)}
                      </Typography>

                      <FormControl fullWidth margin="normal">
                        <InputLabel>Size</InputLabel>
                        <Select
                          value={selectedSizes[product.id] || ''}
                          onChange={(e) => handleSizeChange(product.id, e.target.value)}
                        >
                          {product.sizes.map((size) => (
                            <MenuItem
                              key={size.name}
                              value={size.name}
                              disabled={size.quantity === 0}
                            >
                              {`${size.name} (${size.quantity} available)`}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </CardContent>

                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      disabled={!selectedSizes[product.id]}
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </ProductCard>
                </Grid>
              ))}
            </CatalogContainer>
          )}
        </Container>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Item added to cart!"
        />
      </FullScreenContainer>
    </PageContainer>
  );
};

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel, Container,
  CircularProgress, Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import icon from '../assets/icon.jpg';
import axios from 'axios'; // Import axios for API calls

// Styled Components
const PageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh', // Full height of the viewport
}));

const CatalogContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  overflowY: 'auto',
  marginTop: '64px', // Push content below the fixed navbar
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%', // Ensure cards fill the grid area
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  textAlign: 'center', // Center text within cards
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
  position: 'fixed', // Fixed position for the navbar
  top: 0,
  zIndex: 1000, // Ensure the navbar is above other content
}));

const NavBarTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
}));

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data from JSON Server
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    // Here, you can implement your cart logic, e.g., adding the item to the cart
    setSnackbarOpen(true);
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
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6">
                      Rs.{product.price.toFixed(2)}
                    </Typography>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
                            {`${size.name} (${size.quantity} available)`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </CardContent>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={!selectedSizes[product.id]}
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel, Container,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import icon from '../assets/icon.jpg';
import axios from 'axios';

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
  textAlign: 'center',
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

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6">
                      Rs.{product.price.toFixed(2)}
                    </Typography>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
                            {`${size.name} (${size.quantity} available)`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        value={productQuantities[product.id] || 1}
                        inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                        variant="outlined"
                        size="small"
                        style={{ width: '50px', margin: '0 10px' }}
                      />
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </CardContent>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={!selectedSizes[product.id]}
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel, Container,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import icon from '../assets/icon.jpg';
import axios from 'axios';

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
  textAlign: 'center',
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

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}> 
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6">
                      Rs.{product.price.toFixed(2)}
                    </Typography>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
                            {`${size.name} (${size.quantity} available)`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        value={productQuantities[product.id] || 1}
                        inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                        variant="outlined"
                        size="small"
                        style={{ width: '50px', margin: '0 10px' }}
                      />
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </CardContent>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={!selectedSizes[product.id]}
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import icon from '../assets/icon.jpg';
import axios from 'axios';

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
  textAlign: 'left', // Align text to the left
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

const Catalog = ({ onSwitchToHome }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}> 
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">
                        Rs.{product.price.toFixed(2)}
                      </Typography>
                    </Box>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
                            {`${size.name} (${size.quantity} available)`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        value={productQuantities[product.id] || 1}
                        inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                        variant="outlined"
                        size="small"
                        style={{ width: '50px', margin: '0 10px' }}
                      />
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </CardContent>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={!selectedSizes[product.id]}
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import icon from '../assets/icon.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

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
  textAlign: 'left', // Align text to the left
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

const Catalog = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
          <Box ml="auto">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="inherit">
                Home
              </Button>
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="inherit" style={{ marginLeft: '10px' }}>
                Cart
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}> 
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">
                        Rs.{product.price.toFixed(2)}
                      </Typography>
                    </Box>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
                            {`${size.name} (${size.quantity} available)`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        value={productQuantities[product.id] || 1}
                        inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                        variant="outlined"
                        size="small"
                        style={{ width: '50px', margin: '0 10px' }}
                      />
                      <IconButton
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </CardContent>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={!selectedSizes[product.id]}
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import icon from '../assets/icon.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

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
  textAlign: 'left', // Align text to the left
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

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff', // Set button text color to white
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional: add a hover effect
  },
}));

const Catalog = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
              <NavButton variant="outlined">Home</NavButton>
            </Link>
            <Link to="/men" style={{ textDecoration: 'none' }}>
              <NavButton variant="outlined" style={{ marginLeft: '10px' }}>Men</NavButton>
            </Link>
            <Link to="/women" style={{ textDecoration: 'none' }}>
              <NavButton variant="outlined" style={{ marginLeft: '10px' }}>Women</NavButton>
            </Link>
            <Link to="/kids" style={{ textDecoration: 'none' }}>
              <NavButton variant="outlined" style={{ marginLeft: '10px' }}>Kids</NavButton>
            </Link>
            <Link to="/beauty" style={{ textDecoration: 'none' }}>
              <NavButton variant="outlined" style={{ marginLeft: '10px' }}>Beauty</NavButton>
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <NavButton variant="outlined" style={{ marginLeft: '10px' }}>Cart</NavButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">
                        Rs.{product.price.toFixed(2)}
                      </Typography>
                    </Box>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
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
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import icon from '../assets/icon.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

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
  textAlign: 'left', // Align text to the left
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

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff', // Set button text color to white
  textTransform: 'none', // Keep the button text as is
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional: add a hover effect
  },
}));

const Catalog = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
              <NavButton variant="text">Home</NavButton>
            </Link>
            <Link to="/men" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Men</NavButton>
            </Link>
            <Link to="/women" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Women</NavButton>
            </Link>
            <Link to="/kids" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Kids</NavButton>
            </Link>
            <Link to="/beauty" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Beauty</NavButton>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Login</NavButton>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Signup</NavButton>
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Cart</NavButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">
                        Rs.{product.price.toFixed(2)}
                      </Typography>
                    </Box>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
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
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button, Box,
  AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, Snackbar, IconButton, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove, ShoppingCart } from '@mui/icons-material'; // Importing ShoppingCart icon
import icon from '../assets/icon.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

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
  textAlign: 'left', // Align text to the left
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

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff', // Set button text color to white
  textTransform: 'uppercase', // Make button text uppercase
  fontWeight: 'bold', // Make button text bold
  variant: 'text', // No border
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional: add a hover effect
  },
}));

const Catalog = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch product data
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
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
              <NavButton variant="text">Home</NavButton>
            </Link>
            <Link to="/women" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Women</NavButton>
            </Link>
            <Link to="/kids" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Kids</NavButton>
            </Link>
            <Link to="/beauty" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Beauty</NavButton>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Login</NavButton>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>Signup</NavButton>
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <NavButton variant="text" style={{ marginLeft: '10px' }}>
                <ShoppingCart style={{ marginRight: '5px' }} />
              </NavButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <CatalogContainer container spacing={3}>
        <Box textAlign="center" mt={8} mb={2} width="100%">
          <Typography variant="h5">
            Discover Our Exclusive Fashion Collection
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Shop the latest trends and styles curated just for you.
          </Typography>
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
                <ProductCard>
                  <ProductImage image={product.image} title={product.name} />
                  <CardContent>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">
                        Rs.{product.price.toFixed(2)}
                      </Typography>
                    </Box>

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={selectedSizes[product.id] || ''}
                        onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      >
                        {product.sizes.map((size) => (
                          <MenuItem
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
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
                    onClick={() => handleAddToCart(product.id)}
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
          )
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

export default Catalog;
//  */
// import React, { useEffect, useState } from 'react';
// import {
//   Grid, Card, CardMedia, CardContent, Typography, Button, Box,
//   AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
//   CircularProgress, Snackbar, IconButton, TextField
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Add, Remove, ShoppingCart } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import icon from '../assets/icon.jpg'; // Use your icon path

// // Styled Components
// const PageContainer = styled(Box)(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   height: '100vh',
// }));

// const CatalogContainer = styled(Grid)(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(2),
//   overflowY: 'auto',
//   marginTop: '64px',
// }));

// const ProductCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   borderRadius: '20px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   padding: theme.spacing(2),
//   textAlign: 'left',
// }));

// const ProductImage = styled(CardMedia)(() => ({
//   height: '200px',
//   backgroundSize: 'cover',
//   borderRadius: '8px 8px 0 0',
// }));

// const NavBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: '#7b1fa2',
//   boxShadow: 'none',
//   padding: '0 2rem',
//   width: '100%',
//   position: 'fixed',
//   top: 0,
//   zIndex: 1000,
// }));

// const NavBarTitle = styled(Typography)(() => ({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// }));

// const NavButton = styled(Button)(() => ({
//   color: '#fff',
//   textTransform: 'uppercase',
//   fontWeight: 'bold',
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
// }));

// const Catalog = ({ cartItems, setCartItems }) => {
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [productQuantities, setProductQuantities] = useState({});
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   // Fetch product data
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/men');
//         setProducts(response.data);
//       } catch (error) {
//         setError('Error fetching product data. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSizeChange = (productId, size) => {
//     setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
//   };

//   const handleQuantityChange = (productId, delta) => {
//     setProductQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max((prev[productId] || 1) + delta, 1),
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const size = selectedSizes[product.id];
//     const quantity = productQuantities[product.id] || 1;

//     if (!size) {
//       alert('Please select a size.');
//       return;
//     }

//     const item = { ...product, size, quantity };
//     setCartItems((prev) => [...prev, item]);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <PageContainer>
//       <NavBar position="static">
//         <Toolbar>
//           <img
//             src={icon}
//             alt="ShopPulse Icon"
//             style={{ width: '50px', height: '50px', marginRight: '10px' }}
//           />
//           <NavBarTitle>ShopPulse</NavBarTitle>
//           <Box ml="auto" display="flex">
//             <Link to="/" style={{ textDecoration: 'none' }}>
//               <NavButton>Home</NavButton>
//             </Link>
//             <Link to="/women" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Women</NavButton>
//             </Link>
//             <Link to="/kids" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Kids</NavButton>
//             </Link>
//             <Link to="/beauty" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Beauty</NavButton>
//             </Link>
//             <Link to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Login</NavButton>
//             </Link>
//             <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Signup</NavButton>
//             </Link>
//             <Link to="/cart" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>
//                 <ShoppingCart style={{ marginRight: '5px' }} />
//               </NavButton>
//             </Link>
//           </Box>
//         </Toolbar>
//       </NavBar>
//       <CatalogContainer container spacing={3}>
//         <Box textAlign="center" mt={8} mb={2} width="100%">
//           <Typography variant="h5">
//             Discover Our Exclusive Fashion Collection
//           </Typography>
//           <Typography variant="body1" color="textSecondary">
//             Shop the latest trends and styles curated just for you.
//           </Typography>
//         </Box>
//         {loading ? (
//           <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//             <CircularProgress />
//           </Box>
//         ) : (
//           products.length > 0 ? (
//             products.map((product) => (
//               <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
//                 <ProductCard>
//                   <ProductImage image={product.image} title={product.name} />
//                   <CardContent>
//                     <Typography variant="h6">{product.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {product.description}
//                     </Typography>
//                     <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>

//                     <FormControl fullWidth margin="normal">
//                       <InputLabel>Size</InputLabel>
//                       <Select
//                         value={selectedSizes[product.id] || ''}
//                         onChange={(e) => handleSizeChange(product.id, e.target.value)}
//                       >
//                         {product.sizes.map((size) => (
//                           <MenuItem key={size.name} value={size.name} disabled={size.quantity === 0}>
//                             {`${size.name} (${size.quantity} available)`}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>

//                     <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//                       <IconButton onClick={() => handleQuantityChange(product.id, -1)}>
//                         <Remove />
//                       </IconButton>
//                       <TextField
//                         value={productQuantities[product.id] || 1}
//                         inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
//                         variant="outlined"
//                         size="small"
//                         style={{ width: '50px', margin: '0 10px' }}
//                       />
//                       <IconButton onClick={() => handleQuantityChange(product.id, 1)}>
//                         <Add />
//                       </IconButton>
//                     </Box>
//                   </CardContent>

//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     fullWidth
//                     onClick={() => handleAddToCart(product)}
//                     disabled={!selectedSizes[product.id]}
//                   >
//                     Add to Cart
//                   </Button>
//                 </ProductCard>
//               </Grid>
//             ))
//           ) : (
//             <Box textAlign="center" width="100%">
//               <Typography variant="h6">No products available.</Typography>
//             </Box>
//           )
//         )}
//       </CatalogContainer>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         message="Item added to cart!"
//       />
//     </PageContainer>
//   );
// };

// // export default Catalog;
// import React, { useEffect, useState } from 'react';
// import {
//   Grid, Card, CardMedia, CardContent, Typography, Button, Box,
//   AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel,
//   CircularProgress, Snackbar, IconButton, TextField
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Add, Remove, ShoppingCart } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import icon from '../assets/icon.jpg'; // Use your icon path
// import jacketImage from '../assets/jacket.jpg'; // Import jacket image

// // Styled Components
// const PageContainer = styled(Box)(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   height: '100vh',
// }));

// const CatalogContainer = styled(Grid)(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(2),
//   overflowY: 'auto',
//   marginTop: '64px',
// }));

// const ProductCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   borderRadius: '20px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   padding: theme.spacing(2),
//   textAlign: 'left',
// }));

// const ProductImage = styled(CardMedia)(() => ({
//   height: '200px',
//   backgroundSize: 'cover',
//   borderRadius: '8px 8px 0 0',
// }));

// const NavBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: '#7b1fa2',
//   boxShadow: 'none',
//   padding: '0 2rem',
//   width: '100%',
//   position: 'fixed',
//   top: 0,
//   zIndex: 1000,
// }));

// const NavBarTitle = styled(Typography)(() => ({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// }));

// const NavButton = styled(Button)(() => ({
//   color: '#fff',
//   textTransform: 'uppercase',
//   fontWeight: 'bold',
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
// }));

// const Catalog = ({ cartItems, setCartItems }) => {
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [productQuantities, setProductQuantities] = useState({});
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/men');
//         setProducts(response.data);
//       } catch (error) {
//         setError('Error fetching product data. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleSizeChange = (productId, size) => {
//     setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
//   };

//   const handleQuantityChange = (productId, delta) => {
//     setProductQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max((prev[productId] || 1) + delta, 1),
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const size = selectedSizes[product.id];
//     const quantity = productQuantities[product.id] || 1;

//     if (!size) {
//       alert('Please select a size.');
//       return;
//     }

//     const item = { ...product, size, quantity };
//     setCartItems((prev) => [...prev, item]);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <PageContainer>
//       <NavBar position="static">
//         <Toolbar>
//           <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
//           <NavBarTitle>ShopPulse</NavBarTitle>
//           <Box ml="auto" display="flex">
//             <Link to="/" style={{ textDecoration: 'none' }}>
//               <NavButton>Home</NavButton>
//             </Link>
//             <Link to="/women" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Women</NavButton>
//             </Link>
//             <Link to="/kids" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Kids</NavButton>
//             </Link>
//             <Link to="/beauty" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Beauty</NavButton>
//             </Link>
//             <Link to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Login</NavButton>
//             </Link>
//             <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Signup</NavButton>
//             </Link>
//             <Link to="/cart" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>
//                 <ShoppingCart style={{ marginRight: '5px' }} />
//               </NavButton>
//             </Link>
//           </Box>
//         </Toolbar>
//       </NavBar>

//       <CatalogContainer container spacing={3}>
//         <Box textAlign="center" mt={8} mb={2} width="100%">
//           <Typography variant="h5">Discover Our Exclusive Fashion Collection</Typography>
//           <Typography variant="body1" color="textSecondary">
//             Shop the latest trends and styles curated just for you.
//           </Typography>
//         </Box>
//         {loading ? (
//           <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//             <CircularProgress />
//           </Box>
//         ) : (
//           products.length > 0 ? (
//             products.map((product) => (
//               <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
//                 <ProductCard>
//                   <ProductImage image={jacketImage} title={product.name} />
//                   <CardContent>
//                     <Typography variant="h6">{product.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">{product.description}</Typography>
//                     <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>

//                     <FormControl fullWidth margin="normal">
//                       <InputLabel>Size</InputLabel>
//                       <Select
//                         value={selectedSizes[product.id] || ''}
//                         onChange={(e) => handleSizeChange(product.id, e.target.value)}
//                       >
//                         {product.sizes.map((size) => (
//                           <MenuItem key={size.name} value={size.name} disabled={size.quantity === 0}>
//                             {`${size.name} (${size.quantity} available)`}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>

//                     <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//                       <IconButton onClick={() => handleQuantityChange(product.id, -1)}><Remove /></IconButton>
//                       <TextField
//                         value={productQuantities[product.id] || 1}
//                         inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
//                         variant="outlined"
//                         size="small"
//                         style={{ width: '50px', margin: '0 10px' }}
//                       />
//                       <IconButton onClick={() => handleQuantityChange(product.id, 1)}><Add /></IconButton>
//                     </Box>
//                   </CardContent>

//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     fullWidth
//                     onClick={() => handleAddToCart(product)}
//                     disabled={!selectedSizes[product.id]}
//                   >
//                     Add to Cart
//                   </Button>
//                 </ProductCard>
//               </Grid>
//             ))
//           ) : (
//             <Box textAlign="center" width="100%"><Typography variant="h6">No products available.</Typography></Box>
//           )
//         )}
//       </CatalogContainer>

//       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} message="Item added to cart!" />
//     </PageContainer>
//   );
// };

// export default Catalog;

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