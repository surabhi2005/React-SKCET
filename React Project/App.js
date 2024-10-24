/*import React, { useState } from 'react';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const handleSwitchToLogin = () => {
    setCurrentPage('login');
  };

  const handleSwitchToSignUp = () => {
    setCurrentPage('signup');
  };

  const handleSwitchToHome = () => {
    setCurrentPage('home');
  };

  const handleSwitchToCatalog = () => {
    setCurrentPage('catalog'); // New function to switch to the catalog
  };

  return (
    <div>
      {currentPage === 'home' && (
        <HomePage
          onLoginClick={handleSwitchToLogin}
          onSignUpClick={handleSwitchToSignUp}
          onCatalogClick={handleSwitchToCatalog} // Pass the new prop
        />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onSwitchToSignUp={handleSwitchToSignUp}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'signup' && (
        <SignUpPage
          onSwitchToLogin={handleSwitchToLogin}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'catalog' && ( // New condition for catalog
        <Catalog />
      )}
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';
import BeautyCatalog from './component/beauty';
import WomenCatalog from './component/women'; // Import WomenCatalog component
import KidsCatalog from './component/kids'; // Import KidsCatalog component

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  // Navigation handlers
  const handleSwitchToLogin = () => setCurrentPage('login');
  const handleSwitchToSignUp = () => setCurrentPage('signup');
  const handleSwitchToHome = () => setCurrentPage('home');
  const handleSwitchToCatalog = () => setCurrentPage('catalog');
  const handleSwitchToWomen = () => setCurrentPage('women'); 
  const handleSwitchToKids = () => setCurrentPage('kids'); 
  const handleOpenBeautyCatalog=()=>setCurrentPage('beauty');

  return (
    <div>
      {currentPage === 'home' && (
        <HomePage
          onLoginClick={handleSwitchToLogin}
          onSignUpClick={handleSwitchToSignUp}
          onCatalogClick={handleSwitchToCatalog}
          onWomenClick={handleSwitchToWomen}
          onKidsClick={handleSwitchToKids}
        />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onSwitchToSignUp={handleSwitchToSignUp}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'signup' && (
        <SignUpPage
          onSwitchToLogin={handleSwitchToLogin}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'catalog' && (
        <Catalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'women' && (
        <WomenCatalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'kids' && (
        <KidsCatalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'beauty' && (
        <BeautyCatalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
    </div>
  );
}

export default App;

*/
/*
import React, { useState } from 'react';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';
import BeautyCatalog from './component/beauty'; // Import BeautyCatalog component
import WomenCatalog from './component/women'; // Import WomenCatalog component
import KidsCatalog from './component/kids'; // Import KidsCatalog component

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  // Navigation handlers
  const handleSwitchToLogin = () => setCurrentPage('login');
  const handleSwitchToSignUp = () => setCurrentPage('signup');
  const handleSwitchToHome = () => setCurrentPage('home');
  const handleSwitchToCatalog = () => setCurrentPage('catalog');
  const handleSwitchToWomen = () => setCurrentPage('women');
  const handleSwitchToKids = () => setCurrentPage('kids');
  const handleSwitchToBeauty = () => setCurrentPage('beauty'); // Beauty handler

  return (
    <div>
      {currentPage === 'home' && (
        <HomePage
          onLoginClick={handleSwitchToLogin}
          onSignUpClick={handleSwitchToSignUp}
          onCatalogClick={handleSwitchToCatalog}
          onWomenClick={handleSwitchToWomen}
          onKidsClick={handleSwitchToKids}
          onBeautyClick={handleSwitchToBeauty} // Pass beauty click handler
        />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onSwitchToSignUp={handleSwitchToSignUp}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'signup' && (
        <SignUpPage
          onSwitchToLogin={handleSwitchToLogin}
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'catalog' && (
        <Catalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'women' && (
        <WomenCatalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'kids' && (
        <KidsCatalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
      {currentPage === 'beauty' && (
        <BeautyCatalog
          onSwitchToHome={handleSwitchToHome}
        />
      )}
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';
import BeautyCatalog from './component/beauty'; // Import BeautyCatalog component
import WomenCatalog from './component/women'; // Import WomenCatalog component
import KidsCatalog from './component/kids'; // Import KidsCatalog component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/women" element={<WomenCatalog />} />
        <Route path="/kids" element={<KidsCatalog />} />
        <Route path="/beauty" element={<BeautyCatalog />} />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';
import BeautyCatalog from './component/beauty';
import WomenCatalog from './component/women';
import KidsCatalog from './component/kids';
import ShoppingCart from './component/shoppingcart'; // Import ShoppingCart

const App = () => {
  // Initialize cart state
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/women" element={<WomenCatalog />} />
        <Route path="/kids" element={<KidsCatalog />} />
        <Route path="/beauty" element={<BeautyCatalog />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';
import BeautyCatalog from './component/beauty';
import WomenCatalog from './component/women';
import KidsCatalog from './component/kids';
import ShoppingCart from './component/shoppingcart'; // Import ShoppingCart

const App = () => {
  // Initialize cart state
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/catalog"
          element={
            <Catalog cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/women" element={<WomenCatalog />} />
        <Route path="/kids" element={<KidsCatalog />} />
        <Route path="/beauty" element={<BeautyCatalog />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog';
import BeautyCatalog from './component/beauty';
import WomenCatalog from './component/women';
import KidsCatalog from './component/kids';
import ShoppingCart from './component/shoppingcart'; // Import ShoppingCart

const App = () => {
  // Initialize cart state
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/catalog"
          element={
            <Catalog cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/women"
          element={
            <WomenCatalog cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/kids"
          element={
            <KidsCatalog cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/beauty"
          element={
            <BeautyCatalog cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import HomePage from './component/homepage';
import Catalog from './component/catalog'; // Main Catalog Page
import BeautyCatalog from './component/beauty'; // Beauty Category
import WomenCatalog from './component/women'; // Women's Category
import KidsCatalog from './component/kids'; // Kids' Category
import ShoppingCart from './component/shoppingcart'; // Shopping Cart

const App = () => {
  // Initialize cart state
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/catalog" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/women" element={<WomenCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/kids" element={<KidsCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/beauty" element={<BeautyCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
// */
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShoppingCart from './component/shoppingcart';
// import OrderSummary from './component/ordersummary';
// import HomePage from './component/homepage';
// import LoginPage from './component/loginpage';
// import SignUpPage from './component/signuppage';
// import Catalog from './component/catalog';
// import WomenCatalog from './component/women';
// import KidsCatalog from './component/kids';
// import BeautyCatalog from './component/beauty';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/catalog" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/women" element={<WomenCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/kids" element={<KidsCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/beauty" element={<BeautyCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/ordersummary" element={<OrderSummary />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShoppingCart from './component/shoppingcart';
// import OrderSummary from './component/ordersummary';
// import HomePage from './component/homepage';
// import LoginPage from './component/loginpage';
// import SignUpPage from './component/signuppage';
// import Catalog from './component/catalog';
// import WomenCatalog from './component/women';
// import KidsCatalog from './component/kids';
// import BeautyCatalog from './component/beauty';
// import Report from './component/report';  // Import the Report component

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/catalog" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/women" element={<WomenCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/kids" element={<KidsCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/beauty" element={<BeautyCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/ordersummary" element={<OrderSummary />} />
//         <Route path="/report" element={<Report />} />  {/* Add Route for Report */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShoppingCart from './component/shoppingcart';
// import OrderSummary from './component/ordersummary';
// import HomePage from './component/homepage';
// import LoginPage from './component/loginpage';
// import SignUpPage from './component/signuppage';
// import Catalog from './component/catalog';
// import WomenCatalog from './component/women';
// import KidsCatalog from './component/kids';
// import BeautyCatalog from './component/beauty';
// import Report from './component/report';  // Import the Report component
// import LoginSelection from './component/log';  // Import the LoginSelection component
// import AdminLogin from './component/adminlogin'; // Import the AdminLogin component (You can create this component)

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <Router>
//       <Routes>
//         {/* Home and Login Selection */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login-selection" element={<LoginSelection />} />

//         {/* User Login and Admin Login */}
//         <Route path="/login" element={<LoginPage />} /> {/* User Login */}
//         <Route path="/admin" element={<AdminLogin />} /> {/* Admin Login */}

//         {/* Signup */}
//         <Route path="/signup" element={<SignUpPage />} />

//         {/* Catalogs */}
//         <Route path="/catalog" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/women" element={<WomenCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/kids" element={<KidsCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/beauty" element={<BeautyCatalog cartItems={cartItems} setCartItems={setCartItems} />} />

//         {/* Shopping Cart and Order Summary */}
//         <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/ordersummary" element={<OrderSummary />} />

//         {/* Admin/Report Section */}
//         <Route path="/report" element={<Report />} /> {/* Add Route for Report */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from './component/shoppingcart';
import OrderSummary from './component/ordersummary';
import HomePage from './component/homepage';
import LoginPage from './component/loginpage';
import SignUpPage from './component/signuppage';
import Catalog from './component/catalog';
import WomenCatalog from './component/women';
import KidsCatalog from './component/kids';
import BeautyCatalog from './component/beauty';
import Report from './component/report';  // Import the Report component
import LoginSelection from './component/log';  // Import the LoginSelection component
import AdminLogin from './component/adminlogin'; // Import the AdminLogin component
import AdminDashboard from './component/admindash'; // Import AdminDashboard component

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Home and Login Selection */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login-selection" element={<LoginSelection />} />

        {/* User Login and Admin Login */}
        <Route path="/login" element={<LoginPage />} /> {/* User Login */}
        <Route path="/admin" element={<AdminLogin />} /> {/* Admin Login */}

        {/* Signup */}
        <Route path="/signup" element={<SignUpPage />} />

        {/* Catalogs */}
        <Route path="/catalog" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/women" element={<WomenCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/kids" element={<KidsCatalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/beauty" element={<BeautyCatalog cartItems={cartItems} setCartItems={setCartItems} />} />

        {/* Shopping Cart and Order Summary */}
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/ordersummary" element={<OrderSummary />} />

        {/* Admin Section */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard Route */}
        <Route path="/report" element={<Report />} /> {/* Report Section for Admin */}
      </Routes>
    </Router>
  );
};

export default App;





