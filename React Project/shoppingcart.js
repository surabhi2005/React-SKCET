// ShoppingCart.js
/*
import React, { useState, useEffect } from 'react';
import {
  Box, Typography, IconButton, Button, Divider, Grid, Card, CardContent, 
  CardMedia, Snackbar
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CartContainer = styled(Box)({
  padding: '2rem',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: '15px',
}));

const ProductImage = styled(CardMedia)(() => ({
  width: '120px',
  height: '120px',
  borderRadius: '10px',
}));

const SummaryBox = styled(Box)({
  marginTop: '1rem',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '15px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleQuantityChange = (productId, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <CartContainer>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <ProductCard key={item.id}>
                <ProductImage image={item.image} alt={item.name} />
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="textSecondary">
                    Price: Rs. {item.price.toFixed(2)}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={1}>
                    <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                      <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{ margin: '0 10px' }}>
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                      <Add />
                    </IconButton>
                  </Box>
                </CardContent>
                <IconButton
                  edge="end"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Delete />
                </IconButton>
              </ProductCard>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <SummaryBox>
              <Typography variant="h5">Order Summary</Typography>
              <Divider sx={{ marginY: '1rem' }} />
              <Typography variant="body1">
                Total Items: {cartItems.length}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                Total: Rs. {totalPrice.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ marginTop: '1rem' }}
              >
                Proceed to Checkout
              </Button>
            </SummaryBox>
          </Grid>
        </Grid>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Item removed from cart"
      />
    </CartContainer>
  );
};

export default ShoppingCart;

import React, { useState, useEffect } from 'react';
import {
  Box, Button, Typography, Card, CardContent, CardActions, Snackbar, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // For generating unique order IDs

// Styled Components
const CartContainer = styled(Box)(() => ({
  padding: '2rem',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
}));

const CartCard = styled(Card)(() => ({
  marginBottom: '1rem',
}));

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  // Handle order submission and store order in product.json
  const handlePlaceOrder = async () => {
    if (!customerName || !customerAddress) {
      alert('Please fill in your name and address!');
      return;
    }

    const order = {
      id: uuidv4(), // Generate a unique order ID
      customerName,
      customerAddress,
      items: cartItems,
      totalPrice,
      date: new Date().toISOString(),
    };

    try {
      // Send a POST request to update the product.json
      await axios.post('http://localhost:3000/order', order);

      // Clear the cart after successful order
      setCartItems([]);
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <CartContainer>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <CartCard key={item.id}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Typography variant="body1">
                Quantity: {item.quantity} | Price: Rs.{item.price.toFixed(2)}
              </Typography>
            </CardContent>
          </CartCard>
        ))
      )}

      <Box mt={3}>
        <Typography variant="h6">Total: Rs.{totalPrice.toFixed(2)}</Typography>
      </Box>

      <Box mt={3}>
        <TextField
          label="Customer Name"
          fullWidth
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Address"
          fullWidth
          multiline
          rows={4}
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          margin="normal"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handlePlaceOrder}
        fullWidth
        disabled={cartItems.length === 0}
      >
        Place Order
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Order placed successfully!"
      />
    </CartContainer>
  );
};

export default ShoppingCart;
*/
/*
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Card, TextField, Snackbar } from '@mui/material';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [total, setTotal] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(total);
  }, [cartItems]);

  const handlePlaceOrder = async () => {
    if (!customerName || !address) {
      alert('Please fill all fields');
      return;
    }

    const order = {
      id: uuidv4(),
      customerName,
      address,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3000/order', order);
      setCartItems([]);
      setSnackbarOpen(true);
    } catch {
      alert('Failed to place order.');
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4">Shopping Cart</Typography>
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <Typography>{item.name} (x{item.quantity})</Typography>
        </Card>
      ))}
      <Typography>Total: Rs.{total}</Typography>
      <TextField label="Name" fullWidth onChange={(e) => setCustomerName(e.target.value)} />
      <TextField label="Address" fullWidth onChange={(e) => setAddress(e.target.value)} />
      <Button onClick={handlePlaceOrder} variant="contained" fullWidth>Place Order</Button>
      <Snackbar open={snackbarOpen} message="Order placed!" autoHideDuration={3000} />
    </Box>
  );
};

export default ShoppingCart;
*/
/*import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Card, TextField, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import icon from '../assets/icon.jpg'; // Import icon

// Styled components for the NavBar
const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  width: '100%', // Full width
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

const StyledButton = styled(Button)({
  color: '#fff',
  marginLeft: '16px',
  marginRight: '16px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  border: 'none', // No border
  '&:hover': {
    backgroundColor: '#d1c4e9',
  },
});

const IconImage = styled('img')({
  width: '50px',
  height: '50px',
});

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [total, setTotal] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(total);
  }, [cartItems]);

  const handlePlaceOrder = async () => {
    if (!customerName || !address) {
      alert('Please fill all fields');
      return;
    }

    const order = {
      id: uuidv4(),
      customerName,
      address,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3000/order', order);
      setCartItems([]);
      setSnackbarOpen(true);
    } catch {
      alert('Failed to place order.');
    }
  };

  return (
    <Box p={3}>
      <NavBar position="static">
        <Toolbar>
          <NavBarTitleWrapper>
            <IconImage src={icon} alt="ShopPulse Icon" />
            <NavBarTitle>ShopPulse</NavBarTitle>
          </NavBarTitleWrapper>
          <Box display="flex" alignItems="center">
            <Link to="/">
              <StyledButton>Home</StyledButton> 
            </Link>
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
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton>Sign Up</StyledButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <Typography variant="h4" mt={3}>
        Shopping Cart
      </Typography>
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <Typography>
            {item.name} (x{item.quantity})
          </Typography>
        </Card>
      ))}
      <Typography>Total: Rs.{total}</Typography>
      <TextField
        label="Name"
        fullWidth
        onChange={(e) => setCustomerName(e.target.value)}
        sx={{ my: 2 }}
      />
      <TextField
        label="Address"
        fullWidth
        onChange={(e) => setAddress(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button onClick={handlePlaceOrder} variant="contained" fullWidth>
        Place Order
      </Button>
      <Snackbar open={snackbarOpen} message="Order placed!" autoHideDuration={3000} />
    </Box>
  );
};

export default ShoppingCart;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  TextField,
  Snackbar,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import icon from '../assets/icon.jpg'; // Import icon
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Styled components for the NavBar
const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  width: '100%',
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

const StyledButton = styled(Button)({
  color: '#fff',
  marginLeft: '16px',
  marginRight: '16px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  border: 'none',
  '&:hover': {
    backgroundColor: '#d1c4e9',
  },
});

const IconImage = styled('img')({
  width: '50px',
  height: '50px',
});

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [total, setTotal] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Calculate total whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(total);
  }, [cartItems]);

  // Handle quantity change (increase, decrease, or removal)
  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ).filter((item) => item.quantity > 0); // Remove items with quantity 0
    setCartItems(updatedItems);
  };

  const handlePlaceOrder = async () => {
    if (!customerName || !address) {
      alert('Please fill all fields');
      return;
    }

    const order = {
      id: uuidv4(),
      customerName,
      address,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3000/order', order);
      setCartItems([]);
      setSnackbarOpen(true);
    } catch {
      alert('Failed to place order.');
    }
  };

  return (
    <Box p={3}>
      <NavBar position="static">
        <Toolbar>
          <NavBarTitleWrapper>
            <IconImage src={icon} alt="ShopPulse Icon" />
            <NavBarTitle>ShopPulse</NavBarTitle>
          </NavBarTitleWrapper>
          <Box display="flex" alignItems="center">
            <Link to="/">
              <StyledButton>Home</StyledButton>
            </Link>
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
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton>Sign Up</StyledButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <Typography variant="h4" mt={3}>
        Shopping Cart
      </Typography>
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">Size: {item.size}</Typography>
            <Typography variant="body2">Price: Rs.{item.price}</Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      ))}
      <Typography>Total: Rs.{total}</Typography>
      <TextField
        label="Name"
        fullWidth
        onChange={(e) => setCustomerName(e.target.value)}
        sx={{ my: 2 }}
      />
      <TextField
        label="Address"
        fullWidth
        onChange={(e) => setAddress(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button onClick={handlePlaceOrder} variant="contained" fullWidth>
        Place Order
      </Button>
      <Snackbar open={snackbarOpen} message="Order placed!" autoHideDuration={3000} />
    </Box>
  );
};

export default ShoppingCart;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Snackbar,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import icon from '../assets/icon.jpg'; // Import icon
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Styled components for the NavBar
const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  width: '100%',
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

const StyledButton = styled(Button)({
  color: '#fff',
  marginLeft: '16px',
  marginRight: '16px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  border: 'none',
  '&:hover': {
    backgroundColor: '#d1c4e9',
  },
});

const IconImage = styled('img')({
  width: '50px',
  height: '50px',
});

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Calculate total whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(total);
  }, [cartItems]);

  // Handle quantity change (increase, decrease, or removal)
  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems
      .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      .filter((item) => item.quantity > 0); // Remove items with quantity 0
    setCartItems(updatedItems);
  };

  const handlePlaceOrder = async () => {
    const order = {
      id: uuidv4(),
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3000/order', order);
      setCartItems([]); // Clear cart after placing order
      setSnackbarOpen(true);
    } catch {
      alert('Failed to place order.');
    }
  };

  return (
    <Box p={3}>
      <NavBar position="static">
        <Toolbar>
          <NavBarTitleWrapper>
            <IconImage src={icon} alt="ShopPulse Icon" />
            <NavBarTitle>ShopPulse</NavBarTitle>
          </NavBarTitleWrapper>
          <Box display="flex" alignItems="center">
            <Link to="/">
              <StyledButton>Home</StyledButton>
            </Link>
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
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton>Sign Up</StyledButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <Typography variant="h4" mt={3}>
        Shopping Cart
      </Typography>
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">Size: {item.size}</Typography>
            <Typography variant="body2">Price: Rs.{item.price}</Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      ))}
      <Typography>Total: Rs.{total}</Typography>
      <Button onClick={handlePlaceOrder} variant="contained" fullWidth sx={{ mt: 2 }}>
        Place Order
      </Button>
      <Snackbar open={snackbarOpen} message="Order placed!" autoHideDuration={3000} />
    </Box>
  );
};

export default ShoppingCart;
*/
/*
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Snackbar,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import icon from '../assets/icon.jpg'; // Import icon
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Styled components for the NavBar
const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  width: '100%',
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

const StyledButton = styled(Button)({
  color: '#fff',
  marginLeft: '16px',
  marginRight: '16px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  border: 'none',
  '&:hover': {
    backgroundColor: '#d1c4e9',
  },
});

const IconImage = styled('img')({
  width: '50px',
  height: '50px',
});

const PlaceOrderButton = styled(Button)({
  backgroundColor: '#7b1fa2', // Custom color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#6a1b9a', // Darker shade for hover
  },
});

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(total);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems
      .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      .filter((item) => item.quantity > 0);
    setCartItems(updatedItems);
  };

  const handlePlaceOrder = async () => {
    const order = {
      id: uuidv4(),
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3000/order', order);
      setCartItems([]);
      setSnackbarOpen(true);
    } catch {
      alert('Failed to place order.');
    }
  };

  return (
    <Box p={3}>
      <NavBar position="static">
        <Toolbar>
          <NavBarTitleWrapper>
            <IconImage src={icon} alt="ShopPulse Icon" />
            <NavBarTitle>ShopPulse</NavBarTitle>
          </NavBarTitleWrapper>
          <Box display="flex" alignItems="center">
            <Link to="/">
              <StyledButton>Home</StyledButton>
            </Link>
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
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton>Sign Up</StyledButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>

      <Typography variant="h4" mt={3}>
        Shopping Cart
      </Typography>
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">Size: {item.size}</Typography>
            <Typography variant="body2">Price: Rs.{item.price}</Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      ))}
      <Typography>Total: Rs.{total}</Typography>
      <PlaceOrderButton onClick={handlePlaceOrder} variant="contained" fullWidth sx={{ mt: 2 }}>
        Place Order
      </PlaceOrderButton>
      <Snackbar open={snackbarOpen} message="Order placed!" autoHideDuration={3000} />
    </Box>
  );
};

export default ShoppingCart;
// */
// import React, { useEffect, useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Snackbar,
//   IconButton,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import icon from '../assets/icon.jpg';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// // Styled components
// const NavBar = styled(AppBar)({
//   backgroundColor: '#7b1fa2',
//   boxShadow: 'none',
//   width: '100%',
//   padding: '0 2rem',
// });

