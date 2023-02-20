import React from "react";

import logo from './../../wedrise.png';
import './../../App.css';

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";

import Link1 from '@mui/material/Link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { FaBeer } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        {/* <SNavbarBrand><img src={logo} className="App-logo" alt="logo" /></SNavbarBrand> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Toolbar>
          <img src={logo} className="1" alt="logo" />
          </Toolbar>
        
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          {/* <LoginButton>Login</LoginButton> */}
          <Link1 href="#" underline="none">
              <AiFillInstagram />
          </Link1>
        </RightNav>
         
          
      </NavContainer>
    </SNavbar>

    
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  // background-color: #a47b8a;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;
