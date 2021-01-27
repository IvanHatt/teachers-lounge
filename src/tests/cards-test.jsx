import React, { useState } from "react";
import "tests/cards-test.css";
import user from "assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faAt,
  faPhone,
  faGraduationCap,
  faMapMarkerAlt,
  faStar,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

const CardsTest = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container prof-container">
      <div className="row ">
        <div className="col-xl-6">
          <div className="card mx-auto mb-3 prof">
            <div className="row no-gutters">
              <div className="col-md-4">
                <a href="/" className="favorite-icon icon-top mob">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <div className="prof-image mx-auto">
                  <img
                    src={user}
                    className="img-radius"
                    alt="User-Profile"
                  ></img>
                </div>
                <h5 className="prof-name">John Doe</h5>
                <div className="card-body-details">
                  <ul className="prof-details">
                    <li>
                      <FontAwesomeIcon icon={faGraduationCap} />
                      <span>Math Teacher</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span>80 ils per hour </span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>Tel Aviv </span>
                    </li>
                    <li className="mob">
                      <FontAwesomeIcon icon={faAt} />
                      <span>john@gmail.com</span>
                    </li>
                    <li className="mob">
                      <FontAwesomeIcon icon={faPhone} />
                      <span>054444444</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="mob toggle-icon icon-bottom"
                    onClick={() => setToggle(!toggle)}
                  >
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                  </button>
                </div>
              </div>
              {toggle && (
                <div className="p-3 mob">
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              )}
              <div className="col-md-8 desk">
                <div className="prof-header d-flex">
                  <ul className="prof-details align-self-center">
                    <li>
                      <FontAwesomeIcon icon={faAt} />
                      <span>john@gmail.com</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} />
                      <span>054444444</span>
                    </li>
                  </ul>
                  <a href="/" className="favorite-icon icon-top">
                    <FontAwesomeIcon icon={faStar} />
                  </a>
                </div>
                <div className="prof-description">
                  <p id="collapseExample">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTest;
