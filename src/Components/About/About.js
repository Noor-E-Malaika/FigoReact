import React from 'react'
import './About.css'
import chef from '../../assets/chef.jpg'

const About = () => {
  return (
    <div className='chef'>
        <img src={chef} alt=""  className='chefi'/>
        <div className='text'>
        <h3>welcome</h3>
        <h1>Welcome To Figo <br/> Restaurant.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Eius eligendi ut ea explicabo ratione eveniet dolores <br />
         expedita consequuntur laborum id.  Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Voluptatibus, asperiores. <br/> amet consectetur adipisicing elit. Voluptatibus, asperiores<br/>eligendi ut ea explicabo ratione eveniet dolores .</p>
        <button>Explore Our Story</button>
        </div>
    </div>
  )
}

export default About