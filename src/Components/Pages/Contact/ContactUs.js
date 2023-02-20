

import React, { useState, useEffect } from 'react'; 


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './ContactUs.css';

import getin from './../../../get-in.png';

// console.log(setisHeaderBackground);

function ContactUs() {
   


  return (
    <>
    <Container maxWidth="sm" className='getin-section'>
        <div className='getindiv'>
           <img src={getin} className="getin" alt="logo" />
        </div>
    </Container>

    <Container maxWidth="text-center">
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <h2 className='contact-h2'> 
            Every single human being is unique,
            <br></br>
            and we believe that every romantic story
            <br></br>
            needs a different yet timeless approach to begin with.
            <br></br>
            <br></br>
            Allow us to get to know you both better,
            <br></br>
            let’s connect and tell this story together!
        </h2>
        </Grid>
        </Grid>
    </Container>

    
    <Container maxWidth="text-center buttom-margin">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 className='contact-phone'> 
              +91 9742891407
              <br></br>
              hello@wedrise.in
            </h2>
          </Grid>
        </Grid>
    </Container>

    
    <Container maxWidth="sm" className='contact-form'>
        
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Phone" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Subject" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Message" variant="outlined" />
            </Grid>
            <Grid item xs={12} className="text-right">
                <Button variant="outlined">Send </Button>
            </Grid>
        </Grid>
    </Container>

    
    <Container maxWidth="text-center">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 className='contact-faq'> 
              FAQ
            </h2>
          </Grid>
        </Grid>
    </Container>
    </>
  );
}

export default ContactUs;
