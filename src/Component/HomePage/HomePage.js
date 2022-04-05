import React from "react";
import logo from "../images/image.jpg";
import "./HomePage.css";
import HomePagereview from "../HomePagereview/HomePagereview";
const HomePage = () => {
  return (
    <div>
      <div className="home_page">
        <div className="heading">
          <h1>Here are the <span>best places</span> to buy guitars
              One of <span> Guitar Center’s</span> best perks is their used catalog.
          </h1>
          <p>
            If you are a guitar enthusiast who’s looking for a specific model of
            guitar, or someone who’s looking to save some money, buying guitars
            online is the way to go. Online shopping has obviously exploded in
            recent history across all industries, and musical instruments are no
            exception. With thousands of online guitar retailers out there, it
            can be a daunting task finding the right place to shop for
          </p>
          <div className="button_demo">
            <button className="live_demo">Live Demo</button>
        </div>
        </div>
       
        <div className="home_images">
          <img src={logo} alt="" />
        </div>
      </div>
      <HomePagereview></HomePagereview>
    </div>
  );
};

export default HomePage;
