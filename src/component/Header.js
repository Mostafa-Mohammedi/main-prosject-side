import React from "react";
import Card from "../UI/Card.";
import profil from "../img/Mostafa.png";
import "../component/header.css";

const Header = (props) => {
  return (
    <Card style="header-content">
      <img className="img-header" src={profil}></img>
      <div className="content-page-header">
        <h1 className="header-header-tag">{props.header}</h1>
        <h2 className="h2-tagg">{props.h2}</h2>
      </div>
    </Card>
  );
};

export default Header;
