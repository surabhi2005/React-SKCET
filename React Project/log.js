// // src/components/LoginSelection.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginSelection = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="login-selection-container">
//       <h2>Select Login Type</h2>
//       <button onClick={() => navigate('/login')} className="login-btn">User Login</button>
//       <button onClick={() => navigate('/admin')} className="login-btn">Admin Login</button>
//     </div>
//   );
// };

// export default LoginSelection;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginSelection = () => {
//   const navigate = useNavigate();

//   // Define styles for the component
//   const styles = {
//     container: {
//       textAlign: 'center',
//       padding: '50px',
//       position: 'relative',
//       height: '100vh',
//       background: 'linear-gradient(to right, #f7f7f7, #eaeaea)',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       overflow: 'hidden',
//     },
//     backgroundText: {
//       position: 'absolute',
//       fontSize: '100px',
//       fontWeight: 'bold',
//       color: '#ececec',
//       top: '20%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       zIndex: '-1',
//     },
//     navbar: {
//       position: 'absolute',
//       top: 0,
//       width: '100%',
//       padding: '10px 20px',
//       backgroundColor: '#7b1fa2',
//       color: '#fff',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     button: {
//       padding: '10px 20px',
//       margin: '20px',
//       backgroundColor: '#4CAF50',
//       color: 'white',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '16px',
//     },
//     buttonAdmin: {
//       backgroundColor: '#f44336', // Different color for admin button
//     },
//     navbarTitle: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Navbar */}
//       <div style={styles.navbar}>
//         <span style={styles.navbarTitle}>ShopPulse</span>
//         <button onClick={() => navigate('/')} style={styles.button}>
//         HOME
//       </button>
//       </div>

//       {/* Background Text */}
//       <div style={styles.backgroundText}>Welcome</div>
//       <button onClick={() => navigate('/login')} style={styles.button}>
//         User Login
//       </button>
      
//       <button onClick={() => navigate('/admin')} style={{ ...styles.button, ...styles.buttonAdmin }}>
//         Admin Login
//       </button>
//     </div>
//   );
// };

// export default LoginSelection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/icon.jpg'; // Importing the icon image
import background from '../assets/back.jpg'; // Importing the background image

const LoginSelection = () => {
  const navigate = useNavigate();

  // Define styles for the component
  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      position: 'relative',
      height: '100vh',
      backgroundImage: `url(${background})`, // Setting the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    backgroundText: {
      position: 'absolute',
      fontSize: '60px',
      fontWeight: 'bold',
      color: '#ececec',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1',
      textAlign: 'center',
      lineHeight: '1.2',
    },
    navbar: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '60px', // Navbar height
      padding: '10px 20px',
      backgroundColor: '#7b1fa2',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
    button: {
      padding: '10px 20px',
      margin: '20px',
      backgroundColor:'#7b1fa2', // Changed color of the Home button to blue
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonAdmin: {
      backgroundColor: '#f44336', // Different color for admin button
    },
    navbarTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      Padding:'10px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarTitle}>
          <img src={icon} alt="Site Icon" style={styles.icon} /> {/* Website icon */}
          ShopPulse
        </div>
        <button onClick={() => navigate('/')} style={styles.button}>
          HOME
        </button>
      </div>


      <h2>Select Login Type</h2>

      <button onClick={() => navigate('/login')} style={styles.button}>
        User Login
      </button>

      <button onClick={() => navigate('/admin')} style={{ ...styles.button, ...styles.buttonAdmin }}>
        Admin Login
      </button>
    </div>
  );
};

export default LoginSelection;
