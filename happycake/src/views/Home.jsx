import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import imgPoke from "../assets/img/ponkelindo.jpg";
import "./Home.css";

export const Home = (props) => {
  return (
    <div className="welcome-container text-fm">
      <h1 >Bienvenido a Happy Cake</h1>

      <div className="card-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgPoke} />
        </Card>
      </div>
    </div>
  );
};

Home.propTypes = {};
