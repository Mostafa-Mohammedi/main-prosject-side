import React from "react";
import Card from "../UI/Card.";
import CardItem from "../UI/CardItem";
import "../component/main.css";

const Main = (props) => {


  return (
    <Card style="main-content">
      <div className="cardItem-content">
        <CardItem styling="card-content-main">
          <div className="div-img-main">
            <img classname="cardItem-img" src={props.img} alt={props.alt}></img>
          </div>
          <div className="img-icon">
            {props.icon}
            <p>{props.icon_content}</p>
          </div>
          <p>{props.content}</p>
          <button  className="main-button"><a href="https://mohmos94.github.io/expense-frontend/" target={"_blank"}>click her</a></button>
        </CardItem>
        <CardItem styling="card-content-main">
          <div className="div-img-main">
            <img
              classname="cardItem-img"
              src={props.imgHtml}
              alt={props.altHtml}
            ></img>
          </div>
          <div className="img-icon">
            {props.icontentHtml}
            <p>{props.iconHtml}</p>
          </div>
          <p>{props.contentHtml}</p> 
          <button className="main-button"><a href="https://mohmos94.github.io/website-master/" target={"_blank"}>click her</a> </button>
        </CardItem>
      </div>
    </Card>
  );
};

export default Main;
