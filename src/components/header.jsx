import React from "react";
import "components/css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <section className="view-header d-flex align-items-end">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-11 col-md-12">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
