import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "assets/logo.svg";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-md">
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
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
          <ul className="navbar-nav ml-auto">
            {!user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link btn m-2" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn m-2" to="/signin">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn m-2" to="/prof-signup">
                    Teacher SignUp
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
            ></input>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
