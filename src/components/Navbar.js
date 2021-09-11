import React from "react";
import "../css/navbar.css";
import Logo from "../assests/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand nav-button nav-heading" href="#">
          <img src={Logo} className="d-inline-block pe-2" />
          UPBOX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-button">
                <a className="nav-link active" aria-current="page" href="#">
                  THIS MONTH
                </a>
              </li>
              <li className="nav-item nav-button">
                <a className="nav-link active" href="#">
                  SKIN
                </a>
              </li>
              <li className="nav-item nav-button">
                <a className="nav-link active" href="#">
                  HAIR
                </a>
              </li>
              <li className="nav-item nav-button">
                <a className="nav-link active" href="#">
                  BATH
                </a>
              </li>
              <li className="nav-item nav-button">
                <a className="nav-link active" href="#">
                  SALE
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-dark rounded-pill nav-button px-4 border-2"
                type="submit"
              >
                LOGIN {">"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