// const NavBarTitleWrapper = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   flexGrow: 1,
// });

// const NavBarTitle = styled(Typography)({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// });

// const StyledButton = styled(Button)({
//   color: '#fff',
//   marginLeft: '16px',
//   marginRight: '16px',
//   fontWeight: 'bold',
// });

// const IconImage = styled('img')({
//   width: '50px',
//   height: '50px',
// });

// const PlaceOrderButton = styled(Button)({
//   backgroundColor: '#7b1fa2',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6a1b9a',
//   },
// });

// const ShoppingCart = ({ cartItems, setCartItems }) => {
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotal(totalAmount);
//   }, [cartItems]);

//   const updateQuantity = (id, newQuantity) => {
//     const updatedItems = cartItems
//       .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
//       .filter((item) => item.quantity > 0);
//     setCartItems(updatedItems);
//   };

//   const handlePlaceOrder = () => {
//     const gst = total * 0.18; // 18% GST
//     const platformFee = 50; // Fixed platform fee
//     const grandTotal = total + gst + platformFee;

//     const orderSummary = {
//       total,
//       gst,
//       platformFee,
//       grandTotal,
//     };

//     navigate('/ordersummary', { state: { orderSummary } }); // Navigate to OrderSummary
//   };

//   return (
//     <Box p={3}>
//       <NavBar position="static">
//         <Toolbar>
//           <NavBarTitleWrapper>
//             <IconImage src={icon} alt="ShopPulse Icon" />
//             <NavBarTitle>ShopPulse</NavBarTitle>
//           </NavBarTitleWrapper>
//           <Box display="flex" alignItems="center">
//             <Link to="/"><StyledButton>Home</StyledButton></Link>
//             <Link to="/catalog"><StyledButton>Men</StyledButton></Link>
//             <Link to="/women"><StyledButton>Women</StyledButton></Link>
//             <Link to="/kids"><StyledButton>Kids</StyledButton></Link>
//             <Link to="/beauty"><StyledButton>Beauty</StyledButton></Link>
//             <Link to="/login"><StyledButton>Login</StyledButton></Link>
//             <Link to="/signup"><StyledButton>Sign Up</StyledButton></Link>
//           </Box>
//         </Toolbar>
//       </NavBar>

