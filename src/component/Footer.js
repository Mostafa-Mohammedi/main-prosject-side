import React from "react";
import Card from "../UI/Card.";
import CardItem from "../UI/CardItem";
import Form from "./Form";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineAudit } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../UI/card.css";
import "../component/footer.css";
import "../UI/cardItem.css";

const Footer = () => {
  return (
    <footer className="footer-content">
      <Card style="card-content-footer">
        <CardItem styling="footer-general">
          <h2>website</h2>
          <p>
            This is the project website for outputing my
            <span>hostet website</span>
          </p>
          <p>Mostafa Mohammedi  &#169; 2022</p>
        </CardItem>
      </Card>
      <Card style="card-content-footer">
        <CardItem styling="footer-skils">
          <h2>Skils</h2>
          <p>Programmering</p>
          <p>Economics</p>
        </CardItem>
      </Card>

      <Card style="card-content-footer">
        <hr />
        <CardItem styling="footer-carditem-document">
          <a target="_blank" href="https://mohmos94.github.io/website/">
            <p>
              <AiOutlineAudit />
            </p>
          </a>
          <a target="_blank" href="http://mohmos94.github.io/project-site">
            <p>
              <AiFillHome />
            </p>
          </a>
          <a target="_blank" href="https://github.com/mohmos94">
            <p>
              <AiFillGithub />
            </p>
          </a>
        </CardItem>
      </Card>
      <Card style="card-content-footer">
        <hr />
        <CardItem styling="footer-carditem-document">
          <a target="_blank" href="https://no.linkedin.com/in/mostafa-mohammedi-525aab1a0?trk=people-guest_people_search-card">
            <p>
              <AiFillLinkedin />
            </p>
          </a>
          <a target="_blank" href="https://www.facebook.com/mostafa.mohammedi.5">
            <p>
              <AiFillFacebook />
            </p>
          </a>
          <a target="_blank" href="https://www.instagram.com/mosti_1994/?hl=nb">
            <p>
              <AiFillInstagram />
            </p>
          </a>
        </CardItem>
      </Card>
      <div>
        <Form />
      </div>
    </footer>
  );
};

export default Footer;
