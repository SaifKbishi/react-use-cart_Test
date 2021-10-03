import React from 'react';
import {Button, Typography} from '@mui/material/';
// import Typography from '@mui/material/Typography';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';

import './App.css';

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