//       <Typography variant="h4" mt={3}>Shopping Cart</Typography>
//       {cartItems.map((item) => (
//         <Card key={item.id} sx={{ mb: 2 }}>
//           <CardContent>
//             <Typography variant="h6">{item.name}</Typography>
//             <Typography>Size: {item.size}</Typography>
//             <Typography>Price: Rs.{item.price}</Typography>
//           </CardContent>
//           <CardActions>
//             <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}><RemoveIcon /></IconButton>
//             <Typography>{item.quantity}</Typography>
//             <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}><AddIcon /></IconButton>
//           </CardActions>
//         </Card>
//       ))}
//       <Typography>Total: Rs.{total}</Typography>
//       <PlaceOrderButton onClick={handlePlaceOrder} fullWidth sx={{ mt: 2 }}>Place Order</PlaceOrderButton>
//     </Box>
//   );
// };

// export default ShoppingCart;


// import React, { useEffect, useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Snackbar,
//   IconButton,
//   CardMedia, // Import CardMedia for image handling
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import icon from '../assets/icon.jpg';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// // Styled components
// const NavBar = styled(AppBar)({
//   backgroundColor: '#7b1fa2',
//   boxShadow: 'none',
//   width: '100%',
//   padding: '0 2rem',
// });

// const NavBarTitleWrapper = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   flexGrow: 1,
// });

