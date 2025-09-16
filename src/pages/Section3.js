import React from "react";
import "../styles/Section3.css";

const Section3 = () => {
  return (
    <div className="most-search">
      <section className="container">
        <h4>Most Search Keywords</h4>
        <div className="keywords">
          <p>
            <strong>Laptops:</strong> Apple Laptop , Lenovo Laptop , Samsung
            Laptop, Dell Laptop , HP Laptop , Asus Laptop , Acer Laptop ,
            Microsoft Surface , MSI Laptop, Razer Blade
          </p>
          <p>
            <strong>Tablet:</strong> iPad Pro , Samsung Galaxy Tab , Lenovo Tab,
            Huawei MatePad , Microsoft Surface Go , Amazon Fire HD , Xiaomi Pad,
            Realme Pad , Alcatel Tablet
          </p>
          <p>
            <strong>Mobile phone:</strong> iPhone 15 Pro , Samsung Galaxy S24 ,
            OnePlus 12 , Google Pixel 9 , Xiaomi 14 Pro , Oppo Find X7 , Realme
            GT 6, Huawei P70 , Motorola Edge 50
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section3;
