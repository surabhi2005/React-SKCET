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

const kidsProducts = [
  {
    id: 1,
    name: 'Cute Teddy Bear',
    price: 199.99,
    description: 'A cuddly teddy bear for endless fun and comfort.',
    image: 'https://example.com/teddy-bear.jpg',
  },
  {
    id: 2,
    name: 'Colorful Building Blocks',
    price: 299.99,
    description: 'Build your dreams with these colorful blocks.',
    image: 'https://example.com/building-blocks.jpg',
  },
  {
    id: 3,
    name: 'Kids Skateboard',
    price: 499.99,
    description: 'A fun skateboard for outdoor adventures.',
    image: 'https://example.com/skateboard.jpg',
  },
  {
    id: 4,
    name: 'Fashionable Kids T-Shirt',
    price: 149.99,
    description: 'Trendy t-shirt for stylish kids.',
    image: 'https://example.com/kids-tshirt.jpg',
  },
  {
    id: 5,
    name: 'Adventurous Kids Shoes',
    price: 349.99,
    description: 'Comfortable shoes for active play.',
    image: 'https://example.com/kids-shoes.jpg',
  },
  {
    id: 6,
    name: 'Playful Puzzle',
    price: 249.99,
    description: 'Engaging puzzle to stimulate young minds.',
    image: 'https://example.com/puzzle.jpg',
  },
];

const KidsCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
}));

const KidsProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: '350px',
  borderRadius: '20px',
  padding: theme.spacing(2),
}));

const KidsProductImage = styled(CardMedia)({
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
});

// Styled components for the navbar
const KidsNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2', // Changed to match the main catalog color
  boxShadow: 'none',
  padding: '0 2rem',
}));

const KidsNavBarTitle = styled(MuiTypography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  marginLeft: '0.5rem',
});

const KidsCatalog = ({ onSwitchToHome }) => {
  return (
    <div>
      <KidsNavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <KidsNavBarTitle>ShopPulse</KidsNavBarTitle>
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </KidsNavBar>

      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">
          Discover Our Fun Kids Collection
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Shop the latest toys and apparel designed for your little ones.
        </Typography>
      </Box>

      <KidsCatalogContainer container spacing={4}>
        {kidsProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <KidsProductCard>
              <KidsProductImage image={product.image} title={product.name} />
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
            </KidsProductCard>
          </Grid>
        ))}
      </KidsCatalogContainer>
    </div>
  );
};

export default KidsCatalog;
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios'; // Import axios for API calls
import icon from '../assets/icon.jpg'; // Import the icon

// Styled components
const KidsCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
}));

const KidsProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: '350px',
  borderRadius: '20px',
  padding: theme.spacing(2),
}));

const KidsProductImage = styled(CardMedia)(() => ({
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
}));

// Styled components for the navbar
const KidsNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#7b1fa2', // Navbar color
  boxShadow: 'none',
  padding: '0 2rem',
  height: '60px', // Increased height for the navbar
}));

const KidsNavBarTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.75rem', // Increased font size
  color: '#fff',
  marginLeft: '0.5rem',
}));

const KidsCatalog = ({ onSwitchToHome }) => {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/kids'); // Adjust the endpoint
        setKidsProducts(response.data); // Set the received data
      } catch (error) {
        setError('Error fetching kids products. Please try again.');
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
      <KidsNavBar position="static">
        <Toolbar>
          <img src={icon} alt="ShopPulse Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <KidsNavBarTitle>ShopPulse</KidsNavBarTitle>
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </KidsNavBar>

      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">
          Discover Our Fun Kids Collection
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Shop the latest toys and apparel designed for your little ones.
        </Typography>
      </Box>

      <KidsCatalogContainer container spacing={4}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : kidsProducts.length > 0 ? (
          kidsProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <KidsProductCard>
                <KidsProductImage image={product.image} title={product.name} />
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
              </KidsProductCard>
            </Grid>
          ))
        ) : (
          <Box textAlign="center" width="100%">
            <Typography variant="h6">No products available.</Typography>
          </Box>
        )}
      </KidsCatalogContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Item added to cart!"
      />
    </div>
  );
};

export default KidsCatalog;
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
import { Add, Remove } from '@mui/icons-material';
import axios from 'axios';
import icon from '../assets/icon.jpg';

// Styled components
const KidsCatalogContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
}));

const KidsProductCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  position: 'relative',
  height: 'auto',
  borderRadius: '20px',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const KidsProductImage = styled(CardMedia)(() => ({
  height: '180px',
  backgroundSize: 'cover',
  borderRadius: '8px 8px 0 0',
}));

const KidsNavBar = styled(AppBar)(() => ({
  backgroundColor: '#7b1fa2',
  padding: '0 2rem',
}));

const KidsNavBarTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.75rem',
  color: '#fff',
  marginLeft: '0.5rem',
}));

const KidsCatalog = ({ onSwitchToHome }) => {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/kids');
        setKidsProducts(response.data);
      } catch (error) {
        setError('Error fetching kids products. Please try again.');
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
      <KidsNavBar position="static">
        <Toolbar>
          <img
            src={icon}
            alt="ShopPulse Icon"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <KidsNavBarTitle>ShopPulse</KidsNavBarTitle>
          <Box ml="auto">
            <Button variant="outlined" color="inherit" onClick={onSwitchToHome}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </KidsNavBar>

      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h5">Discover Our Fun Kids Collection</Typography>
        <Typography variant="body1" color="textSecondary">
          Shop the latest toys and apparel designed for your little ones.
        </Typography>
      </Box>

      <KidsCatalogContainer container spacing={4}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : kidsProducts.length > 0 ? (
          kidsProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <KidsProductCard>
                <KidsProductImage image={product.image} title={product.name} />
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
              </KidsProductCard>
            </Grid>
          ))
        ) : (
          <Box textAlign="center" width="100%">
            <Typography variant="h6">No products available.</Typography>
          </Box>
        )}
      </KidsCatalogContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Item added to cart!"
      />
    </div>
  );
};

export default KidsCatalog;
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

const KidsCatalog = () => {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/kids');
        setKidsProducts(response.data);
      } catch (error) {
        setError('Error fetching kids products. Please try again.');
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
            <Link to="/catalog" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Men</NavButton>
            </Link>
            <Link to="/women" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Women</NavButton>
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
          <Typography variant="h5">Explore Our Kids Collection</Typography>
          <Typography variant="body1" color="textSecondary">
            Fun and trendy items for kids of all ages.
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : kidsProducts.length > 0 ? (
          kidsProducts.map((product) => (
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

export default KidsCatalog;
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

// const KidsCatalog = ({ cartItems, setCartItems }) => { // Added props for cart items and setCartItems
//   const [kidsProducts, setKidsProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [productQuantities, setProductQuantities] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/kids');
//         setKidsProducts(response.data);
//       } catch (error) {
//         setError('Error fetching kids products. Please try again.');
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
//             <Link to="/women" style={{ textDecoration: 'none', marginLeft: '10px' }}>
//               <NavButton>Women</NavButton>
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
//           <Typography variant="h5">Explore Our Kids Collection</Typography>
//           <Typography variant="body1" color="textSecondary">
//             Fun and trendy items for kids of all ages.
//           </Typography>
//         </Box>

//         {loading ? (
//           <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//             <CircularProgress />
//           </Box>
//         ) : kidsProducts.length > 0 ? (
//           kidsProducts.map((product) => (
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
//                   onClick={() => handleAddToCart(product)}
//                   disabled={!selectedSizes[product.id]}
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

// export default KidsCatalog;




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
import kidsShoesImage from '../assets/Kids-Shoes.jpg';
import kidsTShirtImage from '../assets/Kids-T-Shirt.jpg';
import teddyBearImage from '../assets/Teddy-Bear.jpg';
import skateboardImage from '../assets/Skateboard.jpg';
import buildingBlocksImage from '../assets/Building-Blocks.jpg';
import puzzleImage from '../assets/Puzzle.jpg';

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
  shoes: kidsShoesImage,
  tShirt: kidsTShirtImage,
  bear: teddyBearImage,
  skateboard: skateboardImage,
  blocks: buildingBlocksImage,
  puzzle: puzzleImage,
};

const getProductImage = (productName) => {
  const name = productName.toLowerCase();
  if (name.includes('shoes')) return productImageMap.shoes;
  if (name.includes('t-shirt')) return productImageMap.tShirt;
  if (name.includes('bear')) return productImageMap.bear;
  if (name.includes('skateboard')) return productImageMap.skateboard;
  if (name.includes('blocks')) return productImageMap.blocks;
  if (name.includes('puzzle')) return productImageMap.puzzle;
  return teddyBearImage; // Default fallback image
};

// Main KidsCatalog Component
const KidsCatalog = ({ cartItems, setCartItems }) => {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/kids');
        setKidsProducts(response.data);
      } catch (error) {
        setError('Error fetching kids products. Please try again.');
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
            <Link to="/women" style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <NavButton>Women</NavButton>
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
          <Typography variant="h5">Explore Our Kids Collection</Typography>
          <Typography variant="body1" color="textSecondary">
            Fun and trendy items for kids of all ages.
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : kidsProducts.length > 0 ? (
          kidsProducts.map((product) => (
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
                  onClick={() => handleAddToCart(product)}
                  disabled={!selectedSizes[product.id]}
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

export default KidsCatalog;

