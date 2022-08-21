import React from "react";
import "./card.css";

const Card = (props) => {
  return <div className={"card-content " + props.style}>{props.children} </div>;
};

export default Card;
