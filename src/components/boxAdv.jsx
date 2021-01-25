import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChalkboardTeacher,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "components/css/boxAdv.css";

const BoxAdv = () => {
  return (
    <section className="box-adv-area">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="box-adv-item">
              <div className="box-adv-item-icon">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <div className="box-adv-item-text">
                <h3>Hundreds of teachers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="box-adv-item">
              <div className="box-adv-item-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="box-adv-item-text">
                <h3>Expert instructors</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="box-adv-item">
              <div className="box-adv-item-icon">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div className="box-adv-item-text">
                <h3>Success in your field!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxAdv;
