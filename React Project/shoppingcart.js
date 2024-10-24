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

