/*import React from 'react';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import icon from '../assets/icon.jpg'; // Import the icon

const womenProducts = [
    {
      id: 1,
      name: 'Floral Dress',
      price: 499.99,
      description: 'A beautiful floral dress perfect for summer outings.',
      image: 'https://example.com/floral-dress.jpg',
    },
    {
      id: 2,
      name: 'Stylish Blouse',
      price: 299.99,
      description: 'A stylish blouse for a sophisticated look.',
      image: 'https://example.com/blouse.jpg',
    },
    {
      id: 3,
      name: 'Denim Skirt',
      price: 399.99,
      description: 'A classic denim skirt that never goes out of style.',
      image: 'https://example.com/denim-skirt.jpg',
    },
    {
      id: 4,
      name: 'Leather Jacket',
      price: 899.99,
      description: 'A chic leather jacket to elevate any outfit.',
      image: 'https://example.com/leather-jacket.jpg',
    },
    {
      id: 5,
      name: 'High-Waisted Jeans',
      price: 549.99,
      description: 'Trendy high-waisted jeans for a modern fit.',
      image: 'https://example.com/high-waisted-jeans.jpg',
    },
    {
      id: 6,
      name: 'Comfortable Leggings',
      price: 349.99,
      description: 'Perfect for workouts or casual wear.',
      image: 'https://example.com/leggings.jpg',
    },
    
];

const WomenCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: '350px',
  borderRadius: '20px',
  padding: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)( {
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

// Styled components for the navbar
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

const WomenCatalog = ({ onSwitchToHome }) => {
  return (
    <div>
      <NavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
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
          Explore Our Women’s Fashion Collection
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Discover the latest trends in women's fashion.
        </Typography>
      </Box>
      
      <WomenCatalogContainer container spacing={4}>
        {womenProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <ProductImage image={product.image} title={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>
                <Button variant="contained" color="secondary" fullWidth>
                  Add to Cart
                </Button>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </WomenCatalogContainer>
    </div>
  );
};

export default WomenCatalog;
*/
/*
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
  Typography as MuiTypography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios'; // Import axios for API calls
import icon from '../assets/icon.jpg'; // Import the icon

const WomenCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: '350px',
  borderRadius: '20px',
  padding: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)({
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

// Styled components for the navbar
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

const WomenCatalog = ({ onSwitchToHome }) => {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/women'); // Ensure the endpoint matches your setup
        setWomenProducts(response.data.women);
      } catch (error) {
        console.error('Error fetching women products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
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
          Explore Our Women’s Fashion Collection
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Discover the latest trends in women's fashion.
        </Typography>
      </Box>

      <WomenCatalogContainer container spacing={4}>
        {womenProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <ProductImage image={product.image} title={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>
                <Button variant="contained" color="secondary" fullWidth>
                  Add to Cart
                </Button>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </WomenCatalogContainer>
    </div>
  );
};

export default WomenCatalog;
*/
/*import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios'; // Import axios for API calls
import icon from '../assets/icon.jpg'; // Import the icon

// Styled components
const WomenCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)', // Adjust height based on the navbar
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: '350px',
  borderRadius: '20px',
  padding: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)(() => ({
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
}));

// Styled components for the navbar
const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  padding: '0 2rem',
  height: '60px', // Increase the height of the navbar
}));

const NavBarTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.75rem', // Increase font size
  color: '#fff',
  marginLeft: '0.5rem',
}));

const WomenCatalog = ({ onSwitchToHome }) => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/women'); // Ensure the endpoint matches your setup
        setWomenProducts(response.data); // Directly set the data received
      } catch (error) {
        setError('Error fetching women products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = () => {
    // Implement your cart logic here
    setSnackbarOpen(true);
  };

  return (
    <div>
      <NavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
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
          Explore Our Women’s Fashion Collection
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Discover the latest trends in women's fashion.
        </Typography>
      </Box>

      <WomenCatalogContainer container spacing={4}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : womenProducts.length > 0 ? (
          womenProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard>
                <ProductImage image={product.image} title={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>
                  <Button variant="contained" color="secondary" fullWidth onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))
        ) : (
          <Box textAlign="center" width="100%">
            <Typography variant="h6">No products available.</Typography>
          </Box>
        )}
      </WomenCatalogContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Item added to cart!"
      />
    </div>
  );
};

export default WomenCatalog;
*/
/*
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
import { Add, Remove } from '@mui/icons-material'; // Icons for quantity buttons
import axios from 'axios';
import icon from '../assets/icon.jpg'; // Import the icon

// Styled components
const WomenCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)', // Adjust height based on the navbar
  overflowY: 'auto',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: 'auto',
  borderRadius: '20px',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const ProductImage = styled(CardMedia)(() => ({
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
}));

const NavBar = styled(AppBar)(() => ({
  backgroundColor: '#7b1fa2',
  padding: '0 2rem',
}));

const NavBarTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.75rem',
  color: '#fff',
  marginLeft: '0.5rem',
}));

const WomenCatalog = ({ onSwitchToHome }) => {
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = (productId) => {
    setSnackbarOpen(true);
  };

  return (
    <div>
      <NavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <NavBarTitle>ShopPulse</NavBarTitle>
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </NavBar>

      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">Explore Our Women’s Fashion Collection</Typography>
        <Typography variant="body1" color="textSecondary">
          Discover the latest trends in women's fashion.
        </Typography>
      </Box>

      <WomenCatalogContainer container spacing={4}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : womenProducts.length > 0 ? (
          womenProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard>
                <ProductImage image={product.image} title={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>

                  {product.sizes && product.sizes.length > 0 && (
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
                  )}

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
        )}
      </WomenCatalogContainer>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Item added to cart!"
      />
    </div>
  );
};

export default WomenCatalog;
*/
/*
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

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const WomenCatalog = () => {
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

  const handleAddToCart = (productId) => {
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
            <Link to="/men" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Men</NavButton>
            </Link>
            <Link to="/kids" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Kids</NavButton>
            </Link>
            <Link to="/beauty" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Beauty</NavButton>
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
*/
/*
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

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const WomenCatalog = () => {
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

  const handleAddToCart = (productId) => {
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
            <Link to="/men" style={{ textDecoration: 'none', marginLeft: '10px' }}>
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
// */
// import React, { useEffect, useState } from 'react';
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   AppBar,
//   Toolbar,
//   Snackbar,
//   CircularProgress,
//   FormControl,
//   Select,
//   MenuItem,
//   InputLabel,
//   IconButton,
//   TextField,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Add, Remove, ShoppingCart } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import icon from '../assets/icon.jpg';


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
// }));

