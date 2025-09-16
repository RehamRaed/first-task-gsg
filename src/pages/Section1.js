import React from "react";
import "../styles/Section1.css";
const Section1 = () => {
  return (
    <>
      <section className="container">
        <div className="categories-bar">
          <button className="all-categories">
            <i
              className="bi bi-list"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
            All Categories
          </button>
          <div className="categories-links">
            <a href="#">Apple</a>
            <a href="#">Samsung</a>
            <a href="#">Meizu</a>
            <a href="#">Xiaomi</a>
            <a href="#">Honor</a>
            <a href="#">Huawei</a>
            <a href="#">Asus</a>
            <a href="#">Nokia</a>
            <a href="#">Motorola</a>
            <a href="#">Caterpiller</a>
          </div>
        </div>
      </section>
      <hr className="fancy-hr" />
    </>
  );
};

export default Section1;
