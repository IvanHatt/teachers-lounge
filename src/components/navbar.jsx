import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "assets/logo.svg";
import "components/css/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="main-navbar">
        <nav className="navbar navbar-expand-lg bg-transparent">
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
            <ul className="navbar-nav">
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
              <li className="nav-item">
                {user && user.prof && (
                  <NavLink className="nav-link" to="/my-profs">
                    My Profs
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {user && user.prof && (
                  <NavLink className="nav-link" to="/prof-create">
                    Create Prof
                  </NavLink>
                )}
              </li>
            </ul>
            <ul className="navbar-nav mt-3 mt-sm-0">
              {!user && (
                <React.Fragment>
                  <li>
                    <NavLink className="btn-styled empty" to="/signin">
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn-styled" to="/signup">
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn-styled" to="/prof-signup">
                      Teacher
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li>
                    <NavLink className="btn-styled" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