// const NavBarTitle = styled(Typography)({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// });

// const StyledButton = styled(Button)({
//   color: '#fff',
//   marginLeft: '16px',
//   marginRight: '16px',
//   fontWeight: 'bold',
// });

// const IconImage = styled('img')({
//   width: '50px',
//   height: '50px',
// });

// const PlaceOrderButton = styled(Button)({
//   backgroundColor: '#7b1fa2',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6a1b9a',
//   },
// });

// const ProductImage = styled(CardMedia)({
//   height: 140, // Adjust this value based on your design
// });

// const ShoppingCart = ({ cartItems, setCartItems }) => {
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotal(totalAmount);
//   }, [cartItems]);

//   const updateQuantity = (id, newQuantity) => {
//     const updatedItems = cartItems
//       .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
//       .filter((item) => item.quantity > 0);
//     setCartItems(updatedItems);
//   };

//   const handlePlaceOrder = () => {
//     const gst = total * 0.18; // 18% GST
//     const platformFee = 50; // Fixed platform fee
//     const grandTotal = total + gst + platformFee;

//     const orderSummary = {
//       total,
//       gst,
//       platformFee,
//       grandTotal,
//     };

//     navigate('/ordersummary', { state: { orderSummary } });
//   };

//   return (
//     <Box p={3}>
//       <NavBar position="static">
//         <Toolbar>
//           <NavBarTitleWrapper>
//             <IconImage src={icon} alt="ShopPulse Icon" />
//             <NavBarTitle>ShopPulse</NavBarTitle>
//           </NavBarTitleWrapper>
//           <Box display="flex" alignItems="center">
//             <Link to="/"><StyledButton>Home</StyledButton></Link>
//             <Link to="/catalog"><StyledButton>Men</StyledButton></Link>
//             <Link to="/women"><StyledButton>Women</StyledButton></Link>
//             <Link to="/kids"><StyledButton>Kids</StyledButton></Link>
//             <Link to="/beauty"><StyledButton>Beauty</StyledButton></Link>
//             <Link to="/login"><StyledButton>Login</StyledButton></Link>
//             <Link to="/signup"><StyledButton>Sign Up</StyledButton></Link>
//           </Box>
//         </Toolbar>
//       </NavBar>

