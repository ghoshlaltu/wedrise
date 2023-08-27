
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './LightboxImgHome.css';
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";


import axios from 'axios';
import BASE_URL from './../../Config';



function LightboxImgHome({ siteInfoDtl }) {


  const apiUrl = BASE_URL;

  const [loading, setLoading] = useState(false);
  const [siteInstagramData, setsiteInstagramData] = useState([]);
  
  useEffect(() => {
      fetchSiteInstagramDataDataData();
  }, []);
  
  const fetchSiteInstagramDataDataData = async () => {
    setLoading(true);
    try {
        const response = await axios.get(apiUrl + 'api/site-get-instagram-posts', {
        headers: {
            'Content-Type': 'application/json',
        },
        });
        const fetchedData = response.data.data;
        setsiteInstagramData(fetchedData);
        // setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
    }
  };

  

  var images = siteInstagramData.map(item => ({
    src: apiUrl+item.image,            // Use the image URL from the API response
    title: item.name,           // Use the name from the API response
    link: item.link,
    description: item.text.replace(/<\/?p>/g, "")
      
    
  }));
  return (
    <>
     <Container >
          <div className="App">
          <Grid item xs={12} md={12}>
          {/* <h2 className='text-center instagram heading'>INSTAGRAM</h2> */}
            <div class="section-title text-center ct">
                    <h3 class="films">{siteInfoDtl.text4}</h3>
            </div>
          </Grid >
            <Lightbox className="dddd" images={images} />
            {/* <Lightbox images={[
          this.state.interiorsPhotos.map((photo, index) => {
            {
              src: `../images/${photo}.jpg`      
            }
          })
        ]} /> */}
            </div>
      </Container>
    </>
  );
}

export default LightboxImgHome;
