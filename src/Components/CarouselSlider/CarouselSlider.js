

import React, { useState, useEffect } from 'react'; 

import Container from '@mui/material/Container';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


import './CarouselSlider.css';

import sli1 from './../../16.jpg';
import sli2 from './../../23.jpg';
import sli3 from './../../33.jpg';

function CarouselSlider() {
   
    var items = [
        {
            img: 'https://www.wedrise.in/assets/img/slider/2a.jpg',
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            // img: sli3,
            img: 'https://www.wedrise.in/assets/img/slider/11.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            // img: sli3,
            img: 'https://www.wedrise.in/assets/img/slider/DSC090411.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

  return (
    <>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </>
  );
}




function Item(props)
{
    return (
        <Paper>
            <img src={props.item.img} alt="slider" className='stories_slider' />
        </Paper>
    )
}

export default CarouselSlider;
