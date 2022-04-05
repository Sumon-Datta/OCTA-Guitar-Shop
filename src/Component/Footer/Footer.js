import React from "react";
import "./Footer.css";
import "../FontAwesome/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="Footer-icons">
      <div className="icons">
        <FontAwesomeIcon icon={["fab", "twitter"]} />

        <FontAwesomeIcon icon={["fab", "facebook"]} />

        <FontAwesomeIcon icon={["fab", "linkedin"]} />

        <FontAwesomeIcon icon={["fab", "github"]} />
      </div>
      <div className="Footer_copyright">
        <p className="copyright">OCTA Guitar Shop BD | Copyright © 2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
