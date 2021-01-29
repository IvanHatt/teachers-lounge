import React, { useState } from "react";
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
import "components/css/prof.css";
import { userService } from "services/userService";

const Prof = ({ prof }) => {
  const loggedIn = userService.getCurrentUser();
  const {
    profName,
    profTitle,
    profDescription,
    profEmail,
    profImage,
    profPhone,
    profPrice,
  } = prof;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="col-xl-6 prof-container">
      <div className="card mx-auto mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <a href="/" className="favorite-icon icon-top mob">
              <FontAwesomeIcon icon={faStar} />
            </a>
            <div className="prof-image">
              <img
                src={profImage}
                className="img-radius"
                alt="User-Profile"
              ></img>
            </div>
            <div className="card-body-details">
              <h3 className="prof-name mob">{profName}</h3>
              <ul className="prof-details">
                <li className="mob">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>{profTitle}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <span>{profPrice} ils per hour </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Tel Aviv </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faAt} />
                  {loggedIn ? (
                    <span>{profEmail}</span>
                  ) : (
                    <a href="/signin" className="btn-styled-small">
                      SignIn to discover
                    </a>
                  )}
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  {loggedIn && <span>{profPhone}</span>}
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
              <p>{profDescription}</p>
            </div>
          )}
          <div className="col-md-8 desk">
            <div className="prof-header">
              <h3 className="prof-name mw-80">{profName}</h3>
              <ul className="prof-details">
                <li>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>{profTitle}</span>
                </li>
              </ul>
              <a href="/" className="favorite-icon icon-top">
                <FontAwesomeIcon icon={faStar} />
              </a>
            </div>
            <div className="prof-description">
              <p>{profDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof;
