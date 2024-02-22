import coffeeImg from "../../assets/banner/coffee.png"

import "./banner.css"
const Banner = () => {
  return <div className="banner">
    <div className="desc-banner">
      <div className="coffeo"> COFFEO</div>
      <div className="description-container">
      <div className="description-title">An online coffee store</div>
      <div className="description">
      Straing to you doorstep. We dont roast our coffee beans until we have your order.
      Every order is roasted and shipped the same day.
      </div>
      <div className="explore-btn">
        Explore Our Products 
      </div>
      <div className="sales-description">
        <div className="product">
          <div className="title">Our Products</div>
          <div className="status">+1000</div>
        </div>

        <div className="total sales">
        <div className="title">Total Sales</div>
          <div className="status">+340K</div>
        </div>
      </div>
      </div>
    </div>
      <div className="img-container">
        <img className="coffee-img" src={coffeeImg} alt="" />
      </div>

  </div>;
};

export default Banner;
