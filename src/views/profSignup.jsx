import React from "react";
import { Redirect } from "react-router-dom";
import { userService } from "services/userService";
import SignUpForm from "components/signup-form";
import image from "assets/teaching-rafiki.svg";

const ProfSignup = (props) => {
  if (userService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-5 col-md-8">
          <img className="img-fluid w-80" src={image} alt="signin" />
        </div>
        <div className="col-xl-6 col-lg-7 col-md-12">
          <SignUpForm title="Sign Up as a Teacher" isProf={true} />
        </div>
      </div>
    </div>
  );
};

export default ProfSignup;
