import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import logo from './wedrise.png';
import './App.css';
import Navigation from "./Components/Navigation/Navigation"; // Navigation components
import Home from "./Components/Pages/Home/Home"; // Pages Home
import ContactUs from "./Components/Pages/Contact/ContactUs"; // Pages Contact us
import Stories from "./Components/Pages/Stories/Stories"; // Pages Stories
import Film from "./Components/Pages/Film/Film"; // Pages Films
import StoriesDetails from "./Components/Pages/StoriesDetails/StoriesDetails"; // Pages Stories Details

import Footer from "./Components/Footer/Footer"; // Footer components


import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import axios from 'axios';
import BASE_URL from './Config';


function App() {

    // const [isHeaderBackground, setisHeaderBackground] = useState(''); // new changes  01

    const apiUrl = BASE_URL;

    const [loading, setLoading] = useState(false);
    const [siteInfomyData, setsiteInfoData] = useState(false);
    
    useEffect(() => {
        fetchsiteInfoData(1);
    }, []);
    
    const fetchsiteInfoData = async (rowId) => {
      setLoading(true);
      try {
          const response = await axios.get(apiUrl + 'api/site-info', {
          headers: {
              'Content-Type': 'application/json',
          },
          });
          const fetchedData = response.data.data[0];
          setsiteInfoData(fetchedData);
          // setLoading(false);
      } catch (error) {
          console.error('Error fetching data:', error);
          // setLoading(false);
      }
    };

    return ( 
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element = {<Home siteInfoDtl={siteInfomyData}/> }/> 
            <Route path="/stories" element={<Stories siteInfoDtl={siteInfomyData}/>}/> 
            <Route path="/films" element={<Film siteInfoDtl={siteInfomyData}/>} /> 
            <Route path="/stories-details/:stories_link" element={<StoriesDetails siteInfoDtl={siteInfomyData}/>}/> 
            <Route path="/contact" element={<ContactUs siteInfoDtl={siteInfomyData}/>}/> 
        </Routes> 
        <Footer/>
    </Router>
    );
}

export default App;