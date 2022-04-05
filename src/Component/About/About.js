import React from "react";
import logo from "../images/octa.jpg";
import './About.css'
const About = () => {
  return (
    <div className="about_us">
      <h2>About Us</h2>
      <span>
        Hello Music Lovers! OCTAVE is run by Sumon R. who is an Architect by
        Profession and Guitarist by passion. OCTAVE is not just a business to
        us, it’s a desire, a passion! We aim to spred the Art of Music
        throughout Bangladesh by providing the best quality Guitar, Ukulele and
        other musical instruments to all the music lovers . Best quality &
        Authentic producs within affordable price is guranteed at OCTAVE Guitar
        Shop BD! We love music & we believe in quality. We aim to offer our
        customers the highest level of service in Guiitar quality, sales
        consulting & aftersale service. We are dedicated to earn our clients’
        trust through our professional conduct, our many years of experience,
        and our extensive preparation for their needs with our high standard of
        excellence.
      </span>
      <div className="shop_info">
          <h3>SHWOROOM:</h3>
          <h1>OCTA Guitar Shop (BD) </h1>
          <p>Ta-98, 6th Floor,</p>
          <p>Gulshan-Badda Link Road, Dhaka</p>
          <p>www.guitaroctave.com</p>
          <div className="about_shop">
              <img src={logo} alt="" />
          </div>
          <div className="octa_footer">
              <h2>OCTA, The best guitar Shop in BD</h2>
          </div>
      </div>
    </div>
  );
};

export default About;
