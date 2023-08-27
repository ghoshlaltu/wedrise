

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

import Textarea from '@mui/joy/Textarea';


import './ContactUs.css';

import getin from './../../../get-in.png';

import axios from 'axios';
import BASE_URL from './../../../Config';
// console.log(setisHeaderBackground);

function ContactUs({ siteInfoDtl }) {
   
  const apiUrl = BASE_URL;
  const [loading, setLoading] = useState(false);
  const [siteFaqData, setsiteFaqData] = useState([]);

  useEffect(() => {
    //console.log(data);
    fetchsiteFaqData();
  }, []);

  const fetchsiteFaqData = async () => {
    setLoading(true);
    try {
        const response = await axios.get(apiUrl + 'api/site-get-faqs/', {
        headers: {
            'Content-Type': 'application/json',
        },
        });
        const fetchedData = response.data.data;
        setsiteFaqData(fetchedData);
        // setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
    }
  };
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
        <h2 className='contact-h2' dangerouslySetInnerHTML={{ __html: siteInfoDtl.text1 }} />

        {/* <h2 className='contact-h2'>  */}
            {/* {siteInfoDtl.text1} */}
            {/* Every single human being is unique,
            <br></br>
            and we believe that every romantic story
            <br></br>
            needs a different yet timeless approach to begin with.
            <br></br>
            <br></br>
            Allow us to get to know you both better,
            <br></br>
            let’s connect and tell this story together! */}
        {/* </h2> */}
        </Grid>
        </Grid>
    </Container>

    
    <Container maxWidth="text-center buttom-margin">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 className='contact-phone'> 
              {siteInfoDtl.phone}
              <br></br>
              {siteInfoDtl.email}
            </h2>
          </Grid>
        </Grid>
    </Container>

    
    <Container maxWidth="sm" className='contact-form' >
        
        <Grid container spacing={0} >
            <Grid item xs={12} lg={6} className='my-form-Grid'>
                <TextField className='my-form-TextField ccc' id="outlined-basic" label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} lg={6} className='my-form-Grid'>
                <TextField className='my-form-TextField ccc' id="outlined-basic" label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} lg={6} className='my-form-Grid'>
                <TextField className='my-form-TextField ccc' id="outlined-basic" label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} lg={6} className='my-form-Grid'>
                <TextField className='my-form-TextField ccc' id="outlined-basic" label="Phone" variant="outlined" />
            </Grid>
            <Grid item xs={12} lg={12} className='my-form-Grid ccc'>
                <TextField className='my-form-TextField ccc' id="outlined-basic" label="Subject" variant="outlined" />
            </Grid>
            <Grid item xs={12} lg={12} className='my-form-Grid'>
              {/* <TextField className='my-form-TextField' id="outlined-basic" label="Message" variant="outlined" /> */}
              <Textarea className="ccc"
                placeholder="Type in here…"
                defaultValue=""
                minRows={2}
                maxRows={4}
                />
            </Grid>
            <Grid item xs={12} className="text-right my-form-Grid">
                <Button variant="outlined" className='sendbutton'>Send </Button>
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


    <Container maxWidth="xl" className='accor'>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}  className="girdaccordion">
          
          {siteFaqData.map((faq, index) => (
               (faq.cat === 'Left') ? <Accordion>
               <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                 <Typography className='TypographyTitle'>{faq.title}</Typography>
               </AccordionSummary>
               <AccordionDetails className='ddsssssssssssssssssss'>
                 <Typography>

                  <p dangerouslySetInnerHTML={{ __html: faq.text }}></p>
                 {/* Most of the budgeting depend upon the size and type of the wedding. Each wedding budget is customisable starting from INR 1.5-2L per day. We take into consideration a lot of factors including your story, personality and how much of the wedding you want to remember. The cost also depends upon the size of crew. Write to us and we'll do our best to make it work for you.
                 <br></br>
                 <br></br> */}
                 </Typography>
               </AccordionDetails>
             </Accordion> : "" 
          ))}
             {/* <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='TypographyTitle'>How much do you charge & payment terms?</Typography>
              </AccordionSummary>
              <AccordionDetails className='ddsssssssssssssssssss'>
                <Typography>
                Most of the budgeting depend upon the size and type of the wedding. Each wedding budget is customisable starting from INR 1.5-2L per day. We take into consideration a lot of factors including your story, personality and how much of the wedding you want to remember. The cost also depends upon the size of crew. Write to us and we'll do our best to make it work for you.
                <br></br>
                <br></br>
                We take 50% advance booking amount at the time of booking, rest 50% on the event date.
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className='TypographyTitle'>What are your deliverables?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                PHOTOS
                <br></br>
                <br></br>
                1. Online gallery of 800-1000 (no strict limit on the number) images for a usual 2-day wedding.
                <br></br>
                2. A hardbound flush-mount premium wedding album at an additional cost of INR 20,000 (40 sheets and approx 150+ odd photos)
                <br></br>
                3. You will get a glimpse of your wedding in 10-15  days of your wedding. A complete set of images will be delivered in 6-8 weeks of your wedding.
                <br></br>
                <br></br>
                FILMS
                <br></br>
                <br></br>
                1. A 1-3 mins cinematic teaser.
                <br></br>
                2. A complete highlight film of 10-15 mins for a usual 2-day wedding.

                <br></br>
                3. Along with that we give separate full videos for performances/interviews etc on special prior request.

                <br></br>
                4. Every film is custom-made, it goes through many iterations before the final delivery. So that it appeals to you and can be watched again and again. Usually, it takes 1-3 months to deliver, it’s completely based on our work schedule.
                <br></br>
                <br></br>

                In the end, you will get a pen-drive delivered at your doorstep containing all the HD images and videos. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className='TypographyTitle'>Where are you based and how far can you travel?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                We are based in Bangalore. We can travel anywhere across the globe to cover your story, you just need to take care of our travel and stay.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
        </Grid>



        <Grid item xs={12} lg={6}  className="girdaccordion">
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='TypographyTitle'>Do you shoot only weddings?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                We mainly shoot weddings & family events but apart from that we also colaborate with verious artists and companies.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className='TypographyTitle'>How big is the team?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                The size of team is depending on individual requirements. A team of 4 is good enough to capture a entire wedding but can also get a bigger team if needed.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className='TypographyTitle'>How early do I book you?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Since we take limited wedding each year, we suggest you book us as early as possible. You can block your dates as soon as 3-6 months from your wedding.
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Grid>
       
      </Grid>
      
    </Container>
    </>
  );
}

export default ContactUs;
