import React from 'react';
import {Typography, Table, TableBody, TableCell, TableContainer, TableHead,TableRow ,Paper, Button, CardMedia} from '@mui/material/';
import { useCart } from 'react-use-cart';
import './Cart.css'

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
          <Typography variant="h5" className="text-center">Cart ({totalUniqueItems}) Total Items: ({totalItems})</Typography >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, maxWidth:'50%', display:'flex', justifyContent:'center'}} aria-label="simple table"> 
              <TableBody>
                {items.map((item, index) => (
                  <TableRow
                    key={item.index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="item" style={{ maxWidth:'80px'}}>
                      <img
                        src={`${item.img}?w=82&auto=format`}
                        className='inCartImage'
                        alt={item.title}
                        loading="lazy"
                      />
                    </TableCell>
                    <TableCell component="th" scope="item">{item.title}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">Quantity ({item.quantity})</TableCell>

                    <TableCell align="right">
                      <Button className='btn-cart' variant="contained" color="secondary" onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                      <Button className='btn-cart' variant="contained" color="success" onClick={()=>updateItemQuantity(item.id, item.quantity + 1)} >+</Button>
                      <Button className='btn-cart' variant="outlined" color="error" onClick={()=>removeItem(item.id)}>Remove Item</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>        
          <Typography variant="h5" className="text-center">Total price: $ ({cartTotal})</Typography >
        </div>
        <div>        
          <Button className='btn-cart' variant="contained" color="error" onClick={()=>emptyCart()}>Empty Cart</Button>
          <Button className='btn-cart' variant="contained" color="success" onClick={()=>emptyCart()}>Buy</Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;