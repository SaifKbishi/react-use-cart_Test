import React from 'react';
import ItemCard from './ItemCard'
import {Typography, Container } from '@mui/material/';
import data from '../data';
import './Home.css';

function Home(props) {
  console.log(data.productData)
  return (
    <>
      <Typography variant="h2" className="text-center">All Items</Typography >
      <section className='container'>
        <div className='itemsRow'>
        <Container maxWidth="sm" maxWidth="sm" sx={{display: 'flex', flexDirection: 'row' }}>
        {data.productData.map((item, index)=>{
          return(
            <ItemCard  key={index} img={item.img} title={item.title} desc={item.desc} price={item.price} item={item}/> //Note item itself is passed as props
          )
        })          
        }
        </Container >
        </div>
      </section>
    </>
  );
}

export default Home;


//rsf   
