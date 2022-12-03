import React from "react";
import Fest from "../Fest/Fest";
import Header from "../Header/Header";
import "../../styles/main.css";
import Practicum from "../Practicum/Practicum";
import Zoodpay from "../Zoodpay/Zoodpay";
const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Fest />
        <Practicum />
        <Zoodpay />
      </div>
    </div>
  );
};

export default Main;
