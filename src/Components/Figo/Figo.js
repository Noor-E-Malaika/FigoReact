import React from 'react';
import './Figo.css'; 
import burger from '../../assets/burger.jpg'; 

const Burger = () => {
  return (
    <div className="burger">
      <h3>History Of Figo</h3>
      <h1>We Cook Tradition & <br /> Family Recipes</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Impedit
        distinctio obcaecati fugit magnam laboriosam <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing <br /> Molestiae possimus libero explicabo officiis,
        quibusdam iure!
      </p>
      <button>Explore Our Story</button>
      <div className="burger-img">
        <img src={burger} alt="Burger" />
      </div>
    </div>
  );
};

export default Burger;
