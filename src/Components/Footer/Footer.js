
import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './Footer.css';

import "react-lightbox-component/build/css/index.css";

import { AiFillInstagram } from "react-icons/ai";
import Link1 from '@mui/material/Link';

function Footer() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} class="footer-Container f-pad">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
            <p class="pull-center footer">All content Copyright © 2023 <a href="https://www.wedrise.in/">WEDRISE.IN</a></p>
        </Grid>
        <Grid item xs={12} md={4} className="f-instagram instagramlink">
          <Link1 href="#" underline="none" >
                <AiFillInstagram />
            </Link1>
        </Grid>
      </Grid>
    </Box>
      </>
  );
}

export default Footer;