//       <Typography variant="h4" mt={3}>Shopping Cart</Typography>
//       {cartItems.map((item) => (
//         <Card key={item.id} sx={{ mb: 2 }}>
//           <ProductImage image={item.image} title={item.name} />
//           <CardContent>
//             <Typography variant="h6">{item.name}</Typography>
//             <Typography>Size: {item.size}</Typography>
//             <Typography>Price: Rs.{item.price}</Typography>
//           </CardContent>
//           <CardActions>
//             <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
//               <RemoveIcon />
//             </IconButton>
//             <Typography>{item.quantity}</Typography>
//             <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//               <AddIcon />
//             </IconButton>
//           </CardActions>
//         </Card>
//       ))}
//       <Typography>Total: Rs.{total}</Typography>
//       <PlaceOrderButton onClick={handlePlaceOrder} fullWidth sx={{ mt: 2 }}>
//         Place Order
//       </PlaceOrderButton>
//     </Box>
//   );
// };

// export default ShoppingCart;

// import React, { useEffect, useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   CardMedia, // Import CardMedia for image handling
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link, useNavigate } from 'react-router-dom';
// import icon from '../assets/icon.jpg';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// // Styled components
// const NavBar = styled(AppBar)( {
//   backgroundColor: '#7b1fa2',
//   boxShadow: 'none',
//   width: '100%',
//   padding: '0 2rem',
// });

// const NavBarTitleWrapper = styled(Box)( {
//   display: 'flex',
//   alignItems: 'center',
//   flexGrow: 1,
// });

// const NavBarTitle = styled(Typography)( {
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// });

// const StyledButton = styled(Button)( {
//   color: '#fff',
//   marginLeft: '16px',
//   marginRight: '16px',
//   fontWeight: 'bold',
// });

// const IconImage = styled('img')( {
//   width: '50px',
//   height: '50px',
// });

// const PlaceOrderButton = styled(Button)( {
//   backgroundColor: '#7b1fa2',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6a1b9a',
//   },
// });

// const ProductImage = styled(CardMedia)( {
//   height: 140, // Adjust this value based on your design
// });

// const ShoppingCart = ({ cartItems, setCartItems }) => {
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotal(totalAmount);
//   }, [cartItems]);

//   const updateQuantity = (id, newQuantity) => {
//     const updatedItems = cartItems
//       .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
//       .filter((item) => item.quantity > 0);
//     setCartItems(updatedItems);
//   };

//   const handlePlaceOrder = () => {
//     const gst = total * 0.18; // 18% GST
//     const platformFee = 50; // Fixed platform fee
//     const grandTotal = total + gst + platformFee;

//     const orderSummary = {
//       total,
//       gst,
//       platformFee,
//       grandTotal,
//     };

//     navigate('/ordersummary', { state: { orderSummary } });
//   };

//   return (
//     <Box p={3}>
//       <NavBar position="static">
//         <Toolbar>
//           <NavBarTitleWrapper>
//             <IconImage src={icon} alt="ShopPulse Icon" />
//             <NavBarTitle>ShopPulse</NavBarTitle>
//           </NavBarTitleWrapper>
//           <Box display="flex" alignItems="center">
//             <Link to="/"><StyledButton>Home</StyledButton></Link>
//             <Link to="/catalog"><StyledButton>Men</StyledButton></Link>
//             <Link to="/women"><StyledButton>Women</StyledButton></Link>
//             <Link to="/kids"><StyledButton>Kids</StyledButton></Link>
//             <Link to="/beauty"><StyledButton>Beauty</StyledButton></Link>
//             <Link to="/login"><StyledButton>Login</StyledButton></Link>
//             <Link to="/signup"><StyledButton>Sign Up</StyledButton></Link>
//           </Box>
//         </Toolbar>
//       </NavBar>

//       <Typography variant="h4" mt={3}>Shopping Cart</Typography>
      
//       {cartItems.length === 0 ? (  // Check if the cart is empty
//         <Typography variant="h6" color="textSecondary" mt={2}>
//           Your cart is empty. Add some products to place an order!
//         </Typography>
//       ) : (
//         cartItems.map((item) => (
//           <Card key={item.id} sx={{ mb: 2 }}>
//             <ProductImage image={item.image} title={item.name} />
//             <CardContent>
//               <Typography variant="h6">{item.name}</Typography>
//               <Typography>Size: {item.size}</Typography>
//               <Typography>Price: Rs.{item.price}</Typography>
//             </CardContent>
//             <CardActions>
//               <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
//                 <RemoveIcon />
//               </IconButton>
//               <Typography>{item.quantity}</Typography>
//               <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                 <AddIcon />
//               </IconButton>
//             </CardActions>
//           </Card>
//         ))
//       )}
      
