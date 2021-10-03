import React from 'react';
import {Button, Typography, Card, CardActions, CardActionArea, CardContent,CardMedia } from '@mui/material/';
import { useCart } from 'react-use-cart';

const ItemCard = (props) => {
  const {addItem} = useCart();
  return (
    <Card sx={{ maxWidth: 400 }} className="itemCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success" variant="contained" onClick={()=>addItem(props.item)}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;