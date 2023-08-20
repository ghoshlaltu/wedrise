import React, { useEffect, useState } from "react";


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import hello_there from './../../../hello_there.png';

import img1 from './../../../16.jpg';
import img2 from './../../../33.jpg';
import img3 from './../../../23.jpg';
import './Home.css';

// import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";

import { Helmet } from 'react-helmet';


import { AiFillInstagram } from "react-icons/ai";
import Link1 from '@mui/material/Link';


import Testimonial from "./../../Testimonial/Testimonial";
import LightboxImgHome from "./../../LightboxImgGallery/LightboxImgHome";

import axios from 'axios';
import BASE_URL from './../../../Config';


function Home() {

// const apiUrl = BASE_URL;

// const [loading, setLoading] = useState(false);
// const [siteInfomyData, setsiteInfoData] = useState(false);

// useEffect(() => {
//     fetchsiteInfoData(1);
// }, []);

// const fetchsiteInfoData = async (rowId) => {
//   setLoading(true);
//   try {
//       const response = await axios.get(apiUrl + 'api/site-info', {
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       });
//       const fetchedData = response.data.data[0];
//       setsiteInfoData(fetchedData);
//       // setLoading(false);
//   } catch (error) {
//       console.error('Error fetching data:', error);
//       // setLoading(false);
//   }
// };
//console.log(siteInfomyData);
  return (
    <>
      <Helmet>
        {/* <title>{siteInfomyData.mt1}</title>
        <meta
          name="description"
          content={siteInfomyData.md1}
        />
        <meta
          name="keywords"
          content={siteInfomyData.mc1}
        /> */}
        <title>Wedrise</title>
        <meta
          name="description"
          content="Wedrise"
        />
        <meta
          name="keywords"
          content="Wedrise"
        />
      </Helmet>
      <Container fixed className="my-home-vid">
        <video className='videoTag' autoPlay loop muted>
              <source src={'https://www.wedrise.in/assets/img/4aaa.mp4'} type='video/mp4' />
          </video>
      </Container>


      <Container maxWidth="sm">
      <img src={hello_there} className="hello_there" alt="logo" />
      </Container>

      
      <Container >
        <Grid container spacing={0} className="my-grid">
          <Grid item xs={12} md={12} >
          {/* <h2 className='text-center heading'>STORIES</h2> */}
              <div class="section-title text-center">
                    <h3 class="instagram">STORIES</h3>
                </div>
          </Grid>

          <Grid item xs={12} md={4} className="my-grid">
            <img src={img1} className="story_img" alt="logo" />
            <h3 className='text-center'> Hannah & Avneesh</h3>
          </Grid>

          <Grid item xs={12} md={4} className="my-grid">
            <img src={img2} className="story_img" alt="logo" />
            <h3 className='text-center'> Hannah & Avneesh</h3>
          </Grid>
          
          <Grid item xs={12} md={4} className="my-grid">
            <img src={img3} className="story_img" alt="logo" />
            <h3 className='text-center'> Hannah & Avneesh</h3>
          </Grid>
        </Grid>
      </Container>

      
      <Container className="filmssection">
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} >
          {/* <h2 className='text-center heading'>FILMS</h2> */}
            <div class="section-title text-center">
                    <h3 class="films">FILMS</h3>
            </div>
          </Grid>

          <Grid item xs={12} md={4} className="">
          <iframe className="iframe" src='https://www.youtube.com/embed/R_IlwGIV6Bw'
                    frameborder='0'
                    width="380"
                    height="100%"
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
            />
            <h3 className='text-center'> Hannah & Avneesh </h3>
          </Grid>

          <Grid item xs={12} md={4}>
            <iframe className="iframe" src='https://www.youtube.com/embed/EJaGewaTaxM'
                      frameborder='0'
                      width="380"
                      height="100%"
                      allow='autoplay; encrypted-media'
                      allowfullscreen
                      title='video'
              />
            <h3 className='text-center'> Hannah & Avneesh</h3>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <iframe className="iframe"  src='https://www.youtube.com/embed/dBR0fdStegM'
                      frameborder='0'
                      width="380"
                      height="100%"
                      allow='autoplay; encrypted-media'
                      allowfullscreen
                      title='video'
              />
            <h3 className='text-center'> Hannah & Avneesh</h3>
          </Grid>
        </Grid>
      </Container>


      
      <LightboxImgHome />  {/* include Lightbox Img Home */}
         



      <Container fixed spacing={3}   className="my-home-vid2">
        <video className='vid1 ' autoPlay loop muted>
              <source className='vid1' src={'https://www.wedrise.in/assets/img/home-video.mp4'} type='video/mp4' />
          </video>
      </Container>


       <Testimonial/>   {/* include Testimonial */}
       

      </>
  );
}

export default Home;
