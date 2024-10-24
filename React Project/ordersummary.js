import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Cart Icon
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Success icon

const NavBar = styled(AppBar)({
  backgroundColor: '#7b1fa2',
  padding: '0 2rem',
});

const SummaryButton = styled(Button)({
  backgroundColor: '#7b1fa2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#6a1b9a',
  },
});

const SummaryBox = styled(Paper)({
  padding: '1.5rem',
  marginTop: '1.5rem',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
});

const OrderSummary = () => {
  const { state } = useLocation(); // Get order summary from state
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false); // Dialog state

  const { total, gst, platformFee, grandTotal } = state.orderSummary;

  const handlePayment = () => {
    if (!name || !address || !phoneNumber || !email) {
      alert('Please fill in all delivery details.');
      return;
    }
    setDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    navigate('/'); // Redirect to home after closing the dialog
  };

  return (
    <Box p={3}>
      <NavBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Order Summary
          </Typography>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </NavBar>

      <Typography variant="h4" mt={3} mb={2}>
        Review Your Order
      </Typography>

      {/* Fees Summary Box */}
      <SummaryBox elevation={3}>
        <Typography variant="h6" mb={1}>Order Breakdown</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Total Amount:</Typography>
          <Typography>Rs.{total.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>GST (18%):</Typography>
          <Typography>Rs.{gst.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Platform Fee:</Typography>
          <Typography>Rs.{platformFee.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Grand Total:</Typography>
          <Typography variant="h5">Rs.{grandTotal.toFixed(2)}</Typography>
        </Box>
      </SummaryBox>

      <Typography variant="h6" mt={4} mb={2}>
        Delivery Details
      </Typography>

      <TextField
        label="Full Name"
        fullWidth
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Delivery Address"
        fullWidth
        variant="outlined"
        margin="normal"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <TextField
        label="Phone Number"
        fullWidth
        variant="outlined"
        margin="normal"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <TextField
        label="Email Address"
        fullWidth
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <SummaryButton fullWidth sx={{ mt: 2 }} onClick={handlePayment}>
        Pay Now
      </SummaryButton>

      {/* Dialog for payment confirmation */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <CheckCircleIcon color="success" /> Payment Successful
        </DialogTitle>
        <DialogContent>
          <Typography>Your payment has been processed successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderSummary;
