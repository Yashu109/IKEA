// src/components/Navbar.jsx
// import React from 'react';
import './Banner.css'
import { FaCamera } from 'react-icons/fa';
import { BsMinecart } from "react-icons/bs"; // Using FontAwesome icon for the camera
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* IKEA Logo */}
      <div className="navbar-logo">
        <img 
          src="/src/assets/ikea.svg" 
          alt="IKEA Logo" 
        />
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="What are you looking for?" />
        <FaCamera className="camera-icon" />
      </div>

      {/* Right Side Options */}
      <div className="navbar-right">
        <span><FiUser /> Hej! Log in</span>
        <span><FaRegHeart />
        </span>
        {/* <span>❤️</span> Placeholder for wishlist icon */}
        {/* <span>🛒</span> Placeholder for wishlist icon */}
         
        <span><BsMinecart /></span> {/* Placeholder for cart icon */}
      </div>
    </div>
  );
};

export default Navbar;
