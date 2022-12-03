import React from "react";
import Course__search from "./Course__search";
import './../../../styles/header.css'
import Login__modal from "../Modal/Login/Login__modal";
export default function Wrapper({modal}) {
  return (
    <div className="wrapper">
      <div>
      <h1>Dasturlashga oid onlayn darslar</h1>
      <Course__search />
      </div>
      {
        modal.open && <Login__modal close={modal.setOpen} /> 
      }
    </div>
  );
}
