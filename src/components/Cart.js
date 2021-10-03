import React from 'react';
import {Typography} from '@mui/material/';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    } = useCart();
    if(isEmpty) return <Typography variant="h2" className="text-center">Your Cart is Empty</Typography >
  return (
    <section className='container'>
      <div>
        <div>
          <Typography variant="h5" className="text-center">Cart ({totalUniqueItems})</Typography >
        </div>        
      </div>
    </section>
  );
};

export default Cart;