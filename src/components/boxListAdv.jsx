import React from "react";
import "components/css/boxListAdv.css";

const BoxListAdv = (props) => {
  const { image, title, description, items } = props;
  return (
    <section className="boxListAdv">
      <div className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <img className="img-fluid w-80" src={image} alt="fff" />
            </div>
            <div className="col-xl-5 col-lg-6">
              <h2>{title}</h2>
              <p>{description}</p>
              <ul>
                {items.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxListAdv;
