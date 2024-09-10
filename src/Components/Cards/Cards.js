import React from "react";
import Card from "react-bootstrap/Card";
import menu from "../../assets/menu.png";
import bike from "../../assets/bike.png";
import offer from "../../assets/offer.png";
import "./Card.css";

const Cards = () => {
  return (
    <div className="cards">
      <h3>Reason</h3>
      <h1>Why Choose Us?</h1>
      <div className="Carrd">
        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <div className="card-img-container">
              <Card.Img variant="top" src={menu} />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Various Menu</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <div className="card-img-container">
              <Card.Img variant="top" src={bike} />
            </div>
            <Card.Body>
              <Card.Title className="card-title">
                Pocket Delivery Menu
              </Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <div className="card-img-container">
              <Card.Img variant="top" src={offer} />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Best Offers</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
