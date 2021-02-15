import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faStar,
  faSearch,
  faSignOutAlt,
  faGraduationCap,
  faAddressCard,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { apiUrl } from "config/default.json";
import logo from "assets/logo.svg";
import "components/css/navbar.css";

const Navbar = (props) => {
  const { user } = props;
  const [scrollState, setScrollState] = useState("nav-up");

  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "nav-down") {
          setScrollState("nav-down");
        }
      } else {
        if (scrollState !== "nav-up") {
          setScrollState("nav-up");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <div className="main-navbar">
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={
          scrollState === "nav-up"
            ? {
                padding: "40px",
                transition: "0.3s ease-in-out",
              }
            : {
                transition: "0.3s ease-in-out",
              }
        }
      >
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav" style={scrollState === "nav-up" ? {display: 'inherit'}: {display: 'none'}}>
            <li className="nav-item mr-3">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink className="nav-link" to="/explore">
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
          <div className="mt-3 float-right">
            {!user && (
              <ul className='navbar-nav'>
                <li>
                  <NavLink className="btn-styled opaque"  to="/signin">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink className="btn-styled" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            )}
            {user && (
              <React.Fragment>
                <div className="dropdown dropleft">
                  <button
                    className="user-menu dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user.prof ? (
                      <img
                        src={`${apiUrl}/profs/${user.profImage}`}
                        alt="user"
                      />
                    ) : (
                      <span>
                        Student
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          size="3x"
                          style={{ color: "#f9f871" }}
                        />
                      </span  >
                    )}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <span className="dropdown-header">{user.profName}</span>
                    <span className="dropdown-header">{user.profEmail}</span>
                    <hr />
                    <NavLink className="dropdown-item" to="/favorites">
                      <div className="icon">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      Favorites
                    </NavLink>
                    <NavLink className="dropdown-item" to="/explore">
                      <div className="icon">
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                      Explore
                    </NavLink>
                    {user && user.prof && (
                      <React.Fragment>
                        <NavLink className="dropdown-item" to="/my-profs">
                          <div className="icon">
                            <FontAwesomeIcon icon={faAddressCard} />
                          </div>
                          My Cards
                        </NavLink>
                        <NavLink className="dropdown-item" to="/prof-create">
                          <div className="icon">
                            <FontAwesomeIcon icon={faGraduationCap} />
                          </div>
                          New Card
                        </NavLink>
                      </React.Fragment>
                    )}
                    <hr />
                    <NavLink className="dropdown-item" to="/logout">
                      <div className="icon">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                      </div>
                      Logout
                    </NavLink>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
