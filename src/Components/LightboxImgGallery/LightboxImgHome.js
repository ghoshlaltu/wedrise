
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
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Ropy_pahoehoe.jpg",
      title: "Ropy pahoehoe",
      description:
        "By Tari Noelani Mattox. Licensed under Public Domain via Commons"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg",
      title: "Pyroclastic flows at Mayon Volcano",
      description: "By C.G. Newhall. Licensed under Public Domain via Commons"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg",
      title: "Okataina",
      description: "By Richard Waitt. Licensed under Public Domain via Commons"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg",
      title: "Okataina",
      description: "By Richard Waitt. Licensed under Public Domain via Commons"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Ropy_pahoehoe.jpg",
      title: "Ropy pahoehoe",
      description:
        "By Tari Noelani Mattox. Licensed under Public Domain via Commons"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg",
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
          </Grid>
            <Lightbox images={images} />
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
