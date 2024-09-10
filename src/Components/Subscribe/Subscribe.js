import React from 'react';
import './Subscribe.css'; 
import { FaArrowRight } from "react-icons/fa6";


const Subscription = () => {
  return (
    <div className="last">
      <h3>Subscription</h3>
      <h1>Want To Get Update?</h1>
      <div className="arrow">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          aria-label="Email Address"
        />
        <button aria-label="Subscribe">
        <FaArrowRight />

        </button>
      </div>
    </div>
  );
};

export default Subscription;
