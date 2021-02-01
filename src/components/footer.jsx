import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
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
              <ul className="social-network d-flex justify-content-around">
                <li>
                  <Link to="/" className="social-icon faFacebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="social-icon faInstagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="social-icon faLinkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="social-icon faTwitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center p-3">
            <p>
              <small>
                © {new Date().getFullYear()} Copyright: Ivan Hattemer
              </small>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
