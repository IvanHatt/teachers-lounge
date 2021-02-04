import React from "react";
import { Link } from "react-router-dom";
import "components/css/bannerAdv.css";

const BannerAdv = (props) => {
  const { title, description, image, loggedIn } = props;
  return (
    <section className="banner-adv d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <h1>{title}</h1>
            <p>{description}</p>
            {!loggedIn && (
              <React.Fragment>
                <Link to="/signup" className="btn-styled">
                  Join for Free
                </Link>
                <Link to="/prof-signup" className="btn-styled">
                  Join as a Teacher
                </Link>
              </React.Fragment>
            )}
          </div>
          <div className="col-xl-6 col-lg-5 col-md-8">
            <img className="img-fluid w-80" src={image} alt="learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAdv;
