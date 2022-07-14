import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import Product from './Product.js'
import "./Home.css";

const product={
  name:"Blue Tshirt",
  images:[{url:"https://i.ibb.co/DRST11n/1.wepp"}],
  price:"$3000",
  "_id":"naimur"
}


const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Wellcome to Ecommerse</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            scroll
            <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
      </div>
    </>
  );
};

export default Home;
