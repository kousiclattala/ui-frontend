import React from "react";
import Footerpage from "./components/Footerpage";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Planpage from "./components/Planpage";
import Socialpage from "./components/Socialpage";
import Workpage from "./components/Workpage";

const App = () => {
  return (
    <div className="container container-fluid">
      <Navbar />
      <Homepage />
      <Planpage />
      <Workpage />
      <Socialpage />
      <Footerpage />
    </div>
  );
};

export default App;
