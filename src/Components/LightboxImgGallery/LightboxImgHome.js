
import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './LightboxImgHome.css';
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";


var images = [
    {
      src:
        "https://www.wedrise.in/assets/img/instagram/15.jpg",
      title: "Ropy pahoehoe",
      description:
        "By Tari Noelani Mattox. Licensed under Public Domain via Commons"
    },
    {
      src:
        "https://www.wedrise.in/assets/img/instagram/15.jpg",
      title: "Pyroclastic flows at Mayon Volcano",
      description: "By C.G. Newhall. Licensed under Public Domain via Commons"
    },
    {
      src: "https://www.wedrise.in/assets/img/instagram/15.jpg",
      title: "Okataina",
      description: "By Richard Waitt. Licensed under Public Domain via Commons"
    },
    {
      src: "https://www.wedrise.in/assets/img/instagram/15.jpg",
      title: "Okataina",
      description: "By Richard Waitt. Licensed under Public Domain via Commons"
    },
    {
      src:
        "https://www.wedrise.in/assets/img/instagram/15.jpg",
      title: "Ropy pahoehoe",
      description:
        "By Tari Noelani Mattox. Licensed under Public Domain via Commons"
    },
    {
      src: "https://www.wedrise.in/assets/img/instagram/15.jpg",
      title: "Okataina",
      description: "By Richard Waitt. Licensed under Public Domain via Commons"
    }
  ];


function LightboxImgHome() {
  return (
    <>
     <Container >
          <div className="App">
          <Grid item xs={12} md={12}>
          <h2 className='text-center instagram heading'>INSTAGRAM</h2>
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
