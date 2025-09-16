import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h4>Contact us</h4>
         <div>
  <p><i className="bi bi-telephone-fill" style={{ color: 'white', fontSize: '15px' }}></i> (+800) 123 456 7890</p>
  <p><i className="bi bi-envelope-fill" style={{ color: 'white', fontSize: '15px' }}></i> manager@shop.com</p>
  <p><i className="bi bi-geo-alt-fill" style={{ color: 'white', fontSize: '15px' }}></i> Location store</p>
</div>

        </div>

        <div className="footer-section">
          <h4>Policies & Info</h4>
          <p>Terms & Conditions</p>
          <p>Policy for Sellers</p>
          <p>Shipping & Refund</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <p>Seller Login</p>
          <p>Seller Sign up</p>
          <p>Seller Control</p>
        </div>

        <div className="footer-section">
          <h4>My account</h4>
          <p>Accessories</p>
          <p>Balcony Tables</p>
          <p>Beds</p>
        </div>

        <div className="footer-section">
          <h4>Subscribe now</h4>
          <input type="email" placeholder="Your Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;