//       <Typography>Total: Rs.{total}</Typography>
//       <PlaceOrderButton
//         onClick={handlePlaceOrder}
//         fullWidth
//         sx={{ mt: 2 }}
//         disabled={cartItems.length === 0} // Disable button if cart is empty
//       >
//         Place Order
//       </PlaceOrderButton>
//     </Box>
//   );
// };

// export default ShoppingCart;
// import React, { useEffect, useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   CardMedia, // Import CardMedia for image handling
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link, useNavigate } from 'react-router-dom';
// import icon from '../assets/icon.jpg';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// // Import images
// import jacketImage from '../assets/jacket.jpg';
// import casualSneakersImage from '../assets/casual-sneakers.jpg';
// import classicalChinoesImage from '../assets/classical-chinos.jpg';
// import slimFitJeansImage from '../assets/slim-fit-jeans.jpg';
// import leatherBootsImage from '../assets/leather-boots.jpg';
// import tshirtImage from '../assets/t-shirt.webp';
// import floralDressImage from '../assets/floral-dress.jpg';
// import highWaistedJeansImage from '../assets/High-Waisted-Jeans.jpg';
// import leatherJacketImage from '../assets/Leather-Jacket.jpg';
// import stylishBlouseImage from '../assets/Stylish-Blouse.jpg';
// import denimSkirtImage from '../assets/Denim-Skirt.jpg';
// import leggingImage from '../assets/legging.jpg';
// import kidsShoesImage from '../assets/Kids-Shoes.jpg';
// import kidsTShirtImage from '../assets/Kids-T-Shirt.jpg';
// import teddyBearImage from '../assets/Teddy-Bear.jpg';
// import skateboardImage from '../assets/Skateboard.jpg';
// import buildingBlocksImage from '../assets/Building-Blocks.jpg';
// import puzzleImage from '../assets/Puzzle.jpg';
// import bodyScrubImage from '../assets/Body-Scrub.jpg';
// import faceCreamImage from '../assets/Face-Cream.jpg';
// import facialMaskImage from '../assets/Facial-Mask.jpg';
// import hairOilImage from '../assets/hair-oil.jpg';
// import handCreamImage from '../assets/Hand-Cream.jpg';
// import lipBalmImage from '../assets/Lip-Balm.jpg';

// // Styled components
// const NavBar = styled(AppBar)({
//   backgroundColor: '#7b1fa2',
//   boxShadow: 'none',
//   width: '100%',
//   padding: '0 2rem',
// });

// const NavBarTitleWrapper = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   flexGrow: 1,
// });

// const NavBarTitle = styled(Typography)({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   color: '#fff',
//   marginLeft: '0.5rem',
// });

// const StyledButton = styled(Button)({
//   color: '#fff',
//   marginLeft: '16px',
//   marginRight: '16px',
//   fontWeight: 'bold',
// });

// const IconImage = styled('img')({
//   width: '50px',
//   height: '50px',
// });

// const PlaceOrderButton = styled(Button)({
//   backgroundColor: '#7b1fa2',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6a1b9a',
//   },
// });

// const ProductImage = styled(CardMedia)({
//   height: 140, // Adjust this value based on your design
// });

// // Map product names to their corresponding images
// const productImages = {
//   "Stylish Jacket": jacketImage,
//   "Casual Sneakers": casualSneakersImage,
//   "Classic Chinos": classicalChinoesImage,
//   "Slim Fit Jeans": slimFitJeansImage,
//   "leather boots": leatherBootsImage,
//   "Classic T-Shirt": tshirtImage,
//   "Floral Dress": floralDressImage,
//   "High-Waisted Jeans": highWaistedJeansImage,
//   "Leather Jacket": leatherJacketImage,
//   "Stylish Blouse": stylishBlouseImage,
//   "Denim Skirt": denimSkirtImage,
//   "Comfortable Leggings": leggingImage,
//   "Adventurous Kids Shoes": kidsShoesImage,
//   "Fashionable Kids T-Shirt": kidsTShirtImage,
//   "Cute Teddy Bear": teddyBearImage,
//   "Kids Skateboard": skateboardImage,
//   "Colorful Building Blocks": buildingBlocksImage,
//   "Playful Puzzle": puzzleImage,
//   "Revitalizing Body Scrub": bodyScrubImage,
//   "Moisturizing Face Cream": faceCreamImage,
//   "Soothing Face Mask": facialMaskImage,
//   "Nourishing Hair Oil": hairOilImage,
//   "Moisturizing Hand Cream": handCreamImage,
//   "Hydrating Lip Balm": lipBalmImage,
// };

// const ShoppingCart = ({ cartItems, setCartItems }) => {
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotal(totalAmount);
//   }, [cartItems]);

//   const updateQuantity = (id, newQuantity) => {
//     const updatedItems = cartItems
//       .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
//       .filter((item) => item.quantity > 0);
//     setCartItems(updatedItems);
//   };

