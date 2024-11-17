// import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="app">
      {/* Main Content */}
      <div className="main-content">
        <div className='main-content-p'> 
        <h1>Explore our furniture & home furnishing range</h1>
        <p>
          <strong>IKEA is a global leader in life at home.</strong>
        </p>
        <p>
          Whether you just moved into a new home or looking to revamp your current one, we at IKEA are here to
          inspire you with affordable home furniture solutions. There is a piece of{" "}
          <a href="#">furniture</a> for every corner of your home. Create a home that is perfect for you.
        </p>
        <p>
          Shopping at IKEA is a bit different and exciting compared to your shopping at an everyday retail.
          It is about experiencing solutions firsthand and getting to know{" "}
          <a href="#">ideas</a> and inspirations that can fit perfectly into your home. That’s why we offer
          more than 7500 products, solutions at our store along with home furnishing ideas and services for you to explore.
        </p>
        <p>
          When you visit <a href="#">IKEA store</a>, make yourself at home in our many room settings in the
          store. Squeeze the upholsteries, feel the oriental rugs, try the <a href="#">sofa beds</a> and open
          the <a href="#">cabinets</a> to feel the quality. On the price tag, you’ll find all you need to
          know about a product, including where in the store you can pick it up.
        </p>
        <p>
          Since most IKEA furniture is flat-packed, they are quite easy to bring home when you buy from the
          store.
        </p>
        </div>
        {/* Categories */}
        <div className="categories">
          <a href="#">Sofas</a> | <a href="#">Beds</a> | <a href="#">Dining</a> | <a href="#">TV units</a> |{" "}
          <a href="#">Mattresses</a> | <a href="#">Seating</a> | <a href="#">Coffee tables</a> |{" "}
          <a href="#">Wardrobes</a> | <a href="#">Bookshelves</a> | <a href="#">Storage</a> |{" "}
          <a href="#">Shoe racks</a> | <a href="#">Decor</a> | <a href="#">Bathroom</a> |{" "}
          <a href="#">Textiles</a> | <a href="#">Pots & plants</a> | <a href="#">Home electronics</a> |{" "}
          <a href="#">Home improvement</a> | <a href="#">Lighting</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
            <div className='footer-section-part-1'>
          <h3>Join IKEA Family</h3>
          <p>
          Enjoy member-only discounts & offers, early access to IKEA sale, delicious food offers and much more. Join for free.​
          </p>
          <button>Join the club</button>
        </div>
        <div className="footer-section-part-2">
          <h3>IKEA Business Network</h3>
          <p>
          Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials and a lot more.
          </p>
          <button>Join now</button>
        </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>IKEA Family</h4>
            <ul>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Join IKEA Family</a></li>
              <li><a href="#">Member offers</a></li>
              <li><a href="#">Workshops & Events</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Delivery Service</a></li>
              <li><a href="#">Click & Collect</a></li>
              <li><a href="#">Personal Shopper</a></li>
              <li><a href="#">Assembly Service</a></li>
              <li><a href="#">Design your room</a></li>
              <li><a href="#">Measuring Service</a></li>
              <li><a href="#">Kitchen Planning</a></li>
              <li><a href="#">Installation Service</a></li>
              <li><a href="#">Track & manage your order</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Recycle Program</a></li>

            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="#">How to shop</a></li>
              <li><a href="#">Return policy</a></li>
              <li><a href="#">Prices and price tags</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Planners</a></li>
              <li><a href="#">Gift Card</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Terms and conditions</a></li>
            </ul>
          </div>
          <div>
            <h4>About IKEA</h4>
            <ul>
              <li><a href="#">This is IKEA</a></li>
              <li><a href="#">Careers at IKEA</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">IKEA Stores</a></li>
              <li><a href="#">IKEA Restaurant</a></li>
              <li><a href="#">IKEA for Business</a></li>
            </ul>
          </div>
        </div>
       
      </footer>
      <div className='footer-social-media'>
        <div className='social-media'>
        <a href=""><FaFacebook /></a>
        <a href=""><IoLogoInstagram /></a>
        <a href=""><FaXTwitter /></a>
        <a href=""><FaYoutube /></a>

        </div>
        <div className='language'>
        <a href=""> 🌐 IN | English</a>
        </div>
        </div>
    </div>
  );
}

export default Footer;
