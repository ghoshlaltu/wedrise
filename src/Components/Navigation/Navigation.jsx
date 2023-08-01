
import React, { Component, useState, useEffect } from 'react'
import Navbar from "./Navbar";
import { routes } from "./constant";
import Drawer from "./Drawer";




// const ServicesCategories = useState(props.appBarbackground);

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const ServicesCategories = useState(props.appBarbackground);
  // console.log(1);
  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
      
    </>
  );
};

export default Navigation;
