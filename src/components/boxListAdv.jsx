import React from "react";
import "components/css/boxListAdv.css";

const BoxListAdv = (props) => {
  const { image, title, description } = props;
  return (
    <section className="box-list-adv">
      <div className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <img className="img-fluid w-80" src={image} alt="teacher" />
            </div>
            <div className="col-xl-5 col-lg-6">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxListAdv;
