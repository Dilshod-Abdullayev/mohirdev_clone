import React from "react";
import { practicum } from "../../Data/Data";

const Practicums = () => {
  return (
    <div className='practicum__courses'>
      {practicum.map((val) => (
        <div className='practicum__course' key={val.id  }>
           <a href={val.link}> <img src={val.img}/> </a>
        </div>
      ))}
    </div>
  );
};

export default Practicums;
