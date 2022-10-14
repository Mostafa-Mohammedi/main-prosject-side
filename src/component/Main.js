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
            <img classname="cardItem-img" src={props.imgreact} alt={props.altreact}></img>
          </div>
          <div className="img-icon">
            {props.iconreact}
            <p>{props.icon_contentreact}</p>
          </div>
          <p>{props.contentreact}</p>
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
        <CardItem styling="card-content-main">
          <div className="div-img-main">
            <img
              classname="cardItem-img"
              src={props.imgNet}
              alt={props.altNet}
            ></img>
          </div>
          <div className="img-icon">
            {props.icontentNet}
            <p>{props.iconNet}</p>
          </div>
          <p>{props.contentNet}</p> 
          <button className="main-button"><a href="https://github.com/mohmos94/ExchangeRateSolution" target={"_blank"}>click her</a> </button>
        </CardItem>
      </div>
    </Card>
  );
};

export default Main;
