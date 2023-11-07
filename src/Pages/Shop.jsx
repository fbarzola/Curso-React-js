/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PaperShop from '../components/Paper/PaperShop'; 

const Shop = ({ cart, removeFromCart }) => { 
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: 50, marginLeft: 100 }}>
      <h1>Carrito de Compras</h1>
      <h1></h1>
      <h1></h1>
      <Button 
      style={{
        display: 'block',
              fontSize:'large',
              marginTop: '40px',
              textAlign: 'center',
              color:'lightcoral',
            borderColor:'lightcoral' 
      }}
      variant='outlined' onClick={() => navigate("/")}>
        Seguir Comprando
      </Button>
      <h1></h1>
      <Button 
      style={{
        display: 'block',
              fontSize:'large',
              marginLeft: '2px',
              marginTop: '10px',
              textAlign: 'center',
              backgroundColor: 'lightcoral' 
      }}
      variant='contained' onClick={() => navigate("/Register")}>
        Finalizar Compra!
      </Button>
      <h1></h1>
      <PaperShop cart={cart} removeFromCart={removeFromCart} /> 
    </div>
  );
};

export default Shop;