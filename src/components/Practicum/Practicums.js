import React from "react";
import { practicum } from '../../Data/Data'
  
const Practicums = () => {

  return (
    <div>
       {
        practicum.map((val)=>(
          <h1>{val.id}</h1>
        ))
       }
    </div>
  );
};

export default Practicums;
