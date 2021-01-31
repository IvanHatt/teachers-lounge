import React from "react";
import image from "assets/teaching-rafiki.svg";
import ProfCreateForm from "components/prof-create-form";

const ProfCreate = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-8">
          <img className="img-fluid w-80" src={image} alt="signin" />
        </div>{" "}
      </div>
      <div className="row">
        <ProfCreateForm />
      </div>
    </div>
  );
};

export default ProfCreate;
