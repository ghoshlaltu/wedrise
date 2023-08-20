

import React, { useState, useEffect } from 'react'; 

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HashLink as Link } from 'react-router-hash-link';

import CarouselSlider from "./../../CarouselSlider/CarouselSlider"; // Pages Carousel Slider component

import './Stories.css';

import img1 from './../../../16.jpg';
import InfiniteScroll from 'react-infinite-scroll-component';

function Stories() {
   
   

  return (
    <>
        <CarouselSlider/>


        <Container maxWidth="sm" className='sto'>
            <Card sx={{ maxWidth: 750 }} className="sto_back">
                <CardMedia
                    sx={{ height: 300 }}
                    image='https://www.wedrise.in/assets/img/stories/sfdss.jpg'
                    title="Hannah x Avneesh"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='h5'>
                    Hannah x Avneesh
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" className='p'>
                    December-30, 2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='story-p'>
                    I am yours as the summer air at evening is Possessed by the scent of linden blossoms, As the snowcap gleams with light Lent it by the brimming moon. Without you I’d be an unleafed tree Blasted in a bleakness with no Spring. Your love is the weather of my
                    
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/stories-details"> <Button size="small" className='story-dtl more'>CONTINUE READING</Button></Link>
                </CardActions>
            </Card>
            <br></br>
            
            <Card sx={{ maxWidth: 750 }}  className="sto_back">
                <CardMedia
                    sx={{ height: 300 }}
                    image='https://www.wedrise.in/assets/img/stories/Untitled-1_c.jpg'
                    title="Hannah x Avneesh"
                />
               <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='h5'>
                    Hannah x Avneesh
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" className='p'>
                    December-30, 2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='story-p'>
                    I am yours as the summer air at evening is Possessed by the scent of linden blossoms, As the snowcap gleams with light Lent it by the brimming moon. Without you I’d be an unleafed tree Blasted in a bleakness with no Spring. Your love is the weather of my
                    
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/stories-details"> <Button size="small" className='story-dtl more'>CONTINUE READING</Button></Link>
                </CardActions>
            </Card>
            <br></br>
            
            <Card sx={{ maxWidth: 750 }}  className="sto_back">
                <CardMedia
                    sx={{ height: 300 }}
                    image='https://www.wedrise.in/assets/img/stories/Untitled-1_copy1.jpg'
                    title="Hannah x Avneesh"
                />
               <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='h5'>
                    Hannah x Avneesh
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" className='p'>
                    December-30, 2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='story-p'>
                    I am yours as the summer air at evening is Possessed by the scent of linden blossoms, As the snowcap gleams with light Lent it by the brimming moon. Without you I’d be an unleafed tree Blasted in a bleakness with no Spring. Your love is the weather of my
                    
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/stories-details"> <Button size="small" className='story-dtl more'>CONTINUE READING</Button></Link>
                </CardActions>
            </Card>
            <br></br>
            <Card sx={{ maxWidth: 750 }}  className="sto_back">
                <CardMedia
                    sx={{ height: 300 }}
                    image='https://www.wedrise.in/assets/img/stories/Untitled-1_copy.jpg'
                    title="Hannah x Avneesh"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='h5'>
                    Hannah x Avneesh
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" className='p'>
                    December-30, 2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='story-p'>
                    I am yours as the summer air at evening is Possessed by the scent of linden blossoms, As the snowcap gleams with light Lent it by the brimming moon. Without you I’d be an unleafed tree Blasted in a bleakness with no Spring. Your love is the weather of my
                    
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/stories-details"> <Button size="small" className='story-dtl more'>CONTINUE READING</Button></Link>
                </CardActions>
            </Card>
            <br></br>
        </Container>
    </>
  );
}




export default Stories;
