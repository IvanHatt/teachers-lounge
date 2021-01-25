import React from "react";
import "components/css/review.css";
import user from 'assets/user.jpg'

const Review = () => {
  return (
    <section className="reviews mb-5">
      <div className="container">
        <div className="text-center pb-3">
          <h2>Students' reviews</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="card-deck">
              <div className="review-card card">
                <img
                  className="card-img-top card-image-dettached rounded-circle img-thumbnail mx-auto d-block"
                  src={user}
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Excellent!!</h5>
                  <p className="card-text">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, quod exercitationem vero iste facilis sapiente tene
                    suscipit!"
                  </p>
                  <p className="card-text  text-right">
                    <small className="text-muted">John, Tel Aviv</small>
                  </p>
                </div>
              </div>
              <div className="review-card card">
                <img
                  className="card-img-top card-image-dettached rounded-circle img-thumbnail mx-auto d-block"
                  src={user}
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <p className="card-title">Excellent!!</p>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, quod exercitationem vero iste facilis sapiente tene
                    suscipit!
                  </p>
                  <p className="card-text text-right">
                    <small className="text-muted">John, Tel Aviv</small>
                  </p>
                </div>
              </div>
              <div className="review-card card">
                <img
                  className="card-img-top card-image-dettached rounded-circle img-thumbnail  mx-auto d-block"
                  src={user}
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Excellent!!</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, quod exercitationem vero iste facilis sapiente tene
                    suscipit!
                  </p>
                  <p className="card-text  text-right">
                    <small className="text-muted">John, Tel Aviv</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
