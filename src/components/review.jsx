import React from "react";
import "components/css/review.css";
import user from "assets/user.jpg";

const Review = () => {
  return (
    <section className="reviews mb-5">
      <div className="container">
        <div className="text-center pb-3">
          <h1>Students' reviews</h1>
        </div>
        <div className="row justify-content-center card-container">
          <div className="col-lg-3">
            <div className="card review-card">
              <div className="card-block p-2">
                <div className="review-image">
                  <img
                    src={user}
                    className="img-radius"
                    alt="User-Profile"
                  ></img>
                </div>
                <h6 className="card-title">Excellent!!</h6>
                <hr></hr>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <hr></hr>
                <p className="card-text text-right">
                  <small className="text-muted">John, Tel Aviv</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card review-card">
              <div className="card-block p-2">
                <div className="review-image">
                  <img
                    src={user}
                    className="img-radius"
                    alt="User-Profile"
                  ></img>
                </div>
                <h6 className="card-title">Excellent!!</h6>
                <hr></hr>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <hr></hr>
                <p className="card-text text-right">
                  <small className="text-muted">John, Tel Aviv</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card review-card">
              <div className="card-block p-2">
                <div className="review-image">
                  <img
                    src={user}
                    className="img-radius"
                    alt="User-Profile"
                  ></img>
                </div>
                <h6 className="card-title">Excellent!!</h6>
                <hr></hr>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <hr></hr>
                <p className="card-text text-right">
                  <small className="text-muted">John, Tel Aviv</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
