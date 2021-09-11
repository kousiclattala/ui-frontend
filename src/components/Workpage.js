import React from "react";
import Work1 from "../assests/work-1.svg";
import Work2 from "../assests/work-2.svg";
import Work3 from "../assests/work-3.svg";
import Underline from "../assests/underline.svg";
import "../css/work.css";

const Workpage = () => {
  return (
    <div className="work container container-fluid">
      <p className="heading">
        How it works?
        <img src={Underline} className="underline" />
      </p>
      <img src={Work1} className="work1" />
      <img src={Work2} className="work2" />
      <img src={Work3} className="work3" />
      <div className="btn-block">
        <button className="btn1">TRY IT YOURSELF</button>
      </div>
    </div>
  );
};

export default Workpage;
