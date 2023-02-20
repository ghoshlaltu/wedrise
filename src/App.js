import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import logo from './wedrise.png';
import './App.css';
import Navigation from "./Components/Navigation/Navigation"; // Navigation components
import Home from "./Components/Pages/Home/Home"; // Pages Home
import ContactUs from "./Components/Pages/Contact/ContactUs"; // Pages Contact us
import Footer from "./Components/Footer/Footer"; // Footer components


import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";



function App() {

    // const [isHeaderBackground, setisHeaderBackground] = useState(''); // new changes  01

    return ( <
        Router >
        <
        Navigation / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/contact"
        element = { < ContactUs / > }
        /> < /
        Routes > <
        Footer / >
        <
        /Router>
    );
}

export default App;