import React, { useEffect, useState } from "react";


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import './Film.css';
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import Card from '@mui/material/Card';

import { Helmet } from 'react-helmet';



function Film() {

  

  return (

   
    <>
      <Helmet>
        <title>Home Page - My Website</title>
        <meta
          name="description"
          content="description Welcome to our website. Find the latest products and news."
        />
        <meta
          name="keywords"
          content="keywords keyword1, keyword2, keyword3"
        />
      </Helmet>
      <Container fixed className="my-home-vid">
        <video className='videoTag' autoPlay loop muted>
              <source src={'https://www.wedrise.in/assets/img/aa12.mp4'} type='video/mp4' />
          </video>
      </Container>

      <Container maxWidth="sm" className='films'>
            <Grid item xs={12} md={4} className="film">
                <iframe className="iframe" src='https://www.youtube.com/embed/R_IlwGIV6Bw'
                    frameborder='0'
                    width="380"
                    height="100%"
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
          </Grid>
          
          <Grid item xs={12} md={4} className="film">
                <iframe className="iframe" src='https://www.youtube.com/embed/R_IlwGIV6Bw'
                    frameborder='0'
                    width="380"
                    height="100%"
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
          </Grid>
          
          <Grid item xs={12} md={4} className="film">
                <iframe className="iframe" src='https://www.youtube.com/embed/R_IlwGIV6Bw'
                    frameborder='0'
                    width="380"
                    height="100%"
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
          </Grid>
          
          <Grid item xs={12} md={4} className="film">
                <iframe className="iframe" src='https://www.youtube.com/embed/R_IlwGIV6Bw'
                    frameborder='0'
                    width="380"
                    height="100%"
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
          </Grid>
          
          <Grid item xs={12} md={4} className="film">
                <iframe className="iframe" src='https://www.youtube.com/embed/R_IlwGIV6Bw'
                    frameborder='0'
                    width="380"
                    height="100%"
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
          </Grid>
        </Container>
        <br></br>


      </>
  );
}

export default Film;
