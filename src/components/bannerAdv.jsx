import React from "react";
import "components/css/bannerAdv.css";

const BannerAdv = (props) => {
  const { title, description, image } = props;
  return (
    <section className="banner-adv d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <h1>{title}</h1>
            <p>{description}</p>
            <a
              href="/"
              className="btn justify-content-center "
              data-animation="fadeInLeft"
              data-delay="0.7s"
            >
              Join for Free
            </a>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-8">
            <img className="svg" src={image} alt="fff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAdv;
