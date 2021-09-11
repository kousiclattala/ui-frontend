import React from "react";
import Logo from "../assests/logo.svg";
import IG from "../assests/ig.svg";
import FB from "../assests/fb.svg";
import TW from "../assests/tw.svg";
import SC from "../assests/sc.svg";
import "../css/footer.css";

const Footerpage = () => {
  return (
    <footer className="footer container container-fluid">
      <div className="logo-footer">
        <img src={Logo} />
        <p className="logo-text">UPBOX</p>
      </div>
      <div className="social-icons">
        <img src={IG} className="ig" />
        <img src={FB} className="fb" />
        <img src={TW} className="tw" />
        <img src={SC} className="sc" />
      </div>
      <div className="link1">
        <h3 className="h2-1">UPBOX</h3>
        <p className="t1">Upbox Bag</p>
        <p className="t1 t1-2">Upbox Box Platinum</p>
        <p className="t1 t1-3">Upbox Box VIP</p>
        <p className="t1 t1-4">Deals</p>
        <p className="t1 t1-5">Seasonal Items</p>
        <p className="t1 t1-6">Upbox Promise</p>
      </div>
      <div className="link2">
        <h3 className="h2">FIND US ON</h3>
        <p className="t2">Instagram</p>
        <p className="t2 t1-2">Facebook</p>
        <p className="t2 t1-3">TikTok</p>
        <p className="t2 t1-4">SnapChat</p>
        <p className="t2 t1-5">Twitter</p>
      </div>
      <div className="link3">
        <h3 className="h3">PRODUCT</h3>
        <p className="t3">Get The App</p>
        <p className="t3 t1-2">Loyalty Program</p>
        <p className="t3 t1-3">Affiliates</p>
        <p className="t3 t1-4">Press</p>
      </div>
      <div className="link4">
        <h3 className="h4">HELP</h3>
        <p className="t4">Returns</p>
        <p className="t4 t1-2">FAQ</p>
        <p className="t4 t1-3">Contact</p>
        <p className="t4 t1-4">Community</p>
        <p className="t4 t1-5">Videos</p>
      </div>
      <hr className="divider" />
      <div className="row">
        <p className="f-text">
          © 2020 Quest AI. Upbox is a Sample Project and open source design
          project free for personal and commercial use.
        </p>
        <span className="terms">Terms</span>
        <span className="policy">PrivacyPolicy</span>
      </div>
    </footer>
  );
};

export default Footerpage;
