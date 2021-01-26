import React from "react";
import "tests/cards-test.css";
import user from "assets/user.jpg";

const CardsTest = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 mb-5">
          <div className="card review-card">
            <div className="card-block p-2">
              <div className="review-image">
                <img src={user} className="img-radius" alt="User-Profile"></img>
              </div>
              <h6 className="card-title">Excellent!!</h6>
              <hr></hr>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <hr></hr>
              <p className="card-text text-right">
                <small className="text-muted">John, Tel Aviv</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card review-card">
            <div className="card-block p-2">
              <div className="review-image">
                <img src={user} className="img-radius" alt="User-Profile"></img>
              </div>
              <h6 className="card-title">Excellent!!</h6>
              <hr></hr>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <hr></hr>
              <p className="card-text text-right">
                <small className="text-muted">John, Tel Aviv</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card review-card">
            <div className="card-block p-2">
              <div className="review-image">
                <img src={user} className="img-radius" alt="User-Profile"></img>
              </div>
              <h6 className="card-title">Excellent!!</h6>
              <hr></hr>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
  );
};

export default CardsTest;
