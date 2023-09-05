import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import logo from "../css/logo.jpg"
import "../css/nav.css"
const Nav = () => {
  return (

<nav className="row navbar  navbar-expand-lg navbar-light bg-nav">
  <div className="row">
    <div className="col-1">
      <img src={logo} alt="logo" className="img-logo" />
    </div>
    <div className="col-10 d-flex justify-content-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-center">
          <li class="nav-item mx-4">
              <NavLink to="/" >Home</NavLink>
          </li>
          <li class="nav-item mx-4">
              <NavLink to="/" >Make UP</NavLink>
          </li>
          <li class="nav-item mx-4">
              <NavLink to="/" >Skin Care</NavLink>
          </li>
          <li class="nav-item mx-4">
              <NavLink to="/" >Hair Care</NavLink>
          </li>
          <li class="nav-item mx-4">
              <NavLink to="/" >Bath & Body</NavLink>
          </li>
          <li class="nav-item mx-4">
              <NavLink to="/" >Victoria's Secret</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-1">
      <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon className="icons-color"/>
      </IconButton>
      <IconButton aria-label="add to favorites">
        <ShoppingCartOutlinedIcon className="icons-color"/>
      </IconButton>
    </div>
  </div>
</nav>
  );
}
export default Nav;
