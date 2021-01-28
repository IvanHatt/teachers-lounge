import React, { useState } from "react";
import "components/css/prof.css";
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

const Prof = ({ prof }) => {
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
      <div className="card mx-auto mb-3 prof">
        <div className="row no-gutters">
          <div className="col-md-4">
            <a href="/" className="favorite-icon icon-top mob">
              <FontAwesomeIcon icon={faStar} />
            </a>
            <div className="prof-image mx-auto">
              <img
                src={profImage}
                className="img-radius"
                alt="User-Profile"
              ></img>
            </div>
            <div className="card-body-details">
              <ul className="prof-details">
                <li>
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
                  <span>{profEmail}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{profPhone}</span>
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
            <div className="prof-header d-flex">
              <h5 className="prof-name">{profName}</h5>
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
