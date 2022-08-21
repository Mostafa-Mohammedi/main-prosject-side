import React from "react";
import Card from "../UI/Card.";
import video from "../video/1.mp4";
import "./header.css";

const Header = (props) => {
    return (
        <Card style="header-content">
            <video classname="video-header" src={video} autoPlay loop muted></video>
            <div className="content-page-header">
            <h1 className="header-header-tag">{props.header}</h1>
            <h2 className="h2-tagg" >{props.h2}</h2>
            <button className="header-button">{props.button}</button>
            </div>
        </Card>
    );
};

export default Header;
