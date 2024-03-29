import React from "react";
import { userService } from "services/userService";
import { Redirect } from "react-router-dom";
import SignInForm from "components/signin-form";
import image from "assets/signin-rafiki.svg";

const SignIn = (props) => {
  if (userService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-5 col-md-8">
            <img className="img-fluid w-80" src={image} alt="signin" />
          </div>
          <div className="col-xl-6 col-lg-7 col-md-12">
            <SignInForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
