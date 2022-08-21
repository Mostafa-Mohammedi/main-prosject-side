import React from "react";

const CardItem = (props) => {
  return <div className={"cardItem " + props.styling}>{props.children}</div>;
};

export default CardItem;
