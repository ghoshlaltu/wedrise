import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './Testimonial.css';



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';
import BASE_URL from './../../Config';

function Testimonial({ siteInfoDtl }) {

    const apiUrl = BASE_URL;

    const [loading, setLoading] = useState(false);
    const [siteTestimonialsData, setsiteTestimonialsData] = useState([]);
    
    useEffect(() => {
        fetchsiteTestimonialsDataData();
    }, []);
    
    const fetchsiteTestimonialsDataData = async () => {
      setLoading(true);
      try {
          const response = await axios.get(apiUrl + 'api/site-get-testimonials', {
          headers: {
              'Content-Type': 'application/json',
          },
          });
          const fetchedData = response.data.data;
          setsiteTestimonialsData(fetchedData);
          // setLoading(false);
      } catch (error) {
          console.error('Error fetching data:', error);
          // setLoading(false);
      }
    };

  console.log(siteTestimonialsData);
  return (
    <>
    <div className='testi'>
     <Container className='testimonial-section' fixed spacing={0} >
            
             <Grid item xs={12} md={4}>
              {/* <h2 className='text-center ct'>CUSTOMER TESTIMONIALS</h2> */}
              <div class="section-title text-center">
                    <h3 class="films ct">{siteInfoDtl.text5}</h3>
            </div>
             </Grid>
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
               {/* Dynamic Testimonials */}
               {siteTestimonialsData.map((testimonial, index) => (
                <div className="myCarousel" key={index}>
                  <h4 className='text-white testi-person'>{testimonial.name}</h4>
                  <p className='text-white'>{testimonial.text}</p>
                </div>
              ))}
            </Carousel>
          </Grid>
     
      </Container>
      </div>
      </>
  );
}

export default Testimonial;
