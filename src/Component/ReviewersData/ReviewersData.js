import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../FontAwesome/FontAwesome";
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

import "./ReviewersData.css";
const ReviewersData = ({ reviewer }) => {
  return (
    <div className="load_box">
      <div className="img_load">
        <img src={reviewer.picture} alt="" />
      </div>
      <div className="design_area">
        <p className="design"><small>Name</small>:{reviewer.name}</p>
        <p className="design"><small>Comment</small>:{reviewer.comment}</p>
        <div>
          <p className="design"><small>Rating</small>:{reviewer.rating}</p>
          <div className="star">
         ( <FontAwesomeIcon className="svg" icon={faStar} />
          <FontAwesomeIcon className="svg" icon={faStar} />
          <FontAwesomeIcon className="svg" icon={faStar} />
          <FontAwesomeIcon className="svg" icon={faStar} />
          <FontAwesomeIcon className="svg" icon={faStarHalfStroke} />)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewersData;
