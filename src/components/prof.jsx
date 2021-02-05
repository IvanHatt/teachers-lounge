import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faAt,
  faPhone,
  faGraduationCap,
  faMapMarkerAlt,
  faStar,
  faAngleDoubleDown,
  faTrashAlt,
  faEdit,
  faUsersSlash,
} from "@fortawesome/free-solid-svg-icons";
import "components/css/prof.css";
import { userService } from "services/userService";
import { profService } from "services/profService";
import { profPlaceholder } from "config/default.json";

const Prof = ({ prof, favDisplay, myProfsDisplay }) => {
  const loggedIn = userService.getCurrentUser();
  const [toggle, setToggle] = useState(false);
  const {
    profName,
    profTitle,
    profCity,
    profDescription,
    profEmail,
    profImage,
    profPhone,
    profPrice,
    profId,
    user_id,
  } = prof;

  return (
    <div className="col-xl-6 prof-container">
      <div className="card mx-auto mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Link
              to="/"
              className="favorite-icon icon-top mob"
              data-toggle="tooltip"
              data-placement="top"
              title="Add to Favorites"
            >
              <FontAwesomeIcon icon={faStar} />
            </Link>
            <div className="prof-image">
              <img
                src={profImage || profPlaceholder.profImage}
                className="img-radius"
                alt="User-Profile"
              ></img>
            </div>
            <div className="card-body-details">
              <h3 className="prof-name mob">
                {profName || profPlaceholder.profName}
              </h3>
              <ul className="prof-details">
                <li className="mob">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>{profTitle || profPlaceholder.profTitle} Teacher</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <span>
                    {profPrice || profPlaceholder.profPrice} ils per hour{" "}
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{profCity || profPlaceholder.profCity}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faAt} />
                  {loggedIn ? (
                    <span>{profEmail || profPlaceholder.profEmail}</span>
                  ) : (
                    <Link to="/signin" className="btn-styled-small">
                      SignIn to discover
                    </Link>
                  )}
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  {loggedIn && (
                    <span>{profPhone || profPlaceholder.profPhone}</span>
                  )}
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
              <p>{profDescription || profPlaceholder.profDescription}</p>
            </div>
          )}
          <div className="col-md-8 desk">
            <div className="prof-header">
              <h3 className="prof-name mw-80">
                {profName || profPlaceholder.profName}
              </h3>
              <ul className="prof-details">
                <li>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>{profTitle || profPlaceholder.profTitle} Teacher</span>
                </li>
              </ul>
              <div className="icon-top">
                {favDisplay && (
                  <button
                    type="button"
                    onClick={() => userService.removeFavorite(profId)}
                    className="favorite-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Remove from to Favorites"
                  >
                    <FontAwesomeIcon icon={faUsersSlash} />
                  </button>
                )}
                {!favDisplay && !myProfsDisplay && (
                  <button
                    type="button"
                    onClick={() => userService.addFavorite(profId)}
                    className="favorite-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to Favorites"
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                )}
                {loggedIn &&
                  loggedIn.prof &&
                  loggedIn._id === user_id &&
                  myProfsDisplay && (
                    <React.Fragment>
                      <Link
                        to="/"
                        className="favorite-icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit Card"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        className="favorite-icon"
                        onClick={() => profService.deleteProf(profId)}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </React.Fragment>
                  )}
              </div>
            </div>
            <div className="prof-description">
              <p>{profDescription || profPlaceholder.profDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof;
