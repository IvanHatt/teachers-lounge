import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const CardsTest = () => {
  return (
    <div className="container prof-container">
      <div className="row ">
        <div className="col-xl-6">
          <div className="card mx-auto mb-3 prof">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="prof-image mx-auto">
                  <img
                    src={user}
                    className="img-radius"
                    alt="User-Profile"
                  ></img>
                </div>
                <h5 className="prof-name">Card title</h5>
                <div className="card-body">
                  <ul className="prof-details">
                    <li>
                      <FontAwesomeIcon icon={faDollarSign} /> 80 ils per hour
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAt} />
                      john@gmail.com
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} />
                      054444444
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="prof-header d-flex">
                  <ul className="prof-details align-self-end">
                    <li>
                      <FontAwesomeIcon icon={faGraduationCap} /> Math Teacher
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      Tel Aviv
                    </li>
                  </ul>
                  <a href="/">
                    <FontAwesomeIcon icon={faStar} />
                  </a>
                </div>
                <div className="prof-description">
                  <p>
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
