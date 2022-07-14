import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";

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
      <div className="container" id="container"></div>
    </>
  );
};

export default Home;
