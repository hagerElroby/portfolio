import React from 'react'
import "./about.css"
import myImg from "../../img/pexels-negative-space-169573.jpg"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
          <img
            src={ myImg}
            alt=""
            className="a-img"/>
      </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Frontend developer from Egypt
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Faculty of engineering <br/> Electrical Systems and Computer Engineering department</h4>
            <p className="a-award-desc">
            I desighen and develop services for customer of all sizes specalizing in creating stylish ,
            modern websites , web services and online store , design and code beautifully simple things, and I love what I do.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About