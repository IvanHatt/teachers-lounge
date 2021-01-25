import React from "react";
import "components/css/review.css";

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
                  style={{ width: "5rem" }}
                  className="card-img-top rounded-circle img-thumbnail mx-auto d-block mt-2"
                  src="https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_960_720.png"
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Excellent!!</h5>
                  <p className="card-text">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, quod exercitationem vero iste facilis sapiente tene
                    suscipit!"
                  </p>
                  <p className="card-text">
                    <small className="text-muted">John, Tel Aviv</small>
                  </p>
                </div>
              </div>
              <div className="review-card card">
                <img
                  style={{ width: "5rem" }}
                  className="card-img-top rounded-circle img-thumbnail mx-auto d-block mt-2"
                  src="https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_960_720.png"
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Excellent!!</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, quod exercitationem vero iste facilis sapiente tene
                    suscipit!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">John, Tel Aviv</small>
                  </p>
                </div>
              </div>
              <div className="review-card card">
                <img
                  style={{ width: "5rem" }}
                  className="card-img-top rounded-circle img-thumbnail  mx-auto d-block mt-2"
                  src="https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_960_720.png"
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Excellent!!</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, quod exercitationem vero iste facilis sapiente tene
                    suscipit!
                  </p>
                  <p className="card-text">
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
