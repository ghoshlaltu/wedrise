
import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './Testimonial.css';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonial() {
  return (
    <>
     <Container className='testimonial-section' fixed spacing={0} style={{ 
            backgroundImage: `url("https://www.wedrise.in/assets/img/home.jpg")` 
          }}>
          <Grid item xs={12} md={12} className=''>
                <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}

              style={{ 
                backgroundImage: `url("https://www.wedrise.in/assets/img/home.jpg")` 
              }}
            >
              {/* <div> */}
                {/* <img src="/images/shirley.png" /> */}
                <div className="myCarousel " >
                  <h3>Shirley Fultz</h3>
                  <h4>Designer</h4>
                  <p>
                  We planned to get married during the lockdown. Where our main photographer pulled out, Rabi agreed and helped us in capturing our most memorable day. The wedding was in my hometown, 400 kms from Bangalore, gentleman travelled during the most dangerous time. Thank you Wedrise team!
                  </p>
                </div>
              {/* </div> */}

              {/* <div> */}
                {/* <img src="/images/daniel.png" /> */}
                <div className="myCarousel">
                  <h3>Daniel Keystone</h3>
                  <h4>Designer</h4>
                  <p>
                  We planned to get married during the lockdown. Where our main photographer pulled out, Rabi agreed and helped us in capturing our most memorable day. The wedding was in my hometown, 400 kms from Bangalore, gentleman travelled during the most dangerous time. Thank you Wedrise team!
                  </p>
                </div>
              {/* </div> */}

              {/* <div> */}
                {/* <img src="/images/theo.png" /> */}
                <div className="myCarousel">
                  <h3>Theo Sorel</h3>
                  <h4>Designer</h4>
                  <p>
                  We planned to get married during the lockdown. Where our main photographer pulled out, Rabi agreed and helped us in capturing our most memorable day. The wedding was in my hometown, 400 kms from Bangalore, gentleman travelled during the most dangerous time. Thank you Wedrise team!
                  </p>
                </div>
              {/* </div> */}
            </Carousel>
          </Grid>
     
      </Container>
      </>
  );
}

export default Testimonial;