//   const handlePlaceOrder = () => {
//     const gst = total * 0.18; // 18% GST
//     const platformFee = 50; // Fixed platform fee
//     const grandTotal = total + gst + platformFee;

//     const orderSummary = {
//       total,
//       gst,
//       platformFee,
//       grandTotal,
//     };

//     navigate('/ordersummary', { state: { orderSummary } });
//   };

//   return (
//     <Box p={3}>
//       <NavBar position="static">
//         <Toolbar>
//           <NavBarTitleWrapper>
//             <IconImage src={icon} alt="ShopPulse Icon" />
//             <NavBarTitle>ShopPulse</NavBarTitle>
//           </NavBarTitleWrapper>
//           <Box display="flex" alignItems="center">
//             <Link to="/"><StyledButton>Home</StyledButton></Link>
//             <Link to="/catalog"><StyledButton>Men</StyledButton></Link>
//             <Link to="/women"><StyledButton>Women</StyledButton></Link>
//             <Link to="/kids"><StyledButton>Kids</StyledButton></Link>
//             <Link to="/beauty"><StyledButton>Beauty</StyledButton></Link>
//             <Link to="/login"><StyledButton>Login</StyledButton></Link>
//             <Link to="/signup"><StyledButton>Sign Up</StyledButton></Link>
//           </Box>
//         </Toolbar>
//       </NavBar>

//       <Typography variant="h4" mt={3}>Shopping Cart</Typography>
      
//       {cartItems.length === 0 ? (  // Check if the cart is empty
//         <Typography variant="h6" color="textSecondary" mt={2}>
//           Your cart is empty. Add some products to place an order!
//         </Typography>
//       ) : (
//         cartItems.map((item) => (
//           <Card key={item.id} sx={{ mb: 2 }}>
//             <ProductImage image={productImages[item.name] || ''} title={item.name} />
//             <CardContent>
//               <Typography variant="h6">{item.name}</Typography>
//               <Typography>Size: {item.size}</Typography>
//               <Typography>Price: Rs.{item.price}</Typography>
//             </CardContent>
//             <CardActions>
//               <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
//                 <RemoveIcon />
//               </IconButton>
//               <Typography>{item.quantity}</Typography>
//               <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                 <AddIcon />
//               </IconButton>
//             </CardActions>
//           </Card>
//         ))
//       )}
      
//       <Typography>Total: Rs.{total}</Typography>
//       <PlaceOrderButton
//         onClick={handlePlaceOrder}
//         fullWidth
//         sx={{ mt: 2 }}
//         disabled={cartItems.length === 0} // Disable button if cart is empty
//       >
//         Place Order
//       </PlaceOrderButton>
//     </Box>
//   );
// };

// export default ShoppingCart;
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CardMedia, // Import CardMedia for image handling
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Import images
import jacketImage from '../assets/jacket.jpg';
import casualSneakersImage from '../assets/casual-sneakers.jpg';
import classicalChinoesImage from '../assets/classical-chinos.jpg';
import slimFitJeansImage from '../assets/slim-fit-jeans.jpg';
import leatherBootsImage from '../assets/leather-boots.jpg';
import tshirtImage from '../assets/t-shirt.webp';
import floralDressImage from '../assets/floral-dress.jpg';
import highWaistedJeansImage from '../assets/High-Waisted-Jeans.jpg';
import leatherJacketImage from '../assets/Leather-Jacket.jpg';
import stylishBlouseImage from '../assets/Stylish-Blouse.jpg';
import denimSkirtImage from '../assets/Denim-Skirt.jpg';
import leggingImage from '../assets/legging.jpg';
import kidsShoesImage from '../assets/Kids-Shoes.jpg';
import kidsTShirtImage from '../assets/Kids-T-Shirt.jpg';
import teddyBearImage from '../assets/Teddy-Bear.jpg';
import skateboardImage from '../assets/Skateboard.jpg';
import buildingBlocksImage from '../assets/Building-Blocks.jpg';
import puzzleImage from '../assets/Puzzle.jpg';
import bodyScrubImage from '../assets/Body-Scrub.jpg';
import faceCreamImage from '../assets/Face-Cream.jpg';
import facialMaskImage from '../assets/Facial-Mask.jpg';
import hairOilImage from '../assets/hair-oil.jpg';
import handCreamImage from '../assets/Hand-Cream.jpg';
import lipBalmImage from '../assets/Lip-Balm.jpg';

// Styled components
const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  boxShadow: 'none',
  width: '100%',
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

const StyledButton = styled(Button)({
  color: '#fff',
  marginLeft: '16px',
  marginRight: '16px',
  fontWeight: 'bold',
});

