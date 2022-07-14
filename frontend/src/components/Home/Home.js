import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction.js";


const Home = () => {
const dispatch = useDispatch();
const {loding,error,products,productCount}=useSelector((state)=>state.products);

console.log(products)
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      <MetaData title="ECCOMERSE" />
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
        {
          products && products.map(product=> (
             <Product key={product._id} product={product}/>
          ))
        }
      </div>
    </>
  );
};

export default Home;