// const ProductImage = styled(CardMedia)(() => ({
//   height: '200px',
//   backgroundSize: 'cover',
//   borderRadius: '8px 8px 0 0',
// }));

// const NavBar = styled(AppBar)(() => ({
//   backgroundColor: '#7b1fa2',
//   padding: '0 2rem',
//   position: 'fixed',
//   top: 0,
//   width: '100%',
//   zIndex: 1000,
// }));

// const NavBarTitle = styled(Typography)(() => ({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// }));

// const NavButton = styled(Button)(({ theme }) => ({
//   color: '#fff',
//   textTransform: 'uppercase',
//   fontWeight: 'bold',
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
// }));

// const WomenCatalog = ({ cartItems, setCartItems }) => {
//   const [womenProducts, setWomenProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [productQuantities, setProductQuantities] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/women');
//         setWomenProducts(response.data);
//       } catch (error) {
//         setError('Error fetching women products. Please try again.');
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
//             <Link to="/catalog" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Men</NavButton>
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
//           <Typography variant="h5">Explore Our Women’s Fashion Collection</Typography>
//           <Typography variant="body1" color="textSecondary">
//             Discover the latest trends in women's fashion.
//           </Typography>
//         </Box>

//         {loading ? (
//           <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//             <CircularProgress />
//           </Box>
//         ) : womenProducts.length > 0 ? (
//           womenProducts.map((product) => (
//             <Grid item xs={12} sm={4} md={4} lg={4} key={product.id}>
//               <ProductCard>
//                 <ProductImage image={product.image} title={product.name} />
//                 <CardContent>
//                   <Typography variant="h6">{product.name}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {product.description}
//                   </Typography>
//                   <Typography variant="h6">Rs.{product.price.toFixed(2)}</Typography>

//                   <FormControl fullWidth margin="normal">
//                     <InputLabel>Size</InputLabel>
//                     <Select
//                       value={selectedSizes[product.id] || ''}
//                       onChange={(e) => handleSizeChange(product.id, e.target.value)}
//                     >
//                       {product.sizes.map((size) => (
//                         <MenuItem key={size.name} value={size.name} disabled={size.quantity === 0}>
//                           {`${size.name} (${size.quantity} available)`}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>

//                   <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//                     <IconButton onClick={() => handleQuantityChange(product.id, -1)}>
//                       <Remove />
//                     </IconButton>
//                     <TextField
//                       value={productQuantities[product.id] || 1}
//                       inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
//                       variant="outlined"
//                       size="small"
//                       style={{ width: '50px', margin: '0 10px' }}
//                     />
//                     <IconButton onClick={() => handleQuantityChange(product.id, 1)}>
//                       <Add />
//                     </IconButton>
//                   </Box>
//                 </CardContent>

//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   fullWidth
//                   disabled={!selectedSizes[product.id]}
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </Button>
//               </ProductCard>
//             </Grid>
//           ))
//         ) : (
//           <Box textAlign="center" width="100%">
//             <Typography variant="h6">No products available.</Typography>
//           </Box>
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

// export default WomenCatalog;
// Import React and required libraries
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

