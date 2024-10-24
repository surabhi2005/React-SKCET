import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Report = () => {
  const [productsData, setProductsData] = useState({
    men: [],
    women: [],
    kids: [],
    beauty: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menRes, womenRes, kidsRes, beautyRes] = await Promise.all([
          axios.get('http://localhost:3000/men'),
          axios.get('http://localhost:3000/women'),
          axios.get('http://localhost:3000/kids'),
          axios.get('http://localhost:3000/beauty'),
        ]);

        setProductsData({
          men: menRes.data,
          women: womenRes.data,
          kids: kidsRes.data,
          beauty: beautyRes.data,
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load product data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { men, women, kids, beauty } = productsData;

  return (
    <div style={styles.reportContainer}>
      <div style={styles.navBar}>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>HOME</Link>
          <Link to="/catalog" style={styles.navLink}>CATALOG</Link>
        </div>
      </div>

      <h1>Products Availability</h1>

      <CategorySection title="Men's Products" products={men} />
      <CategorySection title="Women's Products" products={women} />
      <CategorySection title="Kids' Products" products={kids} />
      <CategorySection title="Beauty Products" products={beauty} />
    </div>
  );
};

const CategorySection = ({ title, products }) => (
  <section style={styles.categorySection}>
    <h2>{title}</h2>
    <div style={styles.productsGrid}>
      {products.length > 0 ? (
        products.map(product => (
          <div style={styles.productCard} key={product.id}>
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Available Sizes:</p>
            <ul>
              {product.sizes.map(size => (
                <li key={size.name}>
                  {size.name}: {size.quantity} available
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  </section>
);

// CSS styles as a JavaScript object
const styles = {
  reportContainer: {
    fontFamily: 'Arial, sans-serif',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'flex-end', // Aligns items to the right
    backgroundColor: '#7b1fa2',
    padding: '10px',
    marginBottom: '50px',
  },
  navLinks: {
    display: 'flex',
    gap: '20px', // Space between links
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  categorySection: {
    marginBottom: '30px',
  },
  productsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  productCard: {
    flex: '1 1 calc(25% - 20px)',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  '@media (maxWidth: 768px)': {
    productCard: {
      flex: '1 1 calc(50% - 20px)',
    },
  },
  '@media (maxWidth: 480px)': {
    productCard: {
      flex: '1 1 100%',
    },
  },
};

export default Report;
