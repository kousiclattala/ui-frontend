import React from "react";
import Box from "../assests/box.svg";
import "../css/home.css";

const Homepage = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="col col-6 left_1">
          <h1 className="h1_1">Looking good without leaving your house.</h1>
          <p className="p_1">
            Upbox is the easiest way to look your best without having to hunt
            for the perfect makeup combination. Our stylists curate the latest
            trends and send them directly to your door every month.
          </p>
          <button className="btn btn-outline-danger rounded-pill px-4 border-2 left_button">
            SIGN UP {">"}
          </button>
        </div>
        <div className="col col-6">
          <img src={Box} className="box" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
