/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React from 'react';
import Header from './components/Header/header';
import NavBar from './NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PaperShop from './components/Paper/PaperShop';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from './components/Header/AuthContext';
import { useCart } from './components/Paper/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Producto from './Pages/Producto';
import Details from './Pages/Details';
import Shop from './Pages/Shop';
import Register from './Pages/Register';

const App = () => {
  const { cart } = useCart();
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth(false);

  const removeFromCart = (index) => {
        dispatch({
      type: 'UPDATE_CART',
      payload: cart.filter((_, i) => i !== index),
    });
  };

  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header  />
          <NavBar cartCount={cartTotal} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/producto/:category" element={<Producto />} />
            <Route path="/details/:productId" element={<Details removeFromCart={removeFromCart} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/shop" element={<Shop cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