const IconImage = styled('img')({
  width: '50px',
  height: '50px',
});

const PlaceOrderButton = styled(Button)({
  backgroundColor: '#7b1fa2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#6a1b9a',
  },
});

const ProductImage = styled(CardMedia)({
  height: 70, // Set the height of the image
  width: 70, // Set the width of the image
  objectFit: 'cover', // Ensures the image covers the entire area while maintaining aspect ratio
  margin: '30 auto', // Centers the image horizontally
});

// Map product names to their corresponding images
const productImages = {
  "Stylish Jacket": jacketImage,
  "Casual Sneakers": casualSneakersImage,
  "Classic Chinos": classicalChinoesImage,
  "Slim Fit Jeans": slimFitJeansImage,
  "Leather Boots": leatherBootsImage,
  "Classic T-Shirt": tshirtImage,
  "Floral Dress": floralDressImage,
  "High-Waisted Jeans": highWaistedJeansImage,
  "Leather Jacket": leatherJacketImage,
  "Stylish Blouse": stylishBlouseImage,
  "Denim Skirt": denimSkirtImage,
  "Comfortable Leggings": leggingImage,
  "Adventurous Kids Shoes": kidsShoesImage,
  "Fashionable Kids T-Shirt": kidsTShirtImage,
  "Cute Teddy Bear": teddyBearImage,
  "Kids Skateboard": skateboardImage,
  "Colorful Building Blocks": buildingBlocksImage,
  "Playful Puzzle": puzzleImage,
  "Revitalizing Body Scrub": bodyScrubImage,
  "Moisturizing Face Cream": faceCreamImage,
  "Soothing Face Mask": facialMaskImage,
  "Nourishing Hair Oil": hairOilImage,
  "Moisturizing Hand Cream": handCreamImage,
  "Hydrating Lip Balm": lipBalmImage,
};

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems
      .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      .filter((item) => item.quantity > 0);
    setCartItems(updatedItems);
  };

  const handlePlaceOrder = async () => {
    const gst = total * 0.18; // 18% GST
    const platformFee = 50; // Fixed platform fee
    const grandTotal = total + gst + platformFee;

    const orderSummary = {
      total,
      gst,
      platformFee,
      grandTotal,
    };

    // Prepare order details to be sent to the server
    const orderDetails = {
      orderId: generateOrderId(), // Unique order ID
      products: cartItems, // Add the cart items
      orderSummary,
      orderDate: new Date().toISOString(), // Add order date
    };

    // Send order details to backend to store in product.json
    await saveOrderToDatabase(orderDetails);

    // Navigate to order summary page
    navigate('/ordersummary', { state: { orderSummary } });
  };

  // Function to generate a unique order ID
  const generateOrderId = () => {
    return 'ORDER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Function to save order to the database (hypothetical)
  const saveOrderToDatabase = async (orderDetails) => {
    try {
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
      if (!response.ok) {
        throw new Error('Failed to save order');
      }
      console.log('Order saved successfully');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <Box p={3}>
      <NavBar position="static">
        <Toolbar>
          <NavBarTitleWrapper>
            <IconImage src={icon} alt="ShopPulse Icon" />
            <NavBarTitle>ShopPulse</NavBarTitle>
          </NavBarTitleWrapper>
          <Box display="flex" alignItems="center">
            <Link to="/"><StyledButton>Home</StyledButton></Link>
            <Link to="/catalog"><StyledButton>Men</StyledButton></Link>
            <Link to="/women"><StyledButton>Women</StyledButton></Link>
            <Link to="/kids"><StyledButton>Kids</StyledButton></Link>
            <Link to="/beauty"><StyledButton>Beauty</StyledButton></Link>
            <Link to="/login"><StyledButton>Login</StyledButton></Link>
            <Link to="/signup"><StyledButton>Sign Up</StyledButton></Link>
          </Box>
        </Toolbar>
      </NavBar>

      <Typography variant="h4" mt={3}>Shopping Cart</Typography>
      
      {cartItems.length === 0 ? (  // Check if the cart is empty
        <Typography variant="h6" color="textSecondary" mt={2}>
          Your cart is empty. Add some products to place an order!
        </Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <ProductImage image={productImages[item.name] || ''} title={item.name} />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography>Size: {item.size}</Typography>
              <Typography>Price: Rs.{item.price}</Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <AddIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}
      
      <Typography>Total: Rs.{total}</Typography>
      <PlaceOrderButton
        onClick={handlePlaceOrder}
        fullWidth
        sx={{ mt: 2 }}
        disabled={cartItems.length === 0} // Disable button if cart is empty
      >
        Place Order
      </PlaceOrderButton>
    </Box>
  );
};

export default ShoppingCart;

