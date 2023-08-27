
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactAudioPlayer from 'react-audio-player';

import 'font-awesome/css/font-awesome.min.css';
import './StoriesDetails.css';

import background from './../../../23.jpg';
import background1 from './../../../16.jpg';
import audio from './../../../audio.mp3';

import TextField from '@mui/material/TextField';
// import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

import axios from 'axios';
import BASE_URL from './../../../Config';

function StoriesDetails() {
    
    const apiUrl = BASE_URL;
    const [loading, setLoading] = useState(false);
    const [siteHomeStoryDetailsData, setsiteHomeStoryDetailsData] = useState([]);
    const [siteHomeStoryDetailsDataPost, setsiteHomeStoryDetailsDataPost] = useState([]);


    const shareURL = 'https://www.wedrise.in/stories/2021-12-30-Hannah-x-Avneesh';
    const { stories_link } = useParams();

    useEffect(() => {
        //console.log(data);
        fetchData();
      }, []);
    
    

    const fetchData = async (rowId) => {
        setLoading(true);
        try {
            const response = await axios.get(apiUrl + 'api/site-get-storit-details/'+stories_link, {
            headers: {
                'Content-Type': 'application/json',
            },
            });
            const fetchedData = response.data.data[0];
            setsiteHomeStoryDetailsData(fetchedData);
            setsiteHomeStoryDetailsDataPost(fetchedData.stories_posts);
            // setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setLoading(false);
        }
      };

   //console.log(siteHomeStoryDetailsDataPost);
  return (
    <>
       <Card className="">
       <img src={apiUrl+siteHomeStoryDetailsData.image} className="background" alt="logo" />
       </Card>
        <br></br>
        <Container maxWidth="sm" className=''>

            <div className="grid-portfolio fix-portfolio">
                <h1 className="text-dark text-center">{siteHomeStoryDetailsData.name}</h1>
                <div className="meta text-center sizedate"><span className="text-stories-date">
                {new Date(siteHomeStoryDetailsData.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}   </span>

                </div>
                <div className="section-title1 text-center">
                    <p className="hemop" dangerouslySetInnerHTML={{ __html: siteHomeStoryDetailsData.text }}>
                        
                        {/* {siteHomeStoryDetailsData.text} */}

                    
                    {/* I promise to Love you through the good times and bad <br></br>
                    I’ll Love you when I’m angry, hurt and mad <br></br>
                    Love is a choice I’ve made to devote my life <br></br>
                    To making you, my world, my wife <br></br>
                    Nothing will ever change that choice that I’ve made <br></br>
                    Even when we feel our Love start to fade <br></br>
                    It’s inside my soul, and nothing can shake <br></br>
                    My Love for you, that’s a promise I won’t break <br></br>
                    — Sean Short */}
                    </p>
                </div>
            </div>
        </Container>

        <Container maxWidth="sm" className='audio'>
            <Card sx={{ maxWidth: 750 }} className="">
            <ReactAudioPlayer
                src={apiUrl+siteHomeStoryDetailsData.mp3_file}
                autoPlay
                controls
                />
            </Card>
        </Container>


        <Container  maxWidth="sm" className="backkkk defsult-padding">
            {siteHomeStoryDetailsDataPost.map((StoryPost, index) => (
            <img src={apiUrl+StoryPost.image} className="background" alt="IMG" />
            ))}
            {/* <img src={background1} className="background" alt="IMG" />
            <img src={background} className="background" alt="IMG" />
            <img src={background1} className="background" alt="IMG" />
            <img src={background} className="background" alt="IMG" />
            <img src={background1} className="background" alt="IMG" />
            <img src={background} className="background" alt="IMG" /> */}
        </Container>
        
    {/* <Container  maxWidth="sm" className="backkkk  defsult-padding">
        <Grid container spacing={0} >
            <Grid item xs={12} lg={12} className='my-form-Grid'>
                <TextField className='my-form-TextField ccc' id="outlined-basic" label="First Name" variant="outlined" />
            </Grid>
           
            <Grid item xs={12} lg={12} className='my-form-Grid'>
            <Textarea className="ccc"
                placeholder="Type in here…"
                defaultValue=""
                minRows={2}
                maxRows={4}
                />

            </Grid>
            <Grid item xs={12} lg={12} className='my-form-Grid'>
                <Button variant="outlined" className='submit-strory-comments'>Submit </Button>
            </Grid>
        </Grid>
    </Container> */}

    {/* <Container  maxWidth="lg" className="defsult-padding1">
        <Grid container spacing={0} >
        <div className="text-center social1">
            <ul className="social_list" style={{ padding: 0 }}>
                
                <li>
                <a
                    target="_blank"
                    href={`https://api.whatsapp.com/send?text=${shareURL}`}
                >
                    <FaWhatsapp />
                </a>
                </li>
                <li>
                <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer.php?u=${shareURL}`}
                >
                    <FaFacebook />
                </a>
                </li>
                <li>
                <a
                    target="_blank"
                    href={`http://twitter.com/share?url=${shareURL}`}
                >
                    <FaTwitter />
                </a>
                </li>
            
                <li>
                <a
                    href={`https://www.instagram.com/?url=${shareURL}`}
                    target="_blank"
                    rel="noopener"
                >
                    <FaInstagram />
                </a>
                </li>
            </ul>
            </div>
        </Grid>
    </Container> */}
    </>
  );
}




export default StoriesDetails;
