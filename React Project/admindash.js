import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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

// Styled component for product images
const ProductImage = styled(CardMedia)({
  height: 150,
  width: 150,
  objectFit: 'cover',
  margin: '0 auto',
});

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
    sizes: [{ name: '', quantity: 0 }]
  });
  const [category, setCategory] = useState('men'); // Default category

  // Fetch products from the API based on selected category
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  // Add a new product
  const handleAddProduct = () => {
    axios
      .post(`http://localhost:3000/${category}`, newProduct)
      .then((response) => {
        setProducts([...products, response.data]); // Add the new product to the state
        setNewProduct({
          id: '',
          name: '',
          price: '',
          description: '',
          image: '',
          sizes: [{ name: '', quantity: 0 }]
        });
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  // Remove a product
  const handleRemoveProduct = (productId) => {
    axios
      .delete(`http://localhost:3000/${category}/${productId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error('Error removing product:', error);
      });
  };

  // Handle input changes for the new product form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <ul style={styles.navLinks}>
          <li><Button style={styles.navButton} onClick={() => setCategory('men')}>Men</Button></li>
          <li><Button style={styles.navButton} onClick={() => setCategory('women')}>Women</Button></li>
          <li><Button style={styles.navButton} onClick={() => setCategory('kids')}>Kids</Button></li>
          <li><Button style={styles.navButton} onClick={() => setCategory('beauty')}>Beauty</Button></li>
        </ul>
      </nav>

      <h1>Admin Dashboard</h1>

      {/* Display the current category */}
      <h2>Manage Products ({category.charAt(0).toUpperCase() + category.slice(1)})</h2>

      {/* Product List */}
      <ul style={styles.productList}>
        {products.map((product) => (
          <li key={product.id} style={styles.productItem}>
            <Card style={{ padding: '10px', width: '300px' }}>
              <ProductImage
                image={productImages[product.name] || ''} // Display product image
                title={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Price: Rs.{product.price}</Typography>
                <Typography>Description: {product.description}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleRemoveProduct(product.id)} style={styles.removeButton}>
                  Remove
                </Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>

      {/* Add Product Form */}
      <h2>Add New Product</h2>
      <div style={styles.form}>
        <input type="text" name="id" placeholder="ID" value={newProduct.id} onChange={handleInputChange} style={styles.input} />
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} style={styles.input} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} style={styles.input} />
        <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} style={styles.input} />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} style={styles.input} />
        <Button onClick={handleAddProduct} style={styles.addButton}>Add Product</Button>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#a94cc8', // Lighter shade of original color
    padding: '10px',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    padding: 0,
  },
  navButton: {
    backgroundColor: '#c679de', // Lighter shade of the navbar color
    color: '#fff', // White text
    fontWeight: 'bold',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'none', // Prevents the button text from being all uppercase
    '&:hover': {
      backgroundColor: '#b266cc', // Darker shade when hovered
    },
  },
  productList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  productItem: {
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  addButton: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  removeButton: {
    padding: '5px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },

};

export default AdminDashboard;

