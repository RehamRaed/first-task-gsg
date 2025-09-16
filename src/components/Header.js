import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="contact-info">
            <span>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +(800)123 456 7890
            </span>
            <span>✉ manager@shop.com</span>
          </div>
          <div className="top-links">
            <a href="#">Location store</a>
            <a href="#">Blog</a>
            <a href="#">Guarantee</a>
            <a href="#">Payment</a>
            <a href="#">Delivery</a>
            <a href="#">Register or sign in</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container main-header">
        <h1 className="logo">
          you<span style={{ color: "black" }}>shop</span>
        </h1>
        <p>
          Description of your <br /> online store
        </p>

        <div className="search-box">
          <input type="text" placeholder="Search for products..." />
          <button className="button">
            {" "}
            <i
              className="bi bi-search"
              style={{ fontSize: "15px", color: "white" }}
            ></i>
          </button>
        </div>

        <div className="working-hours">
          <p>
            7 days a week from <br />
            8:00am to 5:00pm
          </p>
        </div>

        <div className="header-icons">
          <div className="fav">
            <i
              className="bi bi-heart"
              style={{ fontSize: "25px", color: "black" }}
            ></i>
            <div className="fav-num">13</div>
          </div>
          <div className="fav">
            <i
              className="bi bi-cart"
              style={{ fontSize: "25px", color: "black" }}
            ></i>
            <div className="fav-num">0</div>
          </div>
          <div className="cart-info">
            <h6>
              My Cart <br />
              0.00$
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
