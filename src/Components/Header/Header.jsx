// src/components/TopNavbar.jsx
// import React from 'react';
import './Header.css'

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="top-navbar-left">
        <span>🌐 IN | English</span>
      </div>
      <div className="top-navbar-center">
        <span>50% off on delivery services. T&C apply.</span>
      </div>
      <div className="top-navbar-right">
        <span>Enter postal code | Select store</span>
      </div>
    </div>
  );
};

export default TopNavbar;
