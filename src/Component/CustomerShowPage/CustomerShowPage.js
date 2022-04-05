import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../FontAwesome/FontAwesome";
import "./CustomerShowPage.css";
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const CustomerShowPage = ({ reviewer }) => {
  return (
    <div>
      <div className="load_box">
        <div className="img_load">
          <img src={reviewer.picture} alt="" />
        </div>
        <div className="design_area">
          <p className="design">
            <small>Name</small>:{reviewer.name}
          </p>
          <p className="design">
            <small>Comment</small>:{reviewer.comment}
          </p>
          <div>
            <p className="design">
              <small>Rating</small>:{reviewer.rating}
            </p>
            <div className="star">
              <div className="star_t">
                ( <FontAwesomeIcon className="svg" icon={faStar} />
                <FontAwesomeIcon className="svg" icon={faStar} />
                <FontAwesomeIcon className="svg" icon={faStar} />
                <FontAwesomeIcon className="svg" icon={faStar} />
                <FontAwesomeIcon className="svg" icon={faStarHalfStroke} />)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerShowPage;
