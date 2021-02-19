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
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      let portsize = window.innerWidth;
      if (scrolled >= 120 && portsize > 1000) {
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
        className="navbar fixed-top navbar-expand-lg justify-content-between"
        style={
          scrollState === "nav-up"
            ? {
                padding: "20px 40px 0 40px",
                transition: "0.3s ease-in-out",
              }
            : {
                transition: "0.3s ease-in-out",
              }
        }
      >
        <div className="navbar-brand mr-0">
          <button
            className="user-menu d-lg-none"
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            <span>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </span>
          </button>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul
          className={`navbar-nav d-none ${
            scrollState === "nav-up" ? "d-lg-flex" : ""
          }`}
        >
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/explore">
              Explore
            </NavLink>
          </li>
        </ul>

        <div className="float-right">
          {!user && (
            <ul className="navbar-nav">
              <li>
                <NavLink className="btn-styled opaque btn-mob" to="/signin">
                  Sign In
                </NavLink>
              </li>
              <li className="d-none d-xl-inline">
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
                  id="user-menu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.prof ? (
                    <img
                      src={`${apiUrl}/profs/${user.profImage}`}
                      alt="user"
                      className="mb-2"
                    />
                  ) : (
                    <span className="mb-2">
                      Student
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        size="3x"
                        style={{ color: "#f9f871" }}
                      />
                    </span>
                  )}
                </button>
                <div className="dropdown-menu" aria-labelledby="user-menu">
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
      {toggle && (
        <div className="mob-menu d-lg-none">
          <div className="mob-item it-one">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </div>
          <div className="mob-item it-two">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </div>
          <div className="mob-item it-three">
            <NavLink className="nav-link" to="/explore">
              Explore
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
