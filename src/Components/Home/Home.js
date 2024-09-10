import React from "react";
import banner1 from "../../assets/banner1.png";
import "./Home.css";

const about = () => {
  return (
    <div className="About">
      <h1>
        All in Good Taste <br />
        Food With Figo.{" "}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam <br />
        nobis nisi sapiente similique expedita excepturi, mollitia <br />
        sint itaque maxime voluptates? Lorem, ipsum dolor.
      </p>
      <input type="text" placeholder="Enter Your Adress" className="mb" />
      <button className="btn">Get Started</button>
      <div>
        <img src={banner1} alt="" className="image" />
      </div>
    </div>
  );
};

export default about;
