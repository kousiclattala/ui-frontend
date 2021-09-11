import React from "react";
import "../css/plan.css";
import Plan1 from "../assests/plan-1-box-1.svg";
import Plan2 from "../assests/plan-2-box-2.svg";
import Underline from "../assests/underline.svg";

const Planpage = () => {
  return (
    <div className="plan container container-fluid">
      <div className="row">
        <div className="heading1">
          <h1>Pick your plan</h1>
          <img src={Underline} className="line1" />
        </div>
        <div className="col col-6 plan1">
          <img src={Plan1} />
          <h3 className="h1">Monthly</h3>
          <p className="p">$18 / mo</p>
          <button className="btn_1">FIND YOUR BOX</button>
        </div>
        <div className="col col-6 plan2">
          <img src={Plan2} />
          <h3 className="h1">Yearly</h3>
          <p className="p">$15 / mo</p>
          <button className="btn_1">FIND YOUR BOX</button>
        </div>
        <p className="footer-line">
          Your plan auto-renews at the end of 30 days from the 1st day you
          signed-up.
        </p>
      </div>
    </div>
  );
};

export default Planpage;
