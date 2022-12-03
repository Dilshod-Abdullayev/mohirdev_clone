import React from "react";
import Data from "../../Data/Data";;

  
const Practicums = () => {

  return (
    <div>
      {practicum.map((item) => {
        <img key={item.id} src={item.img} />;
      })}
    </div>
  );
};

export default Practicums;
