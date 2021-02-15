import React from "react";
import "components/css/header.css";

const Header = ({ title, description, ...props }) => {
  return (
    <section className="view-header d-flex align-items-end">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-11 col-md-12">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
