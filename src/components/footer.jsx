import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "components/css/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-8 col-md-6 mb-4">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor</p>
              <p>Amet consectetur adipisicing elit</p>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <h1>Find Us!</h1>
              <ul className="social-network d-flex">
                <li>
                  <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faSnapchat} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pb-3">
            <p>© {new Date().getFullYear()} Copyright: Ivan Hattemer</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
