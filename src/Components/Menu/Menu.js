import React from 'react';
import './Menu.css'; // Import the CSS file for styling
import Card from 'react-bootstrap/Card'; // Bootstrap Card component
import breakfast from '../../assets/breakfast.png'; // Image import
import legpiece from '../../assets/legpiece.png'; // Image import
import soup from '../../assets/soup.png'; // Image import
import { FaRegSquare } from 'react-icons/fa'; // Importing icons

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <h3>Browse</h3>
      <h1>Explore Our Menu</h1>
      <div className="menu-container">

        <select className="menu-select" size="6">
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Desserts</option>
          <option value="5">Soups</option>
          <option value="6">Drink</option>
        </select>

        <div className="menu-cards">
          <Card className="menu-card">
            <Card.Img variant="top" src={breakfast} />
            <Card.Body>
              <Card.Title className="menu-card-title">Chicken Masala</Card.Title>
              <div className="menu-card-icons">
                <FaRegSquare />
                <FaRegSquare />
                <FaRegSquare />
                <FaRegSquare />
              </div>
              <Card.Text className="menu-card-text">$100</Card.Text>
            </Card.Body>
          </Card>

          <Card className="menu-card">
            <Card.Img variant="top" src={legpiece} />
            <Card.Body>
              <Card.Title className="menu-card-title">Western Sunrise</Card.Title>
              <div className="menu-card-icons">
                <FaRegSquare />
                <FaRegSquare />
                <FaRegSquare />
                <FaRegSquare />
              </div>
              <Card.Text className="menu-card-text">$100</Card.Text>
            </Card.Body>
          </Card>

          <Card className="menu-card">
            <Card.Img variant="top" src={soup} />
            <Card.Body>
              <Card.Title className="menu-card-title">Sandwich Soup</Card.Title>
              <div className="menu-card-icons">
                <FaRegSquare />
                <FaRegSquare />
                <FaRegSquare />
                <FaRegSquare />
              </div>
              <Card.Text className="menu-card-text">$100</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Menu;
