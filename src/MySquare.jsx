import React from "react";
const Mysquare = (props) => {
  return (
    <div>
      <button className="square" onClick={props.squareClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Mysquare;
