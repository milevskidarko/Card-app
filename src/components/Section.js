import React from "react";

export const HeroSection = () => {
  return (
    <div className="title">
      <div>
        <h1>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do</h1>
        <p>Lorem Ipsum dolor sit amet,</p>
      </div>
      <div>
        <ul>
          <li>
            <a href={"http://facebook.com"}>
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href={"http://instagram.com"}>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href={"http://twitter.com"}>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Section = () => {
  return (
    <div className="secondTitle">
      <span>Lorem Ipsum dolor.</span>
      <h1>Lorem Ipsum dolor sit amet</h1>
    </div>
  );
};
