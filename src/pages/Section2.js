import "../styles/Section2.css";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import stars from "../assets/stars.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

const Section2 = () => {
  const products = [
    { id: 1, title: "Lenovo Tab P11 2da Gen", price: 100, img: product1 },
    { id: 2, title: "Soporte para Tableta", price: 120, img: product2 },
    {
      id: 3,
      title: "Lenovo’s ThinkPad X12 Detachable",
      price: 130,
      img: product3,
    },
    { id: 4, title: "Macbook Air Keyboard Cover", price: 150, img: product4 },
    {
      id: 5,
      title: "HONOR Pad 8 12-inch Wi-Fi Tablet ",
      price: 100,
      img: product5,
    },
    {
      id: 6,
      title: "IdeaPad Duet 3 Chromebook Laptop",
      price: 120,
      img: product6,
    },
    { id: 7, title: "JETech Tablet Stand", price: 130, img: product7 },
    {
      id: 8,
      title: "Funda para portátil de 13 a 16 pulgadas",
      price: 150,
      img: product8,
    },
    {
      id: 9,
      title: "Estojo SEYMAC para MacBook Air 15",
      price: 100,
      img: product9,
    },
    {
      id: 10,
      title: "HoYiXi Housse Universel pour 9-11 Pouces",
      price: 120,
      img: product10,
    },
    {
      id: 11,
      title: "iPad Pro Air With Touchpad IPK03",
      price: 130,
      img: product11,
    },
    {
      id: 12,
      title: "MoKo for iPad Air 6th Generation",
      price: 150,
      img: product12,
    },
    {
      id: 13,
      title: "HONOR Pad 8 12-inch Wi-Fi Tablet ",
      price: 100,
      img: product5,
    },
    {
      id: 14,
      title: "IdeaPad Duet 3 Chromebook Laptop",
      price: 120,
      img: product6,
    },
    { id: 15, title: "JETech Tablet Stand", price: 130, img: product7 },
    {
      id: 16,
      title: "Funda para portátil de 13 a 16 pulgadas",
      price: 150,
      img: product8,
    },
  ];

  const recentlyViewed = products.slice(0, 4);

  return (
    <div className="container section2-container">
      <div className=" types">
        <a href="#">Home</a>/<a href="#">Categories</a>/
        <a href="#">Tablet & Laptops Acceccories</a>
      </div>
      <h3 className="type">Tablet & Laptops Acceccories</h3>

      <div className="results">
        <aside className="sidebar">
          <div className="sidebar-sec">
            <h5 style={{ marginTop: "20px" }}>
              <img src={arrow1} alt="arrow" width={20} />
              Related Categories
            </h5>
            <div className="related-category">
              <h6>&gt; Categories</h6>
              <h6 style={{ color: "rgb(122, 122, 122)" }}>
                Tablet & Laptops Acceccories
              </h6>
            </div>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow1} alt="arrow" width={20} />
              Defined By
            </h5>
            <div style={{ margin: "0 22px" }}>
              <div className="defined-box">
                <h6>Android 6.0</h6>
                <h6>×</h6>
              </div>
              <h6
                style={{
                  color: "#ff9538",
                  marginTop: "10px",
                  textAlign: "end",
                }}
              >
                Clear ALL
              </h6>
            </div>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow1} alt="arrow" width={20} />
              Price
            </h5>
            <div style={{ margin: "0 22px" }}>
              <div className="custom-divider">
                <span className="line grey"></span>
                <span className="circle"></span>
                <span className="line orange"></span>
                <span className="circle"></span>
                <span className="line grey"></span>
              </div>
              <h6>
                <span style={{ color: "rgb(122, 122, 122)" }}>Price: </span>55$
                - 500$
              </h6>
            </div>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow1} alt="arrow" width={20} />
              Operating System
            </h5>
            <div className="systems" style={{ margin: "0 22px" }}>
              <h6 style={{ color: "#ff9538" }}>Android 6.0</h6>
              <h6>Android 5.1</h6>
              <h6>Android 5.0</h6>
              <h6>Android 4.8</h6>
            </div>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow1} alt="arrow" width={20} />
              Screen Size
            </h5>
            <div className="screen-box" style={{ margin: "0 22px" }}>
              <h6>1920×1200</h6>
              <h6>1280×800</h6>
              <h6>2560×1600</h6>
              <h6>1920×1080</h6>
              <h6>2048×1536</h6>
              <h6>1920×1280</h6>
              <h6>1024×800</h6>
            </div>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow2} alt="arrow" width={20} />
              Processor Core
            </h5>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow2} alt="arrow" width={20} />
              Tablet Data Capacity
            </h5>
          </div>
          <hr />
          <div className="sidebar-sec">
            <h5>
              <img src={arrow2} alt="arrow" width={20} />
              Processor Core
            </h5>
          </div>
          <hr />
          <div className="sidebar-sec" style={{ paddingBottom: "5px" }}>
            <h5>
              <img src={arrow2} alt="arrow" width={20} />
              Tablet Data Capacity
            </h5>
          </div>
        </aside>

        <main className="main-content">
          <div className="main-content1 d-flex justify-content-between mb-3">
            <div className="show">
              <i
                className="bi bi-list"
                style={{ color: "black", fontSize: "20px" }}
              ></i>
              showing 16 / 60 results
            </div>
            <div className="sort">
              sort by : price low to high
              <img src={arrow1} width="20" alt="arrow" />
            </div>
          </div>

          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 d-flex flex-column text-center product-card">
                  <div className="card-img-container">
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <img
                      className="card-icon"
                      src={stars}
                      alt="star"
                      width="80"
                    />
                    <h6 className="card-title">{product.title}</h6>
                    <div className="card-bottom d-flex justify-content-between align-items-center">
                      <p className="card-text">{product.price}$</p>
                      <div className="card-buttons d-flex gap-2">
                        <button className="card-btn">
                          <i
                            className="bi bi-cart-fill"
                            style={{ fontsize: "20px", color: "black" }}
                          ></i>
                        </button>
                        <button className="card-btn">
                          <i
                            className="bi bi-heart-fill"
                            style={{ fontsize: "20px", color: "red" }}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="show-btn w-100">show more</button>

          <nav aria-label="Page navigation example" className="mt-3">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>

          <h5 style={{ fontWeight: 600, marginBottom: "16px" }}>
            Recently Viewed
          </h5>

          <div className="row">
            {recentlyViewed.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 d-flex flex-column text-center product-card">
                  <div className="card-img-container">
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <img
                      className="card-icon"
                      src={stars}
                      alt="stars"
                      width="80"
                    />
                    <h6 className="card-title">{product.title}</h6>
                    <div className="card-bottom d-flex justify-content-between align-items-center">
                      <p className="card-text">{product.price}$</p>
                      <div className="card-buttons d-flex gap-2">
                        <button className="card-btn">
                          <i
                            className="bi bi-cart-fill"
                            style={{ fontsize: "20px", color: "black" }}
                          ></i>
                        </button>
                        <button className="card-btn">
                          <i
                            className="bi bi-heart-fill"
                            style={{ fontsize: "20px", color: "red" }}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Section2;
