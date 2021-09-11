import React from "react";
import Img1 from "../assests/social-img-1.svg";
import Img2 from "../assests/social-img-2.svg";
import Img3 from "../assests/social-img-3.svg";
import Img4 from "../assests/social-img-4.svg";
import "../css/social.css";

const Socialpage = () => {
  return (
    <div className="social social-bg container container-fluid">
      <div className="row">
        <p className="heading1">Social Posts</p>
        <div className="col">
          <img src={Img1} className="img1" />
          <p className="txt1">How to rock the lip look that turns heads</p>
        </div>
        <div className="col ">
          <img src={Img2} className="img2" />
          <p className="txt2">Find the perfect shade for the season</p>
        </div>
        <div className="col">
          <img src={Img3} className="img3" />
          <p className="txt3">The 5 eye shadow secrets you never knew</p>
        </div>
        <div className="col">
          <img src={Img4} className="img4" />
          <p className="txt4">The pro-tips for at home hair dying</p>
        </div>
        <div className="btn_block">
          <button className="btn1">FOLLOW US ON INSTAGRAM</button>
        </div>
      </div>
    </div>
  );
};

export default Socialpage;
